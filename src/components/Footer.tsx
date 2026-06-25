export default function Footer() {
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: 26,
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 11,
        fontWeight: 400,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: '#4A6490',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        marginTop: 'auto',
      }}
    >
      SCAI 2026 &middot; IEEE Student Branch, SVNIT Surat
      <span style={{ display: 'block', marginTop: 6, fontSize: 10, letterSpacing: '0.12em', color: '#3A5278' }}>
        Made by Abhishek Jain
      </span>
    </footer>
  )
}
