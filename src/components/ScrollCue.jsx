import { useEffect, useRef, useState } from 'react'
import './ScrollCue.css'

const START = { x: 10, y: 4 }
const ELBOW = 20
const DEFAULT_GEO = { width: 200, height: 100, path: 'M10 4 V64 Q10 84 30 84 H168', endX: 168, endY: 84 }

function buildPath(endX, endY) {
  const midY = Math.max(START.y + 8, endY - ELBOW)
  const dir = endX >= START.x ? 1 : -1
  const cornerX = START.x + dir * ELBOW
  return `M${START.x} ${START.y} V${midY} Q${START.x} ${midY + ELBOW} ${cornerX} ${midY + ELBOW} H${endX - dir * 8}`
}

function handleClick(e) {
  e.preventDefault()
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
}

function ScrollCue() {
  const containerRef = useRef(null)
  const [geo, setGeo] = useState(DEFAULT_GEO)

  useEffect(() => {
    function measure() {
      const container = containerRef.current
      const target = document.getElementById('about-heading-text')
      if (!container || !target) return

      const containerRect = container.getBoundingClientRect()
      const targetRect = target.getBoundingClientRect()

      const endX = targetRect.left - containerRect.left - 14
      const endY = Math.max(60, targetRect.top - containerRect.top + targetRect.height / 2)

      setGeo({
        width: Math.max(60, Math.abs(endX)) + 40,
        height: endY + 16,
        path: buildPath(endX, endY),
        endX,
        endY,
      })
    }

    measure()
    document.fonts?.ready?.then(measure)
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  return (
    <a
      href="#about"
      className="scroll-cue"
      onClick={handleClick}
      ref={containerRef}
      aria-label="Scroll to the About section"
    >
      <svg
        viewBox={`0 0 ${geo.width} ${geo.height}`}
        width={geo.width}
        height={geo.height}
        className="scroll-cue-svg"
        aria-hidden="true"
      >
        <path d={geo.path} className="scroll-cue-path" />
      </svg>
      <span className="scroll-cue-node" />
      <span className="scroll-cue-pulse" style={{ offsetPath: `path('${geo.path}')` }} />
      <span className="scroll-cue-icon" style={{ left: geo.endX - 10, top: geo.endY - 11 }}>&lt;/&gt;</span>
    </a>
  )
}

export default ScrollCue
