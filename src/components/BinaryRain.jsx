import { useEffect, useRef } from 'react'

const COLORS = ['#ff2e55', '#a020f0', '#ff2ee6', '#2e6bff']
const FONT_SIZE = 16
const FPS = 20

function BinaryRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let columns = []
    let width = 0
    let height = 0

    function setup() {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      const count = Math.ceil(width / FONT_SIZE)
      columns = Array.from({ length: count }, () => ({
        y: Math.random() * height,
        speed: 2 + Math.random() * 3,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }))
      ctx.fillStyle = '#08060d'
      ctx.fillRect(0, 0, width, height)
    }

    function drawFrame() {
      ctx.fillStyle = 'rgba(8, 6, 13, 0.15)'
      ctx.fillRect(0, 0, width, height)
      ctx.font = `${FONT_SIZE}px monospace`

      columns.forEach((col, i) => {
        const char = Math.random() > 0.5 ? '1' : '0'
        ctx.fillStyle = col.color
        ctx.globalAlpha = 0.25
        ctx.fillText(char, i * FONT_SIZE, col.y)
        ctx.globalAlpha = 1

        col.y += col.speed
        if (col.y > height + FONT_SIZE) {
          col.y = Math.random() * -100
          col.speed = 2 + Math.random() * 3
          col.color = COLORS[Math.floor(Math.random() * COLORS.length)]
        }
      })
    }

    setup()

    if (reduceMotion) {
      drawFrame()
      window.addEventListener('resize', setup)
      return () => window.removeEventListener('resize', setup)
    }

    let rafId
    let lastFrame = 0
    const interval = 1000 / FPS

    function loop(time) {
      rafId = requestAnimationFrame(loop)
      if (time - lastFrame < interval) return
      lastFrame = time
      drawFrame()
    }
    rafId = requestAnimationFrame(loop)

    function handleResize() {
      setup()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -2,
        pointerEvents: 'none',
      }}
    />
  )
}

export default BinaryRain
