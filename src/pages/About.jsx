import { useState } from 'react';
import { V, tools } from '../theme';

export default function About({ setPage }) {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: 'Is PDFKit completely free?',      a: 'Yes, 100% free. No credit card, no account, no hidden charges. Core tools will always remain free.' },
    { q: 'Are my files safe and private?',  a: 'Files are processed server-side and immediately discarded after download. We never store or share your documents.' },
    { q: 'What is the file size limit?',    a: 'Currently 50MB per file. We plan to increase this for verified users in future.' },
    { q: 'Does it work on mobile?',         a: 'Yes. PDFKit works in any modern browser, including Safari on iOS and Chrome on Android.' },
    { q: 'Do I need to create an account?', a: 'No. All current features are free with no login required. Advanced features may require an account in future.' },
  ];

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 20px' }}>

      {/* Header */}
      <div style={{
        display: 'inline-block', background: V.accentSoft, color: V.accentText,
        fontSize: 11, fontWeight: 700, padding: '5px 14px', borderRadius: 999,
        marginBottom: 20, border: '1px solid rgba(99,102,241,0.2)',
      }}>
        ABOUT
      </div>
      <h1 style={{ fontSize: 32, fontWeight: 900, color: V.textP, letterSpacing: '-1px', marginBottom: 10 }}>
        About PDFKit
      </h1>
      <p style={{ fontSize: 15, color: V.textS, lineHeight: 1.7, marginBottom: 44, maxWidth: 520 }}>
        PDFKit is a free, browser-based PDF utility. No installs, no accounts — just upload your file and get the result instantly.
      </p>

      {/* Features grid */}
      <h2 style={{ fontSize: 18, fontWeight: 800, color: V.textP, marginBottom: 16, letterSpacing: '-0.5px' }}>
        What you can do
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 48 }}>
        {tools.map((t) => (
          <div key={t.id} style={{
            background: V.bgCard, border: `1px solid ${V.border}`,
            borderRadius: 12, padding: 18,
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: 9, background: t.bg,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20, marginBottom: 12,
            }}>
              {t.emoji}
            </div>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: V.textP, margin: '0 0 5px' }}>{t.label}</h3>
            <p style={{ fontSize: 12, color: V.textS, lineHeight: 1.65, margin: 0 }}>{t.desc}</p>
          </div>
        ))}
      </div>

      {/* Why use PDFKit — SEO content */}
      <h2 style={{ fontSize: 18, fontWeight: 800, color: V.textP, marginBottom: 16, letterSpacing: '-0.5px' }}>
        Why PDFKit?
      </h2>
      <div style={{
        background: V.bgCard, border: `1px solid ${V.border}`,
        borderRadius: 12, padding: '20px 24px', marginBottom: 48,
      }}>
        {[
          'No installation required — works directly in your browser.',
          'No account or sign-up needed to use any tool.',
          'Your files are never stored on our servers.',
          'Works on desktop, tablet, and mobile.',
          'Fast processing powered by a Python backend.',
          'Completely free, with no hidden charges.',
        ].map((point) => (
          <div key={point} style={{
            display: 'flex', alignItems: 'flex-start', gap: 10,
            padding: '8px 0', borderBottom: `1px solid ${V.border}`,
          }}>
            <span style={{ color: V.accentText, flexShrink: 0, marginTop: 2 }}>✓</span>
            <span style={{ fontSize: 13, color: V.textS, lineHeight: 1.6 }}>{point}</span>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <h2 style={{ fontSize: 18, fontWeight: 800, color: V.textP, marginBottom: 16, letterSpacing: '-0.5px' }}>
        Frequently asked questions
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 48 }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{
            background: V.bgCard, border: `1px solid ${V.border}`,
            borderRadius: 12, overflow: 'hidden',
          }}>
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              style={{
                width: '100%', padding: '14px 18px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 12,
              }}
            >
              <span style={{ fontWeight: 600, color: V.textP, fontSize: 13 }}>{faq.q}</span>
              <span style={{
                color: V.textM, fontSize: 18, flexShrink: 0,
                transform: openFaq === i ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s', display: 'inline-block',
              }}>
                ⌄
              </span>
            </button>
            {openFaq === i && (
              <div style={{ padding: '0 18px 14px', fontSize: 13, color: V.textS, lineHeight: 1.7 }} className="fade-up">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{
        background: V.accentSoft, borderRadius: 14, padding: 28, textAlign: 'center',
        border: '1px solid rgba(99,102,241,0.2)',
      }}>
        <p style={{ fontWeight: 800, fontSize: 17, color: V.textP, margin: '0 0 6px' }}>Ready to try it?</p>
        <p style={{ fontSize: 13, color: V.textS, margin: '0 0 18px' }}>No sign-up. No waiting. Just upload and go.</p>
        <button
          onClick={() => setPage('home')}
          style={{
            padding: '11px 26px', background: V.accent, color: 'white',
            border: 'none', borderRadius: 9, fontWeight: 700,
            cursor: 'pointer', fontSize: 14,
          }}
        >
          Open the tool →
        </button>
      </div>

    </div>
  );
}