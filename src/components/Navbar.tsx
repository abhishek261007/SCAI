import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/register', label: 'Register', end: false },
  { to: '/program', label: 'Program', end: false },
  { to: '/projects', label: 'Projects', end: false },
  { to: '/timetable', label: 'Timetable', end: false },
]

export default function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 4,
        padding: '14px 20px 0',
        position: 'relative',
        zIndex: 2,
        flexWrap: 'wrap',
      }}
    >
      {links.map(l => (
        <NavLink
          key={l.to}
          to={l.to}
          end={l.end}
          style={({ isActive }) => ({
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            padding: '7px 18px',
            borderRadius: 6,
            color: isActive ? '#00C8FF' : '#7A9AC8',
            background: isActive ? 'rgba(0,200,255,0.08)' : 'transparent',
            border: isActive ? '1px solid rgba(0,200,255,0.25)' : '1px solid transparent',
            transition: 'all 0.2s',
          })}
        >
          {l.label}
        </NavLink>
      ))}
    </nav>
  )
}
