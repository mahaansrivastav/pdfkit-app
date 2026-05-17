import { getTheme } from '../theme';

export default function Footer({ setPage, isDark }) {
  const V = getTheme(isDark);
  
  return (
    <footer style={{
      background: V.footerBg,
      borderTop: `1px solid ${V.border}`,
      padding: '24px 20px',
    }}>
      <div style={{
        maxWidth: 960, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: 12,
      }}>
        <div>
          <span style={{ fontWeight: 900, color: V.textP, fontSize: 14 }}>📄 PDFKit</span>
          <p style={{ fontSize: 12, color: V.textM, margin: '3px 0 0' }}>
            Free PDF tools, no sign-up required.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          {['home', 'about', 'terms'].map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              style={{
                color: V.textM, background: 'none', border: 'none',
                cursor: 'pointer', fontSize: 13, textTransform: 'capitalize',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = V.accent}
              onMouseLeave={(e) => e.currentTarget.style.color = V.textM}
            >
              {p}
            </button>
          ))}
          <span style={{ fontSize: 12, color: V.textM }}>© 2025 PDFKit</span>
        </div>
      </div>
    </footer>
  );
}