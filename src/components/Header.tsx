import { Link } from 'react-router-dom'
import Oscilloscope from './Oscilloscope'

import svnit from '../assets/SVNIT.png'
import comsoc from '../assets/COMSOC SVNIT.png'
import sps from '../assets/SPS SVNIT.png'
import scet from '../assets/SCET.png'
import marwadi from '../assets/MARWADI.png'

const logoImgs = [svnit, comsoc, sps, scet, marwadi]

export default function Header() {
  return (
    <header
      style={{
        position: 'relative',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 55% at 50% 0%, rgba(0,200,255,0.10) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
          flexWrap: 'nowrap',
          padding: '16px 24px',
          background: '#F5F0E1',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          position: 'relative',
        }}
      >
        {logoImgs.map((logo, i) => (
          <div
            key={i}
            style={{
              height: 60,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={logo}
              alt=""
              style={{
                maxHeight: 60,
                maxWidth: 200,
                height: 'auto',
                width: 'auto',
                opacity: 0.92,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '1' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '0.92' }}
            />
          </div>
        ))}
      </div>

      <div style={{ padding: '40px 24px 0' }}>
        <Link
          to="/"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(48px, 10vw, 72px)',
            fontWeight: 700,
            letterSpacing: '-0.045em',
            lineHeight: 0.95,
            textDecoration: 'none',
            background: 'linear-gradient(145deg, #FFFFFF 0%, #D0E8FF 40%, #00C8FF 75%, #9B7AFF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 16,
            display: 'inline-block',
            position: 'relative',
          }}
        >
          SCAI 2026
        </Link>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            fontWeight: 300,
            letterSpacing: '0.03em',
            color: '#B8CCEE',
            marginBottom: 40,
            maxWidth: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.6,
            position: 'relative',
          }}
        >
          Connected Intelligence: Smart Electronic and Communication Systems
        </p>

        <Oscilloscope />
      </div>
    </header>
  )
}
