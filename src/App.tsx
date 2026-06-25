import { Routes, Route } from 'react-router-dom'
import Starfield from './components/Starfield'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Register from './pages/Register'
import ProgramDescription from './pages/ProgramDescription'
import Projects from './pages/Projects'
import Timetable from './pages/Timetable'

function App() {
  return (
    <>
      <Starfield />
      <div className="page">
        <Header />
        <Navbar />
        <div className="wrap">
          <div className="card" style={{
            background: '#0B1120',
            border: '1px solid rgba(0,200,255,0.13)',
            borderRadius: 20,
            padding: '48px 44px',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.03), 0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              content: '',
              position: 'absolute',
              top: -1, left: '50%', transform: 'translateX(-50%)',
              width: 220, height: 1,
              background: 'linear-gradient(90deg, transparent, #00C8FF, transparent)',
              opacity: 0.5,
            }} />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/register" element={<Register />} />
              <Route path="/program" element={<ProgramDescription />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/timetable" element={<Timetable />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
