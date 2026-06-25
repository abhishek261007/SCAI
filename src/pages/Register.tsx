import { useState } from 'react'

const ENDPOINT =
  'https://script.google.com/macros/s/AKfycbxYQIyjA85kzrHIlWBsJ1na8RQU1wdXWKHDxZFP0pzTSHHzim82k4jiyGRmC2_pixQd/exec'

interface FormData {
  email: string
  leaderName: string
  leaderContact: string
  altContact: string
  member2: string
  member2Contact: string
  member3: string
  member3Contact: string
  projectName: string
  track: string
  projectDesc: string
}

export default function Register() {
  const [form, setForm] = useState<FormData>({
    email: '',
    leaderName: '',
    leaderContact: '',
    altContact: '',
    member2: '',
    member2Contact: '',
    member3: '',
    member3Contact: '',
    projectName: '',
    track: '',
    projectDesc: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [failVisible, setFailVisible] = useState(false)

  function set(field: keyof FormData, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => {
        const { [field]: _, ...rest } = prev
        return rest
      })
    }
  }

  function validate(): boolean {
    const errs: Record<string, string> = {}

    if (!form.email.trim()) errs.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Enter a valid email address.'

    if (!form.leaderName.trim()) errs.leaderName = 'Leader name is required.'
    if (!form.leaderContact.trim()) errs.leaderContact = 'Contact number is required.'
    if (!form.altContact.trim()) errs.altContact = 'Alternate contact is required.'
    if (!form.projectName.trim()) errs.projectName = 'Project name is required.'
    if (!form.track) errs.track = 'Please select a track.'
    if (!form.projectDesc.trim()) errs.projectDesc = 'Please describe your project.'

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFailVisible(false)
    if (!validate()) return

    setSubmitting(true)

    try {
      await fetch(ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ ...form, timestamp: new Date().toISOString() }),
      })
      setSubmitted(true)
    } catch {
      setFailVisible(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="success-screen" style={{ textAlign: 'center', padding: '64px 20px' }}>
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: '50%',
            background: 'rgba(0,229,160,0.08)',
            border: '2px solid #00E5A0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 30px',
            fontSize: 38,
            color: '#00E5A0',
            boxShadow: '0 0 40px rgba(0,229,160,0.18)',
            animation: 'pulse-ring 2.5s ease-in-out infinite',
          }}
        >
          ✓
        </div>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: 16,
            background: 'linear-gradient(135deg, #fff, #00E5A0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Transmission received
        </h2>
        <p
          style={{
            color: '#B8CCEE',
            fontWeight: 300,
            lineHeight: 1.75,
            maxWidth: 480,
            margin: '0 auto',
            fontSize: 21,
          }}
        >
          Thanks for submitting to SCAI 2026. Your project has been recorded. Reach out to Amaan or
          Divyang if you need to update any details before 30 June 2026.
        </p>
        <a
          href="https://chat.whatsapp.com/B6qedtDUedv7E86OeQTPgG"
          target="_blank"
          rel="noopener"
          className="whatsapp-btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            marginTop: 28,
            padding: '16px 32px',
            background: 'linear-gradient(135deg, #25D366 0%, #1DA851 100%)',
            color: '#04150A',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            borderRadius: 8,
            boxShadow: '0 0 28px rgba(37,211,102,0.25), 0 4px 16px rgba(0,0,0,0.35)',
            transition: 'transform 0.15s, box-shadow 0.2s',
          }}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.47 1.36 4.93L2 22l5.32-1.4a9.87 9.87 0 0 0 4.72 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.83 9.83 0 0 0 12.04 2zm5.81 14.07c-.25.7-1.45 1.34-2 1.43-.51.08-1.15.11-1.86-.12-.43-.13-.97-.31-1.68-.61-2.96-1.28-4.89-4.25-5.04-4.45-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.78-.37.2 0 .39 0 .56.01.18.01.42-.07.66.5.25.6.84 2.05.91 2.2.07.15.12.33.02.53-.09.2-.15.32-.3.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.77 1.27 1.66 2.06 1.14 1.02 2.1 1.34 2.4 1.49.3.15.48.13.65-.05.21-.23.47-.6.74-.97.19-.27.43-.31.72-.2.3.11 1.87.88 2.19 1.04.32.16.53.24.61.37.08.13.08.74-.17 1.45z" />
          </svg>
          Join WhatsApp Group
        </a>
      </div>
    )
  }

  return (
    <div style={{ fontSize: 21 }}>
      <div className="intro" style={{ marginBottom: 40 }}>
        <p
          style={{
            color: '#B8CCEE',
            fontWeight: 300,
            lineHeight: 1.75,
            marginBottom: 24,
          }}
        >
          Welcome to the official submission portal for SCAI 2026. Use this form to submit your
          team's technical project for the showcase, idea competition, and project challenge.
        </p>

        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            marginBottom: 28,
          }}
        >
          {[
            'Smart Sensing & Intelligent Electronic Systems',
            'Communication Networks & Connected Systems',
            'Space Technology, Remote Sensing & Signal Intelligence',
          ].map((track, i) => (
            <li
              key={track}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 400,
                color: '#B8CCEE',
                padding: '12px 18px',
                background: 'rgba(0,200,255,0.04)',
                border: '1px solid rgba(0,200,255,0.10)',
                borderRadius: 7,
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                transition: 'background 0.2s, border-color 0.2s',
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: '#00C8FF',
                  minWidth: 28,
                  opacity: 0.9,
                }}
              >
                T{i + 1}
              </span>
              {track}
            </li>
          ))}
        </ul>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            marginBottom: 28,
          }}
        >
          {['Free entry', 'Max 3 per team', '30 June 2026 — SVNIT'].map(label => (
            <span
              key={label}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                padding: '6px 16px',
                background: 'rgba(155,122,255,0.14)',
                border: '1px solid rgba(155,122,255,0.28)',
                color: '#C4ADFF',
                borderRadius: 100,
              }}
            >
              {label}
            </span>
          ))}
        </div>

        <div
          style={{
            fontWeight: 300,
            color: '#B8CCEE',
            padding: '16px 20px',
            background: 'rgba(255,255,255,0.025)',
            borderLeft: '2px solid #00C8FF',
            borderRadius: '0 8px 8px 0',
            lineHeight: 1.7,
          }}
        >
          Queries on submissions or tracks — <strong style={{ color: '#F0F6FF', fontWeight: 500 }}>
            Amaan Ram
          </strong>{' '}
          8734990849 &middot;{' '}
          <strong style={{ color: '#F0F6FF', fontWeight: 500 }}>Divyang Patel</strong> 8320067392
        </div>
      </div>

      <form id="reg-form" onSubmit={handleSubmit} noValidate>
        <SectionDivider label="Team Leader" />

        <Field
          id="f-email"
          label="Email"
          required
          error={errors.email}
        >
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={e => set('email', e.target.value)}
          />
        </Field>

        <Field
          id="f-leaderName"
          label="Name of team leader"
          required
          error={errors.leaderName}
        >
          <input
            type="text"
            name="leaderName"
            placeholder="Full name"
            value={form.leaderName}
            onChange={e => set('leaderName', e.target.value)}
          />
        </Field>

        <Field
          id="f-leaderContact"
          label="Contact number"
          required
          error={errors.leaderContact}
        >
          <input
            type="tel"
            name="leaderContact"
            placeholder="10-digit mobile number"
            value={form.leaderContact}
            onChange={e => set('leaderContact', e.target.value)}
          />
        </Field>

        <Field
          id="f-altContact"
          label="Alternate contact"
          required
          error={errors.altContact}
        >
          <input
            type="tel"
            name="altContact"
            placeholder="10-digit mobile number"
            value={form.altContact}
            onChange={e => set('altContact', e.target.value)}
          />
        </Field>

        <SectionDivider label="Team Members" optional />

        <Field label="Team member 2">
          <input
            type="text"
            name="member2"
            placeholder="Full name"
            value={form.member2}
            onChange={e => set('member2', e.target.value)}
          />
        </Field>

        <Field label="Contact — member 2">
          <input
            type="tel"
            name="member2Contact"
            placeholder="10-digit mobile number"
            value={form.member2Contact}
            onChange={e => set('member2Contact', e.target.value)}
          />
        </Field>

        <Field label="Team member 3">
          <input
            type="text"
            name="member3"
            placeholder="Full name"
            value={form.member3}
            onChange={e => set('member3', e.target.value)}
          />
        </Field>

        <Field label="Contact — member 3">
          <input
            type="tel"
            name="member3Contact"
            placeholder="10-digit mobile number"
            value={form.member3Contact}
            onChange={e => set('member3Contact', e.target.value)}
          />
        </Field>

        <SectionDivider label="Project" />

        <Field
          id="f-projectName"
          label="Project name"
          required
          error={errors.projectName}
        >
          <input
            type="text"
            name="projectName"
            placeholder="Your project title"
            value={form.projectName}
            onChange={e => set('projectName', e.target.value)}
          />
        </Field>

        <Field
          id="f-track"
          label="Track selected"
          required
          error={errors.track}
        >
          <fieldset style={{ border: 'none' }}>
            <legend style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: '0.10em',
              color: '#B8CCEE',
              textTransform: 'uppercase',
              marginBottom: 12,
              display: 'block',
            }}>
              Track selected <span style={{ color: '#00C8FF', marginLeft: 2 }}>*</span>
            </legend>
            <div
              className="channels"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              {[
                { id: 'track1', value: 'Smart Sensing & Intelligent Electronic Systems', tag: 'Track 1', desc: 'Smart Sensing & Intelligent Electronic Systems' },
                { id: 'track2', value: 'Communication Networks & Connected Systems', tag: 'Track 2', desc: 'Communication Networks & Connected Systems' },
                { id: 'track3', value: 'Space Technology, Remote Sensing & Signal Intelligence', tag: 'Track 3', desc: 'Space Technology, Remote Sensing & Signal Intelligence' },
              ].map(t => (
                <div key={t.id} className="channel">
                  <input
                    type="radio"
                    id={t.id}
                    name="track"
                    value={t.value}
                    checked={form.track === t.value}
                    onChange={e => set('track', e.target.value)}
                    style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
                  />
                  <label
                    htmlFor={t.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16,
                      padding: '18px 22px',
                      border: form.track === t.value
                        ? '1px solid rgba(0,200,255,0.65)'
                        : '1px solid rgba(0,200,255,0.13)',
                      borderRadius: 8,
                      cursor: 'pointer',
                      background: form.track === t.value
                        ? 'rgba(0,200,255,0.07)'
                        : 'rgba(255,255,255,0.025)',
                      boxShadow: form.track === t.value
                        ? '0 0 0 1px rgba(0,200,255,0.15), inset 0 1px 0 rgba(255,255,255,0.04)'
                        : 'none',
                      transition: 'all 0.2s',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: '0.10em',
                        color: '#00C8FF',
                        background: 'rgba(0,200,255,0.10)',
                        border: '1px solid rgba(0,200,255,0.22)',
                        borderRadius: 5,
                        padding: '5px 11px',
                        minWidth: 62,
                        textAlign: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {t.tag}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        color: form.track === t.value ? '#F0F6FF' : '#B8CCEE',
                        lineHeight: 1.45,
                        transition: 'color 0.2s',
                      }}
                    >
                      {t.desc}
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </Field>

        <Field
          id="f-projectDesc"
          label="Describe your project"
          required
          error={errors.projectDesc}
        >
          <div
            style={{
              fontWeight: 300,
              color: '#7A9AC8',
              marginBottom: 8,
              lineHeight: 1.6,
              fontStyle: 'italic',
            }}
          >
            Briefly describe the problem you're solving, your approach, and current progress.
          </div>
          <textarea
            name="projectDesc"
            placeholder="Tell us about your project…"
            value={form.projectDesc}
            onChange={e => set('projectDesc', e.target.value)}
            style={{
              width: '100%',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(0,200,255,0.15)',
              borderRadius: 8,
              padding: '14px 18px',
              color: '#F0F6FF',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              minHeight: 150,
              resize: 'vertical',
              lineHeight: 1.65,
              outline: 'none',
              fontSize: 18,
            }}
          />
        </Field>

        <div
          className="submit-row"
          style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}
        >
          <button
            type="submit"
            id="submit-btn"
            disabled={submitting}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '18px 52px',
              background: 'linear-gradient(135deg, #00C8FF 0%, #0098CC 100%)',
              color: '#000D1A',
              border: 'none',
              borderRadius: 8,
              cursor: submitting ? 'not-allowed' : 'pointer',
              opacity: submitting ? 0.55 : 1,
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.15s, box-shadow 0.2s',
              boxShadow: submitting
                ? 'none'
                : '0 0 28px rgba(0,200,255,0.22), 0 4px 16px rgba(0,0,0,0.35)',
            }}
          >
            {submitting ? 'Transmitting…' : 'Submit registration'}
          </button>

          {failVisible && (
            <div
              className="status-box failure"
              style={{
                fontWeight: 400,
                padding: '14px 20px',
                borderRadius: 8,
                borderLeft: '3px solid #FF6B88',
                background: 'rgba(255,107,136,0.07)',
                color: '#FFAABF',
                lineHeight: 1.6,
                fontSize: 18,
              }}
            >
              Something went wrong. Please try again or contact Amaan / Divyang directly.
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

function SectionDivider({ label, optional }: { label: string; optional?: boolean }) {
  return (
    <div
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: '#00C8FF',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        margin: '44px 0 28px',
      }}
    >
      {label}
      {optional && (
        <span
          style={{
            fontWeight: 400,
            letterSpacing: '0.05em',
            color: '#4A6490',
            textTransform: 'none',
            fontSize: 13,
          }}
        >
          (optional)
        </span>
      )}
      <span
        style={{
          flex: 1,
          height: 1,
          background: 'linear-gradient(to right, rgba(0,200,255,0.35), transparent)',
        }}
      />
    </div>
  )
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id?: string
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div
      id={id}
      className="field"
      style={{ marginBottom: 24 }}
    >
      <label
        style={{
          display: 'block',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: '0.10em',
          color: '#B8CCEE',
          marginBottom: 8,
          textTransform: 'uppercase',
        }}
      >
        {label}
        {required && <span style={{ color: '#00C8FF', marginLeft: 2 }}>*</span>}
      </label>
      {children}
      {error && (
        <div
          className="error-msg"
          style={{
            fontSize: 15,
            color: '#FF6B88',
            marginTop: 7,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontWeight: 400,
          }}
        >
          <span style={{ fontSize: 13 }}>⚠</span> {error}
        </div>
      )}
    </div>
  )
}
