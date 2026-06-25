import { useEffect, useRef } from 'react'

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')
    if (!ctx) return

    let stars: { x: number; y: number; r: number; base: number; sp: number; ph: number }[] = []
    let t = 0
    let rafId: number

    function resize() {
      if (!c) return
      c.width = window.innerWidth
      c.height = window.innerHeight
      const n = Math.floor((c.width * c.height) / 5500)
      stars = Array.from({ length: n }, () => ({
        x: Math.random() * c.width,
        y: Math.random() * c.height,
        r: Math.random() * 1.1 + 0.1,
        base: Math.random() * 0.55 + 0.1,
        sp: Math.random() * 0.018 + 0.004,
        ph: Math.random() * Math.PI * 2,
      }))
    }

    function draw() {
      if (!c || !ctx) return
      ctx.clearRect(0, 0, c.width, c.height)
      t += 0.4
      stars.forEach(s => {
        const op = s.base * (0.65 + 0.35 * Math.sin(t * s.sp + s.ph))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(190,218,255,${op})`
        ctx.fill()
      })
      rafId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="stars-canvas"
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.45 }}
    />
  )
}
