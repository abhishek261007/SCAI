const schedule = [
  { session: 'S1', title: 'Basic Electronics', date: '4 July 2026' },
  { session: 'S2', title: 'Python + OpenCV Fundamentals', date: '5 July 2026' },
  { session: 'S3', title: 'Basic Electronics P2', date: '11 July 2026' },
  { session: 'S4', title: 'ML Frameworks', date: '12 July 2026' },
  { session: 'S5', title: 'DL Architectures', date: '19 July 2026' },
  { session: 'S6', title: 'IoT + Monitoring and Data', date: '25 July 2026' },
  { session: 'S7', title: 'Exclusive Guest Lecture', date: '26 July 2026' },
]

const milestones = [
  { label: 'Registration Deadline', date: '30 June 2026', color: '#FF6B88' },
  { label: 'Final Presentation', date: '2 August 2026', color: '#00E5A0' },
  { label: 'Online / In-Person', date: 'Your Choice', color: '#9B7AFF' },
]

export default function Timetable() {
  return (
    <div style={{ fontSize: 21 }}>
      <div
        style={{
          background: 'rgba(0,200,255,0.03)',
          border: '1px solid rgba(0,200,255,0.10)',
          borderRadius: 16,
          padding: '32px 28px',
          marginBottom: 32,
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: 16,
            background: 'linear-gradient(135deg, #fff, #00C8FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Program Timetable
        </h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          {milestones.map(m => (
            <div
              key={m.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 20px',
                background: `${m.color}08`,
                border: `1px solid ${m.color}20`,
                borderRadius: 8,
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: m.color, flexShrink: 0 }} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 500, color: '#B8CCEE' }}>
                {m.label} — <span style={{ color: m.color }}>{m.date}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
        }}
      >
        {schedule.map(s => (
          <div
            key={s.session}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              padding: '18px 22px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(0,200,255,0.10)',
              borderRadius: 10,
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(0,200,255,0.05)'
              e.currentTarget.style.borderColor = 'rgba(0,200,255,0.25)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
              e.currentTarget.style.borderColor = 'rgba(0,200,255,0.10)'
            }}
          >
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#00C8FF',
                background: 'rgba(0,200,255,0.10)',
                border: '1px solid rgba(0,200,255,0.20)',
                borderRadius: 5,
                padding: '5px 12px',
                minWidth: 52,
                textAlign: 'center',
                flexShrink: 0,
              }}
            >
              {s.session}
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 17,
                  fontWeight: 500,
                  color: '#F0F6FF',
                }}
              >
                {s.title}
              </div>
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                color: '#7A9AC8',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              {s.date}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 24,
          padding: '20px 24px',
          background: 'rgba(155,122,255,0.04)',
          border: '1px solid rgba(155,122,255,0.15)',
          borderRadius: 10,
          color: '#B8CCEE',
          fontWeight: 300,
          lineHeight: 1.7,
        }}
      >
        All workshop sessions (S1–S7) will be conducted <strong style={{ color: '#F0F6FF', fontWeight: 500 }}>online</strong>.
        The final presentation on <strong style={{ color: '#F0F6FF', fontWeight: 500 }}>2 August</strong> is flexible —
        present <strong style={{ color: '#F0F6FF', fontWeight: 500 }}>in-person at SVNIT</strong> if you can make it,
        or present <strong style={{ color: '#F0F6FF', fontWeight: 500 }}>online</strong> otherwise.
        Your choice.
      </div>
    </div>
  )
}
