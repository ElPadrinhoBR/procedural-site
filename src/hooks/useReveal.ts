import { useEffect, useRef, useState } from 'react'

type RevealOptions = {
  threshold?: number
  rootMargin?: string
  /** Quando false, o elemento volta a esconder ao sair da tela. */
  once?: boolean
}

/**
 * Animacao de entrada progressiva com IntersectionObserver.
 * Se o navegador nao suportar a API (ou o visitante pedir menos movimento),
 * o conteudo aparece imediatamente — nunca fica invisivel.
 */
export function useReveal<T extends HTMLElement>(options: RevealOptions = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -60px 0px', once = true } = options
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setVisible(false)
          }
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [once, rootMargin, threshold])

  return { ref, visible }
}
