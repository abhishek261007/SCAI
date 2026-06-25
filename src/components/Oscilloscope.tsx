import { useEffect, useRef } from 'react'

export default function Oscilloscope() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')
    if (!ctx) return

    let t = 0
    let dpr = window.devicePixelRatio || 1
    let rafId: number

    function resize() {
      if (!c || !ctx) return
      const r = c.getBoundingClientRect()
      c.width = r.width * dpr
      c.height = r.height * dpr
      ctx.scale(dpr, dpr)
    }

    function draw() {
      if (!c || !ctx) return
      const W = c.width / dpr
      const H = c.height / dpr
      const cy = H / 2
      ctx.clearRect(0, 0, W, H)

      ctx.strokeStyle = 'rgba(0,200,255,0.07)'
      ctx.lineWidth = 1
      ;[W / 4, W / 2, (W * 3) / 4].forEach(x => {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, H)
        ctx.stroke()
      })
      ctx.beginPath()
      ctx.moveTo(0, cy)
      ctx.lineTo(W, cy)
      ctx.stroke()

      const g = ctx.createLinearGradient(0, 0, W, 0)
      g.addColorStop(0, 'rgba(0,200,255,0)')
      g.addColorStop(0.1, 'rgba(0,200,255,0.85)')
      g.addColorStop(0.9, 'rgba(0,200,255,0.85)')
      g.addColorStop(1, 'rgba(0,200,255,0)')

      ctx.save()
      ctx.shadowBlur = 12
      ctx.shadowColor = 'rgba(0,200,255,0.7)'
      ctx.strokeStyle = g
      ctx.lineWidth = 1.8
      ctx.lineJoin = 'round'
      ctx.lineCap = 'round'
      ctx.beginPath()

      for (let i = 0; i <= W; i++) {
        const ph = (i / W) * Math.PI * 7 + t
        const amp = cy * 0.6
        const y =
          cy +
          Math.sin(ph) * amp * 0.5 +
          Math.sin(ph * 2.4 + 0.9) * amp * 0.27 +
          Math.sin(ph * 0.6 - 1.1) * amp * 0.18
        i === 0 ? ctx.moveTo(i, y) : ctx.lineTo(i, y)
      }
      ctx.stroke()
      ctx.restore()
      t += 0.038
      rafId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', () => {
      dpr = window.devicePixelRatio || 1
      resize()
    })
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="osc-canvas"
      style={{
        display: 'block',
        width: '100%',
        maxWidth: 600,
        margin: '0 auto',
        height: 54,
        opacity: 0.65,
      }}
    />
  )
}
