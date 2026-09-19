<#
  prepare-brand-assets.ps1
  ---------------------------------------------------------------------------
  Gera os assets de marca do site a partir de "Logotipo.png" (arquivo original
  mantido intacto na raiz do projeto).

  Saida (public/brand):
    symbol.png            simbolo "P" recortado, com transparencia (fundo escuro/claro)
    logo-full.png         logotipo completo recortado, com transparencia (fundo claro)
    og-image.png          1200x630 para compartilhamento (LinkedIn, WhatsApp, OG)
    favicon-32.png        32x32
    favicon-192.png       192x192
    apple-touch-icon.png  180x180

  Uso:
    powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\prepare-brand-assets.ps1
#>

[CmdletBinding()]
param(
  # ATENCAO: nomes de parametros e variaveis locais nao podem colidir (PowerShell e
  # case-insensitive) - por isso "LogoPath" em vez de "Source".
  [string]$LogoPath = '',
  [string]$OutDir = '',

  # Regioes medidas no arquivo original (bounding boxes por banda de alpha)
  [int[]]$SymbolBox = @(580, 157, 1010, 634),
  [int[]]$FullLogoBox = @(175, 157, 1361, 877)
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

# $PSScriptRoot pode ficar vazio dependendo de como o script e invocado.
$scriptRoot = $PSScriptRoot
if (-not $scriptRoot) { $scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path }
if (-not $scriptRoot) { $scriptRoot = (Get-Location).Path }

if (-not $LogoPath) { $LogoPath = Join-Path $scriptRoot '..\Logotipo.png' }
if (-not $OutDir) { $OutDir = Join-Path $scriptRoot '..\public\brand' }

if (-not (Test-Path $LogoPath)) { throw "Logotipo nao encontrado em: $LogoPath" }
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null

$logo = [System.Drawing.Bitmap]::FromFile((Resolve-Path $LogoPath))

function New-TransparentCrop {
  param(
    $Bitmap,
    [int[]]$Box,
    [int]$Padding = 18
  )

  $x0 = [Math]::Max(0, $Box[0] - $Padding)
  $y0 = [Math]::Max(0, $Box[1] - $Padding)
  $x1 = [Math]::Min($Bitmap.Width - 1, $Box[2] + $Padding)
  $y1 = [Math]::Min($Bitmap.Height - 1, $Box[3] + $Padding)
  $rect = New-Object System.Drawing.Rectangle($x0, $y0, ($x1 - $x0 + 1), ($y1 - $y0 + 1))

  $cropW = [int]$rect.Width
  $cropH = [int]$rect.Height
  $crop = New-Object System.Drawing.Bitmap -ArgumentList $cropW, $cropH
  $g = [System.Drawing.Graphics]::FromImage($crop)
  $g.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy
  $destRect = New-Object System.Drawing.Rectangle -ArgumentList 0, 0, $cropW, $cropH
  $g.DrawImage($Bitmap, $destRect, $rect, [System.Drawing.GraphicsUnit]::Pixel)
  $g.Dispose()

  return $crop
}

function Save-Resized {
  param(
    $Image,
    [int]$Size,
    [string]$Path,
    [double]$PadRatio = 0,
    # Cor de fundo opcional (ex.: navy). Sem ela o PNG fica transparente.
    $Background = $null
  )

  $bmp = New-Object System.Drawing.Bitmap -ArgumentList $Size, $Size
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  if ($Background) { $g.Clear($Background) } else { $g.Clear([System.Drawing.Color]::Transparent) }

  $inner = $Size * (1 - $PadRatio)
  $scale = [Math]::Min($inner / $Image.Width, $inner / $Image.Height)
  $w = [int]($Image.Width * $scale)
  $h = [int]($Image.Height * $scale)
  $x = [int](($Size - $w) / 2)
  $y = [int](($Size - $h) / 2)
  $targetRect = New-Object System.Drawing.Rectangle -ArgumentList $x, $y, $w, $h
  $g.DrawImage($Image, $targetRect)
  $g.Dispose()
  $bmp.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
}

function Measure-SpacedText {
  param(
    $Graphics,
    [string]$Text,
    $Font,
    [single]$Spacing = 0
  )

  $width = 0.0
  foreach ($char in $Text.ToCharArray()) {
    $width += $Graphics.MeasureString([string]$char, $Font).Width + $Spacing
  }
  return $width
}

# Reduz o tamanho da fonte ate o texto caber na largura maxima disponivel.
function New-FittedFont {
  param(
    $Graphics,
    [string]$Text,
    [string]$Family,
    [single]$StartSize,
    [single]$MaxWidth,
    [single]$Spacing = 0,
    [string]$Style = 'Regular'
  )

  $size = $StartSize
  while ($size -gt 8) {
    $styleValue = [System.Drawing.FontStyle]::$Style
    $font = New-Object System.Drawing.Font -ArgumentList $Family, $size, $styleValue
    $width = Measure-SpacedText -Graphics $Graphics -Text $Text -Font $font -Spacing $Spacing
    if ($width -le $MaxWidth) { return $font }
    $font.Dispose()
    $size -= 1
  }
  return New-Object System.Drawing.Font -ArgumentList $Family, 8, ([System.Drawing.FontStyle]::$Style)
}

# Desenha texto com espacamento entre letras (letter-spacing).
function Draw-SpacedText {
  param(
    $Graphics,
    [string]$Text,
    $Font,
    $Brush,
    [single]$X,
    [single]$Y,
    [single]$Spacing = 0
  )

  $cursor = $X
  foreach ($char in $Text.ToCharArray()) {
    $Graphics.DrawString([string]$char, $Font, $Brush, $cursor, $Y)
    $cursor += $Graphics.MeasureString([string]$char, $Font).Width + $Spacing
  }
}

# ---------------------------------------------------------------------------
# 1. Recortes com transparencia
# ---------------------------------------------------------------------------
Write-Host "Logo: $LogoPath" -ForegroundColor DarkGray
$symbol = New-TransparentCrop -Bitmap $logo -Box $SymbolBox -Padding 24
$symbol.Save((Join-Path $OutDir 'symbol.png'), [System.Drawing.Imaging.ImageFormat]::Png)

$fullLogo = New-TransparentCrop -Bitmap $logo -Box $FullLogoBox -Padding 20
$fullLogo.Save((Join-Path $OutDir 'logo-full.png'), [System.Drawing.Imaging.ImageFormat]::Png)

# ---------------------------------------------------------------------------
# 2. Favicons (quadrado, a partir do simbolo)
# ---------------------------------------------------------------------------
$side = [Math]::Max($symbol.Width, $symbol.Height)
$square = New-Object System.Drawing.Bitmap -ArgumentList $side, $side
$gs = [System.Drawing.Graphics]::FromImage($square)
$gs.Clear([System.Drawing.Color]::Transparent)
$gs.DrawImage($symbol, [int](($side - $symbol.Width) / 2), [int](($side - $symbol.Height) / 2))
$gs.Dispose()

Save-Resized -Image $square -Size 32 -Path (Join-Path $OutDir 'favicon-32.png') -PadRatio 0.06
Save-Resized -Image $square -Size 192 -Path (Join-Path $OutDir 'favicon-192.png') -PadRatio 0.06
# iOS nao suporta transparencia (renderiza preto), por isso o icone leva fundo navy.
Save-Resized -Image $symbol -Size 180 -Path (Join-Path $OutDir 'apple-touch-icon.png') -PadRatio 0.18 -Background ([System.Drawing.Color]::FromArgb(255, 6, 13, 27))

# ---------------------------------------------------------------------------
# 3. OG image 1200x630 (fundo navy + grade tecnica + simbolo + wordmark claro)
# ---------------------------------------------------------------------------
$ogW = 1200
$ogH = 630
$og = New-Object System.Drawing.Bitmap -ArgumentList $ogW, $ogH
$go = [System.Drawing.Graphics]::FromImage($og)
$go.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$go.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$go.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

$navy = [System.Drawing.Color]::FromArgb(255, 6, 13, 27)
$go.Clear($navy)

# Halo sutil (circulos concentricos de baixa opacidade)
for ($i = 34; $i -ge 1; $i--) {
  $r = 130 + ($i * 9)
  $alpha = [int](1.6 * (35 - $i))
  $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb($alpha, 24, 96, 190))
  $go.FillEllipse($brush, (950 - $r), (170 - $r), ($r * 2), ($r * 2))
  $brush.Dispose()
}

# Grade tecnica discreta
$gridPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(14, 120, 180, 255), 1)
for ($x = 0; $x -le $ogW; $x += 48) { $go.DrawLine($gridPen, $x, 0, $x, $ogH) }
for ($y = 0; $y -le $ogH; $y += 48) { $go.DrawLine($gridPen, 0, $y, $ogW, $y) }
$gridPen.Dispose()

# Simbolo "P" a direita
$symTarget = 300
$symScale = [Math]::Min($symTarget / $symbol.Width, $symTarget / $symbol.Height)
$symW = [int]($symbol.Width * $symScale)
$symH = [int]($symbol.Height * $symScale)
$symX = $ogW - $symW - 70
$symY = [int](($ogH - $symH) / 2)
$symRect = New-Object System.Drawing.Rectangle -ArgumentList $symX, $symY, $symW, $symH
$go.DrawImage($symbol, $symRect)

# Barra de destaque
$barBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 47, 220, 201))
$go.FillRectangle($barBrush, 72, 152, 64, 6)
$barBrush.Dispose()

$white = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$cyan = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 111, 240, 226))
$soft = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 176, 194, 214))

$families = (New-Object System.Drawing.Text.InstalledFontCollection).Families.Name
$fontFamily = if ($families -contains 'Segoe UI') { 'Segoe UI' } else { 'Arial' }

# Largura util: nao invadir a area do simbolo.
$textMaxWidth = $symX - 72 - 40

$fontBrand = New-FittedFont -Graphics $go -Text 'PROCEDURAL' -Family $fontFamily -StartSize 50 -MaxWidth $textMaxWidth -Spacing 2 -Style Bold
$fontSub = New-FittedFont -Graphics $go -Text 'GESTÃO ÁGIL' -Family $fontFamily -StartSize 19 -MaxWidth $textMaxWidth -Spacing 14
$claimLines = @('Gestão que transforma estratégia', 'em execução.')
$claimSpacing = 0.4
$fontClaim = New-Object System.Drawing.Font -ArgumentList $fontFamily, 25, ([System.Drawing.FontStyle]::Regular)
foreach ($line in $claimLines) {
  $fitted = New-FittedFont -Graphics $go -Text $line -Family $fontFamily -StartSize 25 -MaxWidth $textMaxWidth -Spacing $claimSpacing
  if ($fitted.Size -lt $fontClaim.Size) { $fontClaim.Dispose(); $fontClaim = $fitted } else { $fitted.Dispose() }
}

[void](Draw-SpacedText -Graphics $go -Text 'PROCEDURAL' -Font $fontBrand -Brush $white -X 72 -Y 190 -Spacing 2)
[void](Draw-SpacedText -Graphics $go -Text 'GESTÃO ÁGIL' -Font $fontSub -Brush $cyan -X 74 -Y 268 -Spacing 14)
[void](Draw-SpacedText -Graphics $go -Text $claimLines[0] -Font $fontClaim -Brush $soft -X 74 -Y 340 -Spacing $claimSpacing)
[void](Draw-SpacedText -Graphics $go -Text $claimLines[1] -Font $fontClaim -Brush $soft -X 74 -Y 378 -Spacing $claimSpacing)

$go.Dispose()
$og.Save((Join-Path $OutDir 'og-image.png'), [System.Drawing.Imaging.ImageFormat]::Png)
$og.Dispose()

# ---------------------------------------------------------------------------
# Limpeza
# ---------------------------------------------------------------------------
$symbol.Dispose()
$fullLogo.Dispose()
$square.Dispose()
$logo.Dispose()

Get-ChildItem $OutDir | Select-Object Name, Length | Format-Table -AutoSize
Write-Host "Assets de marca gerados em: $OutDir" -ForegroundColor Green
