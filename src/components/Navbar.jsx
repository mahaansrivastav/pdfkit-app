import { getTheme } from '../theme';

const links = [
  { label: 'Tool',  page: 'home'  },
  { label: 'About', page: 'about' },
  { label: 'Terms', page: 'terms' },
];

// Sun icon for light mode
function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

// Moon icon for dark mode
function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Navbar({ page, setPage, isDark, toggleTheme }) {
  const V = getTheme(isDark);
  
  return (
    <nav style={{
      background: V.navBg,
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
              transition: 'all 0.2s ease',
            }}
          >
            {l.label}
          </button>
        ))}

        <div style={{ flex: 1 }} />

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          style={{
            width: 36, height: 36,
            borderRadius: 10,
            border: `1px solid ${V.border}`,
            background: V.bgCard,
            color: V.textS,
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s ease',
            marginRight: 10,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = V.bgCardH;
            e.currentTarget.style.borderColor = V.accent;
            e.currentTarget.style.color = V.accent;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = V.bgCard;
            e.currentTarget.style.borderColor = V.border;
            e.currentTarget.style.color = V.textS;
          }}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>

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