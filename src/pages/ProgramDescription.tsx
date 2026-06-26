export default function ProgramDescription() {
  return (
    <div style={{ padding: '0 0 20px', fontSize: 21 }}>
      <div
        className="intro"
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
          About SCAI 2026
        </h2>
        <p
          style={{
            color: '#B8CCEE',
            fontWeight: 300,
            lineHeight: 1.8,
            marginBottom: 18,
          }}
        >
          <strong style={{ color: '#F0F6FF', fontWeight: 500 }}>SCAI 2026</strong> (Smart
          Communication &amp; Artificial Intelligence) is SVNIT Surat's premier technical symposium
          focused on the convergence of intelligent electronic systems, advanced communication
          networks, and space technology. Hosted by the IEEE Student Branch, SVNIT Surat, the
          symposium brings together student innovators, researchers, and industry professionals to
          showcase cutting-edge projects and exchange ideas.
        </p>
        <p
          style={{
            color: '#B8CCEE',
            fontWeight: 300,
            lineHeight: 1.8,
          }}
        >
          This year's theme — <em style={{ color: '#00C8FF' }}>Connected Intelligence</em> —
          explores how smart sensing, communication systems, and signal intelligence are shaping the
          future of technology. Participants will present their work across three dedicated tracks,
          compete for recognition, and gain exposure to real-world applications.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gap: 24,
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          marginBottom: 36,
        }}
      >
        {[
          {
            icon: '\u{1F4E1}',
            title: 'Technical Showcase',
            desc: 'Live demonstration of working prototypes and research posters. Teams present their projects to a panel of judges and industry experts.',
          },
          {
            icon: '\u{1F3AF}',
            title: 'Idea Competition',
            desc: 'Present your novel concept before building it. The best ideas are recognized and mentored for full implementation.',
          },
          {
            icon: '\u{1F3C6}',
            title: 'Project Challenge',
            desc: 'A competitive hackathon-style challenge where teams build a solution within the symposium timeline from the given tracks.',
          },
          {
            icon: '\u{1F30D}',
            title: 'Industry Talks',
            desc: 'Keynote sessions from leaders in intelligent systems, communication tech, and space applications.',
          },
        ].map(item => (
          <div
            key={item.title}
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(0,200,255,0.10)',
              borderRadius: 14,
              padding: '28px 24px',
              transition: 'border-color 0.2s, background 0.2s',
            }}
          >
            <div style={{ fontSize: 36, marginBottom: 14 }}>{item.icon}</div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 18,
                fontWeight: 600,
                color: '#F0F6FF',
                marginBottom: 10,
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                color: '#B8CCEE',
                fontWeight: 300,
                lineHeight: 1.7,
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          background: 'rgba(155,122,255,0.04)',
          border: '1px solid rgba(155,122,255,0.15)',
          borderRadius: 14,
          padding: '32px 28px',
        }}
      >
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 17,
            fontWeight: 600,
            color: '#C4ADFF',
            marginBottom: 14,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          Who can participate?
        </h3>
        <p
          style={{
            color: '#B8CCEE',
            fontWeight: 300,
            lineHeight: 1.8,
          }}
        >
          The symposium is open to all undergraduate and graduate students. Teams of up to 3 members
          can register. There is no entry fee. All disciplines are welcome — projects should align
          with one of the three tracks. Selected projects will be displayed during the symposium at
          SVNIT Surat on 2 August 2026.
        </p>
      </div>

      <div
        style={{
          marginTop: 28,
          background: 'rgba(0,200,255,0.03)',
          border: '1px solid rgba(0,200,255,0.10)',
          borderRadius: 14,
          padding: '32px 28px',
        }}
      >
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 17,
            fontWeight: 600,
            color: '#00C8FF',
            marginBottom: 14,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          What you get
        </h3>
        <div
          style={{
            display: 'grid',
            gap: 12,
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          }}
        >
          {[
            {
              icon: '🎓',
              title: 'Certificate of Participation',
              desc: 'Official certificate from IEEE Student Branch, SVNIT Surat for all participants.',
              color: '#00C8FF',
            },
            {
              icon: '💻',
              title: 'GitHub Repository',
              desc: 'Your project lives on — we help you publish and archive your code under a GitHub repo.',
              color: '#9B7AFF',
            },
            {
              icon: '📣',
              title: 'LinkedIn Post',
              desc: 'Get featured on our official LinkedIn page showcasing your project and team.',
              color: '#00E5A0',
            },
            {
              icon: '🏆',
              title: 'Mentorship & Feedback',
              desc: 'Personalized feedback from industry mentors and judges on your project.',
              color: '#FF6B88',
            },
          ].map(item => (
            <div
              key={item.title}
              style={{
                padding: '20px 18px',
                background: 'rgba(255,255,255,0.02)',
                border: `1px solid ${item.color}20`,
                borderRadius: 10,
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = `${item.color}08`
                e.currentTarget.style.borderColor = `${item.color}40`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                e.currentTarget.style.borderColor = `${item.color}20`
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
              <h4
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#F0F6FF',
                  marginBottom: 6,
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  color: '#7A9AC8',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  fontSize: 14,
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
