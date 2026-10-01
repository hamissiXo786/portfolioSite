import { useLayoutEffect } from 'react'

const GROUPS = [
  { sel: '.section-heading, .section-subheading, .more-projects-title', kind: 'rise', step: 0 },
  { sel: '.about-header', kind: 'fade', step: 0 },
  { sel: '.terminal-card, .experience-card, .education-card, .project-card, .footer', kind: 'rise', step: 0.12 },
  { sel: '.skills-group-title', kind: 'slide', step: 0 },
  { sel: '.skill-tile', kind: 'pop', step: 0.07 },
  { sel: '.badge-row .badge, .more-projects-link', kind: 'rise', step: 0.04 },
  { sel: '.experience-block li', kind: 'slide', step: 0.08 },
]

const MAX_STAGGER = 8

export default function useScrollReveal() {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const targets = []
    GROUPS.forEach(({ sel, kind, step }) => {
      document.querySelectorAll(sel).forEach((el) => {
        if (el.classList.contains('in')) return
        const siblings = Array.from(el.parentElement.children).filter((c) => c.matches(sel))
        const index = Math.min(siblings.indexOf(el), MAX_STAGGER)
        el.classList.add('reveal', `reveal-${kind}`)
        if (step) el.style.setProperty('--d', `${(index * step).toFixed(2)}s`)
        targets.push(el)
      })
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('in')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -48px 0px', threshold: 0 },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
