import { Link } from 'react-router-dom'

const stats = [
  { value: '3', label: 'Tracks' },
  { value: '∞', label: 'Innovation' },
  { value: '30', label: 'June — Reg Deadline' },
  { value: 'SVNIT', label: 'Surat' },
]

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Technical Showcase',
    desc: 'Live demos of working prototypes evaluated by industry experts.',
    color: '#00C8FF',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Idea Competition',
    desc: 'Pitch your novel concept and get mentored through implementation.',
    color: '#9B7AFF',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Project Challenge',
    desc: 'Build and present your solution aligned to one of three tracks.',
    color: '#00E5A0',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Industry Talks',
    desc: 'Keynotes from leaders in embedded systems, communication tech, and space applications.',
    color: '#FF6B88',
  },
]

const howItWorks = [
  { step: '01', title: 'Register', desc: 'Form a team of up to 3 and submit your tentative project idea.', color: '#00C8FF' },
  { step: '02', title: 'Refine', desc: 'Develop your project with mentor guidance and support.', color: '#9B7AFF' },
  { step: '03', title: 'Build', desc: 'Create your working prototype or detailed implementation.', color: '#00E5A0' },
  { step: '04', title: 'Present', desc: 'Showcase at SCAI 2026 on 2 August at SVNIT Surat.', color: '#FF6B88' },
]

export default function Landing() {
  return (
    <div style={{ fontSize: 21 }}>
      {/* Hero */}
      <div
        style={{
          textAlign: 'center',
          padding: '12px 0 32px',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 20px',
            background: 'rgba(0,200,255,0.06)',
            border: '1px solid rgba(0,200,255,0.15)',
            borderRadius: 100,
            marginBottom: 28,
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00E5A0', display: 'inline-block' }} />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 500, letterSpacing: '0.08em', color: '#B8CCEE' }}>
            Registration open now
          </span>
        </div>

        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(42px, 8vw, 64px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: 20,
            background: 'linear-gradient(135deg, #FFFFFF 0%, #D0E8FF 40%, #00C8FF 75%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Where ideas connect.<br />
          <span style={{
            background: 'linear-gradient(135deg, #00C8FF, #9B7AFF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Innovation begins.
          </span>
        </h1>

        <div
          style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link
            to="/register"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '18px 44px',
              background: 'linear-gradient(135deg, #00C8FF 0%, #0098CC 100%)',
              color: '#000D1A',
              textDecoration: 'none',
              borderRadius: 8,
              boxShadow: '0 0 28px rgba(0,200,255,0.22), 0 4px 16px rgba(0,0,0,0.35)',
              transition: 'transform 0.15s, box-shadow 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 0 48px rgba(0,200,255,0.38), 0 8px 28px rgba(0,0,0,0.35)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 0 28px rgba(0,200,255,0.22), 0 4px 16px rgba(0,0,0,0.35)'
            }}
          >
            Register your team
          </Link>
          <Link
            to="/program"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '18px 44px',
              background: 'transparent',
              color: '#00C8FF',
              textDecoration: 'none',
              borderRadius: 8,
              border: '1px solid rgba(0,200,255,0.3)',
              transition: 'all 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(0,200,255,0.06)'
              e.currentTarget.style.borderColor = 'rgba(0,200,255,0.6)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(0,200,255,0.3)'
            }}
          >
            Explore program
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 1,
          background: 'rgba(0,200,255,0.06)',
          borderRadius: 12,
          overflow: 'hidden',
          marginBottom: 48,
          border: '1px solid rgba(0,200,255,0.08)',
        }}
      >
        {stats.map(s => (
          <div
            key={s.label}
            style={{
              padding: '24px 12px',
              textAlign: 'center',
              background: 'rgba(0,200,255,0.03)',
            }}
          >
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 36,
                fontWeight: 700,
                letterSpacing: '-0.03em',
                background: 'linear-gradient(135deg, #00C8FF, #9B7AFF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: 4,
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#4A6490',
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 20,
          marginBottom: 48,
        }}
      >
        {features.map(f => (
          <div
            key={f.title}
            style={{
              padding: '28px 24px',
              background: 'rgba(255,255,255,0.02)',
              border: `1px solid ${f.color}15`,
              borderRadius: 12,
              transition: 'all 0.25s',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = `${f.color}08`
              e.currentTarget.style.borderColor = `${f.color}30`
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
              e.currentTarget.style.borderColor = `${f.color}15`
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <div style={{ color: f.color, marginBottom: 14 }}>{f.icon}</div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 18,
                fontWeight: 600,
                color: '#F0F6FF',
                marginBottom: 10,
              }}
            >
              {f.title}
            </h3>
            <p
              style={{
                color: '#7A9AC8',
                fontWeight: 300,
                lineHeight: 1.65,
              }}
            >
              {f.desc}
            </p>
          </div>
        ))}
      </div>

      {/* How it works */}
      <div
        style={{
          background: 'rgba(155,122,255,0.03)',
          border: '1px solid rgba(155,122,255,0.12)',
          borderRadius: 14,
          padding: '36px 28px',
          marginBottom: 36,
        }}
      >
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: 28,
            textAlign: 'center',
            background: 'linear-gradient(135deg, #fff, #C4ADFF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          How it works
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 16,
          }}
        >
          {howItWorks.map(h => (
            <div
              key={h.step}
              style={{
                textAlign: 'center',
                padding: '24px 16px',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: 10,
                border: `1px solid ${h.color}15`,
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 28,
                  fontWeight: 700,
                  color: h.color,
                  marginBottom: 10,
                }}
              >
                {h.step}
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#F0F6FF',
                  marginBottom: 8,
                }}
              >
                {h.title}
              </h3>
              <p
                style={{
                  color: '#7A9AC8',
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
              >
                {h.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Format highlight */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(155,122,255,0.06), rgba(0,200,255,0.06))',
          border: '1px solid rgba(155,122,255,0.18)',
          borderRadius: 14,
          padding: '28px 28px',
          marginBottom: 36,
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 36,
            flexShrink: 0,
            lineHeight: 1,
          }}
        >
          🎯
        </div>
        <div style={{ flex: 1, minWidth: 200 }}>
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 19,
              fontWeight: 600,
              color: '#F0F6FF',
              marginBottom: 6,
            }}
          >
            Workshops online &middot; Final presentation your way
          </h3>
          <p
            style={{
              color: '#B8CCEE',
              fontWeight: 300,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            All S1–S7 sessions are online. The final presentation on{' '}
            <strong style={{ color: '#F0F6FF', fontWeight: 500 }}>2 August</strong> is your call —
            present <strong style={{ color: '#C4ADFF', fontWeight: 500 }}>in-person at SVNIT</strong> or{' '}
            <strong style={{ color: '#C4ADFF', fontWeight: 500 }}>online</strong>. Either works.
          </p>
        </div>
      </div>

      {/* Tracks preview */}
      <div
        style={{
          background: 'rgba(0,200,255,0.03)',
          border: '1px solid rgba(0,200,255,0.10)',
          borderRadius: 14,
          padding: '32px 24px',
          marginBottom: 36,
        }}
      >
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: 18,
            color: '#F0F6FF',
          }}
        >
          Three tracks, endless possibilities
        </h2>
        {[
          { tag: 'T1', label: 'Smart Sensing & Intelligent Electronic Systems', color: '#00C8FF' },
          { tag: 'T2', label: 'Communication Networks & Connected Systems', color: '#9B7AFF' },
          { tag: 'T3', label: 'Space Technology, Remote Sensing & Signal Intelligence', color: '#00E5A0' },
        ].map(t => (
          <div
            key={t.tag}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: '16px 18px',
              marginBottom: 10,
              background: 'rgba(255,255,255,0.015)',
              borderRadius: 8,
              border: `1px solid ${t.color}15`,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = `${t.color}08` }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.015)' }}
          >
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: t.color,
                background: `${t.color}15`,
                border: `1px solid ${t.color}25`,
                borderRadius: 4,
                padding: '4px 10px',
                flexShrink: 0,
              }}
            >
              {t.tag}
            </span>
            <span
              style={{
                color: '#B8CCEE',
                fontWeight: 300,
              }}
            >
              {t.label}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        style={{
          textAlign: 'center',
          padding: '32px 24px',
          background: 'linear-gradient(135deg, rgba(0,200,255,0.05), rgba(155,122,255,0.05))',
          border: '1px solid rgba(0,200,255,0.10)',
          borderRadius: 14,
        }}
      >
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: 14,
            color: '#F0F6FF',
          }}
        >
          Ready to make an impact?
        </h2>
        <p
          style={{
            color: '#7A9AC8',
            fontWeight: 300,
            marginBottom: 24,
            maxWidth: 440,
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.6,
          }}
        >
          Register your team and submit your tentative project idea. No entry fee. All disciplines welcome.
        </p>
        <Link
          to="/register"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '18px 48px',
            background: 'linear-gradient(135deg, #00C8FF 0%, #0098CC 100%)',
            color: '#000D1A',
            textDecoration: 'none',
            borderRadius: 8,
            display: 'inline-block',
            boxShadow: '0 0 28px rgba(0,200,255,0.22), 0 4px 16px rgba(0,0,0,0.35)',
            transition: 'transform 0.15s, box-shadow 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 0 48px rgba(0,200,255,0.38), 0 8px 28px rgba(0,0,0,0.35)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 0 28px rgba(0,200,255,0.22), 0 4px 16px rgba(0,0,0,0.35)'
          }}
        >
          Register now
        </Link>
      </div>
    </div>
  )
}
