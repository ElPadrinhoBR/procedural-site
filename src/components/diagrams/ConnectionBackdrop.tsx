/**
 * Fundo tecnologico do hero: linhas, nos e fluxos representando processos
 * e conexoes. Puramente decorativo (aria-hidden) e sem dependencia externa.
 */
export function ConnectionBackdrop() {
  return (
    <svg
      viewBox="0 0 1200 620"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 size-full"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="flow-blue" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1f74e0" stopOpacity="0" />
          <stop offset="45%" stopColor="#4a97f5" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#4a97f5" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="flow-cyan" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2fdcc9" stopOpacity="0" />
          <stop offset="50%" stopColor="#2fdcc9" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#2fdcc9" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Fluxos principais */}
      <path
        d="M-40 168 C 250 168 300 246 560 246 S 940 300 1250 300"
        fill="none"
        stroke="url(#flow-blue)"
        strokeWidth="1.4"
      />
      <path
        d="M-40 372 C 260 372 330 300 640 300 S 980 372 1250 372"
        fill="none"
        stroke="url(#flow-cyan)"
        strokeWidth="1.2"
      />
      <path
        d="M-40 512 C 280 512 420 452 700 452 S 1000 508 1250 508"
        fill="none"
        stroke="url(#flow-blue)"
        strokeWidth="1"
      />

      {/* Conexoes secundarias */}
      <path d="M560 246 L560 300" stroke="#7fb6ff" strokeOpacity="0.18" strokeWidth="1" />
      <path d="M640 300 L640 452" stroke="#7fb6ff" strokeOpacity="0.18" strokeWidth="1" />
      <path d="M860 322 L860 452" stroke="#7fb6ff" strokeOpacity="0.14" strokeWidth="1" />

      {/* Nos de processo */}
      {[
        { x: 300, y: 209, delay: '0s' },
        { x: 560, y: 273, delay: '0.4s' },
        { x: 860, y: 322, delay: '0.8s' },
        { x: 420, y: 340, delay: '1.2s' },
        { x: 700, y: 452, delay: '1.6s' },
      ].map((node) => (
        <g key={`${node.x}-${node.y}`}>
          <circle cx={node.x} cy={node.y} r="12" fill="#1f74e0" fillOpacity="0.1" />
          <circle
            cx={node.x}
            cy={node.y}
            r="4"
            fill="#2fdcc9"
            fillOpacity="0.85"
            className="animate-pulse"
            style={{ animationDelay: node.delay }}
          />
        </g>
      ))}
    </svg>
  )
}