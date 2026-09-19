# Procedural — Startup de Gestão

> Transformamos gestão, pessoas e processos em capacidade real de execução.

A **Procedural** é uma **startup de gestão**. Atuamos na interface entre
estratégia, processos, tecnologia e liderança, apoiando organizações que
precisam ganhar previsibilidade e capacidade de execução.

A premissa é simples: **gestão é prática** — método aplicado, decisão com dados
e desenvolvimento das pessoas que sustentam a operação.

**Fundador:** Roberto Mendonça.

Este repositório contém o **site institucional** da Procedural: seis páginas,
três idiomas (PT / EN / ES), formulário de contato funcional e deploy
automático no GitHub Pages.

---

## Temas de atuação

- Gestão ágil com direção estratégica
- Governança e gestão de TI
- Processos e melhoria contínua
- Indicadores e gestão de projetos
- Desenvolvimento de líderes e times

---

## Stack

| Camada | Tecnologia |
| --- | --- |
| Build | Vite 8 (base relativa `./`) |
| UI | React 19 + TypeScript 5.9 (strict) |
| Estilo | Tailwind CSS 4 (tokens em `src/index.css`) |
| Rotas | React Router 7 em `HashRouter` |
| Fontes | Sora + Inter self-hosted (Fontsource) — zero requisição externa |
| Formulário | FormSubmit.co (AJAX, sem backend) |
| Deploy | GitHub Pages via GitHub Actions |

**Por que HashRouter + `base: './'`?** O GitHub Pages só entrega arquivos
estáticos e não permite reescrever rotas no servidor. Com hash, o mesmo build
funciona em `usuario.github.io` **e** em `usuario.github.io/repositorio/` sem
configuração extra e sem 404 quebrado.

---

## Como rodar

```bash
npm install        # instala as dependências
npm run dev        # servidor de desenvolvimento (http://localhost:5173)
npm run build      # type-check + build de produção (gera dist/)
npm run preview    # serve o build de produção localmente
npm run typecheck  # apenas o type-check
npm run smoke      # renderiza todas as páginas em PT/EN/ES e valida o conteúdo
```

O `smoke` é a validação de runtime do projeto: renderiza cada página nos três
idiomas e falha se faltar texto, se a página não montar ou se algo aparecer
como `undefined` / `NaN` na tela.

---

## Deploy no GitHub Pages

Automático: cada push na branch `main` dispara o workflow
`.github/workflows/deploy-pages.yml`, que instala as dependências, roda o
type-check + build e publica o `dist/` no Pages.

Pré-requisito único: nas configurações do repositório, **Settings → Pages →
Source = GitHub Actions**.

---

## Estrutura

```
src/
  App.tsx                    # rotas (HashRouter)
  index.css                  # tokens de design, base e utilitários
  components/
    layout/                  # Header, Footer, LanguageSwitcher, Layout
    sections/                # blocos reutilizados pelas páginas
    ui/                      # Button, Icon, FeatureCard, ContactForm, ...
    diagrams/                # fundo tecnológico do hero (SVG)
  hooks/                     # useReveal (scroll), useSeo (metadados)
  i18n/                      # provider + dicionários pt / en / es
  lib/                       # rotas, marca, envio do formulário, utilitários
  pages/                     # Home, Solutions, Method, Insights, About, Contact, 404
scripts/
  prepare-brand-assets.ps1   # gera os assets de marca a partir do Logotipo.png
  smoke/render-pages.tsx     # validação de runtime (npm run smoke)
public/                      # founder.jpg, robots.txt, brand/ (favicons, logos, og-image)
.github/workflows/           # deploy automático no GitHub Pages
```

---

## Idiomas (PT / EN / ES)

- O dicionário **português** (`src/i18n/translations/pt.ts`) define o contrato
  de tipos. Inglês e espanhol são declarados como `Dict`, então **esquecer uma
  tradução quebra o build** — não existe texto faltando em produção.
- A preferência do visitante é salva no navegador; na primeira visita usamos o
  idioma do browser (fallback: português).
- O atributo `lang` do `<html>` acompanha a troca (leitores de tela + SEO).
- As rotas são fixas (`/solucoes`, `/metodo`, ...) para que um link
  compartilhado funcione em qualquer idioma.

---

## Formulário de contato (FormSubmit.co)

As mensagens do site chegam por e-mail, com a origem indicada no assunto:

```
[Site Procedural] Contato — Português
[Site Procedural] Soluções — English
[Site Procedural] Início — Español
```

O e-mail de destino fica em `src/lib/site.ts` e no dicionário
(`contact.email` nos três idiomas). Na primeira visita ao FormSubmit, é preciso
confirmar o endereço (o serviço envia um e-mail de ativação).

---

## Onde editar o conteúdo

Todo o texto do site vive em `src/i18n/translations/`:

| Arquivo | Conteúdo |
| --- | --- |
| `pt.ts` | português (base, define os tipos) |
| `en.ts` | inglês |
| `es.ts` | espanhol |

Para mudar um texto, edite **os três arquivos** (o build avisa se algo ficar
faltando). Dados de marca e rotas ficam em `src/lib/site.ts`. A foto e o nome
do fundador (seção "Liderança") ficam em `public/founder.jpg` e em
`founder.name` dos dicionários.

---

## Decisões de projeto

**Visual.** Paleta derivada do logotipo (navy profundo + azul tecnológico +
cyan), Sora para títulos e Inter para texto, alternância entre seções claras e
escuras para dar ritmo de leitura.

**Acessibilidade.** Skip link, foco visível, marcos semânticos, `aria-label`
em ícones e controles, erros com `role="alert"`, contraste mínimo AA e respeito
a `prefers-reduced-motion`.

**Performance.** Sem biblioteca de animação ou ícones (SVG próprios +
`IntersectionObserver`), fontes locais com `unicode-range` — o navegador baixa
apenas os subconjuntos usados.

**Sem prova social inventada.** Nada de clientes, números ou cases fictícios.
Onde ainda não há informação verificável, o site diz isso explicitamente.
