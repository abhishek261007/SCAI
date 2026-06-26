import { Link } from 'react-router-dom'

const tracks = [
  {
    id: 'T1',
    title: 'Smart Sensing & Intelligent Electronic Systems',
    color: '#00C8FF',
    examples: [
      'IoT-based environmental monitoring systems',
      'Wearable health diagnostics devices',
      'Smart agriculture sensors and automation',
      'AI-powered embedded systems for edge computing',
    ],
  },
  {
    id: 'T2',
    title: 'Communication Networks & Connected Systems',
    color: '#9B7AFF',
    examples: [
      '5G/6G communication prototypes and simulations',
      'LoRaWAN or mesh network implementations',
      'SDN/NFV network function virtualization',
      'V2X (vehicle-to-everything) communication systems',
    ],
  },
  {
    id: 'T3',
    title: 'Space Technology, Remote Sensing & Signal Intelligence',
    color: '#00E5A0',
    examples: [
      'CubeSat or satellite ground station projects',
      'Remote sensing data analysis (satellite imagery, SAR)',
      'Signal processing for spectrum monitoring',
      'Radar and LIDAR based object detection systems',
    ],
  },
]

export default function Projects() {
  return (
    <div style={{ padding: '0 0 20px', fontSize: 21 }}>
      <div
        style={{
          background: 'rgba(0,200,255,0.03)',
          border: '1px solid rgba(0,200,255,0.10)',
          borderRadius: 16,
          padding: '36px 32px',
          marginBottom: 36,
        }}
      >
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: 18,
            background: 'linear-gradient(135deg, #fff, #00C8FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Projects &amp; Tracks
        </h2>
        <p
          style={{
            color: '#B8CCEE',
            fontWeight: 300,
            lineHeight: 1.8,
            marginBottom: 18,
          }}
        >
          For SCAI 2026, each team is expected to come up with a <strong style={{ color: '#F0F6FF' }}>tentative project idea</strong>{' '}
          aligned with one of the three tracks. You don't need a fully built prototype at registration
          — just a clear concept and problem statement. After registration, teams will develop their
          projects with guidance from mentors and present them at the symposium on 2 August 2026.
        </p>
        <div
          style={{
            background: 'rgba(255,107,136,0.06)',
            border: '1px solid rgba(255,107,136,0.2)',
            borderRadius: 10,
            padding: '18px 22px',
            color: '#FFAABF',
            fontWeight: 300,
            lineHeight: 1.7,
          }}
        >
          <strong style={{ color: '#FF6B88', fontWeight: 600 }}>How it works:</strong> Register with
          your tentative project idea → refine it with mentor guidance → build and present at SCAI
          2026 on 2 August at SVNIT Surat.
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 28, marginBottom: 36 }}>
        {tracks.map(track => (
          <div
            key={track.id}
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: `1px solid ${track.color}22`,
              borderRadius: 14,
              padding: '32px 28px',
              borderLeft: `4px solid ${track.color}`,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: track.color,
                  background: `${track.color}15`,
                  border: `1px solid ${track.color}30`,
                  borderRadius: 5,
                  padding: '4px 12px',
                }}
              >
                {track.id}
              </span>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 19,
                  fontWeight: 600,
                  color: '#F0F6FF',
                  margin: 0,
                }}
              >
                {track.title}
              </h3>
            </div>

            <p
              style={{
                color: '#7A9AC8',
                fontWeight: 300,
                marginBottom: 14,
              }}
            >
              Example project ideas:
            </p>

            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              {track.examples.map(ex => (
                <li
                  key={ex}
                  style={{
                    fontWeight: 300,
                    color: '#B8CCEE',
                    padding: '10px 16px',
                    background: 'rgba(255,255,255,0.02)',
                    borderRadius: 6,
                    border: '1px solid rgba(255,255,255,0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                  }}
                >
                  <span style={{ color: track.color, fontSize: 14 }}>▸</span>
                  {ex}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        style={{
          textAlign: 'center',
          padding: '36px 24px',
          background: 'rgba(0,200,255,0.03)',
          border: '1px solid rgba(0,200,255,0.10)',
          borderRadius: 16,
        }}
      >
        <p
          style={{
            color: '#B8CCEE',
            fontWeight: 300,
            lineHeight: 1.7,
            marginBottom: 24,
          }}
        >
          Ready to submit your project idea?
        </p>
        <Link
          to="/"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '16px 40px',
            background: 'linear-gradient(135deg, #00C8FF 0%, #0098CC 100%)',
            color: '#000D1A',
            textDecoration: 'none',
            borderRadius: 8,
            display: 'inline-block',
            boxShadow: '0 0 28px rgba(0,200,255,0.22), 0 4px 16px rgba(0,0,0,0.35)',
            transition: 'transform 0.15s, box-shadow 0.2s',
          }}
        >
          Register now
        </Link>
      </div>
    </div>
  )
}
