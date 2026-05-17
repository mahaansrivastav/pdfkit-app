import { V } from '../theme';

const links = [
  { label: 'Tool',  page: 'home'  },
  { label: 'About', page: 'about' },
  { label: 'Terms', page: 'terms' },
];

export default function Navbar({ page, setPage }) {
  return (
    <nav style={{
      background: 'rgba(11,15,26,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${V.border}`,
      position: 'sticky',
      top: 0,
      zIndex: 100,
      height: 56,
    }}>
      <div style={{
        maxWidth: 960, margin: '0 auto', padding: '0 20px',
        height: '100%', display: 'flex', alignItems: 'center', gap: 8,
      }}>
        {/* Logo */}
        <button
          onClick={() => setPage('home')}
          style={{
            fontWeight: 900, fontSize: 16, color: V.textP,
            border: 'none', background: 'none', cursor: 'pointer',
            letterSpacing: '-0.5px', marginRight: 12,
          }}
        >
          📄 PDFKit
        </button>

        {/* Nav links */}
        {links.map((l) => (
          <button
            key={l.page}
            onClick={() => setPage(l.page)}
            style={{
              padding: '5px 13px',
              borderRadius: 999,
              border: 'none',
              background: page === l.page ? V.accentSoft : 'none',
              color: page === l.page ? V.accentText : V.textS,
              fontWeight: page === l.page ? 600 : 400,
              cursor: 'pointer',
              fontSize: 13,
              transition: 'all 0.15s',
            }}
          >
            {l.label}
          </button>
        ))}

        <div style={{ flex: 1 }} />

        {/* Badge */}
        <span style={{
          fontSize: 11, fontWeight: 600, color: V.textM,
          background: V.bgBadge, padding: '4px 10px',
          borderRadius: 999, border: `1px solid ${V.borderL}`,
        }}>
          FREE · NO LOGIN
        </span>
      </div>
    </nav>
  );
}