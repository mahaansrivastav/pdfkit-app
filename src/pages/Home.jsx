import { useState } from 'react';
import UploadZone from '../components/UploadZone';
import { V, tools } from '../theme';

function AdSlot({ label = 'ADVERTISEMENT', height = 72 }) {
  return (
    <div style={{
      width: '100%', height,
      background: '#0A0D17',
      border: `1px solid ${V.border}`,
      borderRadius: 8,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: V.textM, fontSize: 11, letterSpacing: 1, fontWeight: 500,
    }}>
      {/* Replace this div with your Google AdSense <ins> tag */}
      {label}
    </div>
  );
}

export default function Home({ setPage }) {
  const [activeTool, setActiveTool] = useState('merge');
  const tool = tools.find((t) => t.id === activeTool);

  return (
    <div>
      {/* Top ad banner */}
      <div style={{ maxWidth: 960, margin: '14px auto 0', padding: '0 20px' }}>
        <AdSlot label="ADVERTISEMENT — 728×90" height={70} />
      </div>

      {/* Hero */}
      <div style={{ textAlign: 'center', padding: '48px 20px 36px', maxWidth: 600, margin: '0 auto' }}>
        <div style={{
          display: 'inline-block', background: V.accentSoft, color: V.accentText,
          fontSize: 11, fontWeight: 700, padding: '5px 14px', borderRadius: 999,
          marginBottom: 20, border: '1px solid rgba(99,102,241,0.2)', letterSpacing: 0.5,
        }}>
          FREE PDF TOOLS · NO SIGN-UP NEEDED
        </div>
        <h1 style={{
          fontSize: 40, fontWeight: 900, color: V.textP,
          letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: 14,
        }}>
          PDF tools that{' '}
          <span style={{ color: V.accentText }}>just work.</span>
        </h1>
        <p style={{ fontSize: 15, color: V.textS, lineHeight: 1.7 }}>
          Merge, edit, protect, and extract text from PDFs.
          Fast, free, and completely private.
        </p>
      </div>

      {/* Main layout: tool area + sidebar ad */}
      <div style={{
        maxWidth: 960, margin: '0 auto', padding: '0 20px 56px',
        display: 'flex', gap: 20, alignItems: 'flex-start',
      }}>

        {/* Left: tool + upload */}
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* Tool tabs */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 10, marginBottom: 20,
          }}>
            {tools.map((t) => {
              const active = activeTool === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTool(t.id)}
                  style={{
                    padding: '14px 10px', borderRadius: 12,
                    border: active ? `2px solid ${V.accent}` : `1px solid ${V.border}`,
                    background: active ? V.accentSoft : V.bgCard,
                    cursor: 'pointer', display: 'flex', flexDirection: 'column',
                    alignItems: 'center', gap: 8, transition: 'all 0.15s',
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 10,
                    background: t.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 20,
                  }}>
                    {t.emoji}
                  </div>
                  <span style={{
                    fontSize: 11, fontWeight: 700,
                    color: active ? V.accentText : V.textS,
                    letterSpacing: '-0.2px',
                  }}>
                    {t.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Upload zone — key forces remount on tool change */}
          <UploadZone key={activeTool} tool={tool} />

          {/* Inline ad */}
          <div style={{ marginTop: 20 }}>
            <AdSlot label="ADVERTISEMENT — 728×90" height={90} />
          </div>

          {/* How it works */}
          <div style={{ marginTop: 48 }}>
            <div style={{ textAlign: 'center', marginBottom: 28 }}>
              <div style={{
                display: 'inline-block', background: V.accentSoft, color: V.accentText,
                fontSize: 11, fontWeight: 700, padding: '5px 14px', borderRadius: 999,
                marginBottom: 14, border: '1px solid rgba(99,102,241,0.2)',
              }}>
                HOW IT WORKS
              </div>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: V.textP, letterSpacing: '-0.5px' }}>
                Three steps, done.
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
              {[
                { n: '01', col: '#3B82F6', t: 'Upload your file',    d: 'Drag and drop or click to select. Files never leave your session.' },
                { n: '02', col: '#8B5CF6', t: 'Choose your tool',    d: 'Merge, remove pages, add password, or extract text with OCR.' },
                { n: '03', col: '#10B981', t: 'Download the result', d: 'Your file is ready in seconds. No account, no email needed.' },
              ].map((s) => (
                <div key={s.n} style={{
                  background: V.bgCard, border: `1px solid ${V.border}`,
                  borderRadius: 12, padding: '18px 16px',
                }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: `${s.col}22`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 800, color: s.col,
                    marginBottom: 10, letterSpacing: 1,
                  }}>
                    {s.n}
                  </div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: V.textP, margin: '0 0 5px' }}>{s.t}</h3>
                  <p style={{ fontSize: 12, color: V.textS, lineHeight: 1.65, margin: 0 }}>{s.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA strip */}
          <div style={{
            marginTop: 40, background: V.accentSoft, borderRadius: 14,
            padding: '24px', display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', flexWrap: 'wrap', gap: 16,
            border: '1px solid rgba(99,102,241,0.2)',
          }}>
            <div>
              <h3 style={{ margin: '0 0 4px', fontSize: 15, fontWeight: 700, color: V.textP }}>
                More features coming soon
              </h3>
              <p style={{ margin: 0, fontSize: 13, color: V.textS }}>
                PDF to Word, compress, split, watermark, and more.
              </p>
            </div>
            <button
              onClick={() => setPage('about')}
              style={{
                padding: '10px 20px', background: V.accent, color: 'white',
                border: 'none', borderRadius: 9, fontWeight: 700,
                cursor: 'pointer', fontSize: 13, flexShrink: 0,
              }}
            >
              Learn more →
            </button>
          </div>
        </div>

        {/* Right: sidebar ad (desktop) */}
        <div style={{ width: 160, flexShrink: 0, position: 'sticky', top: 70 }}>
          <div style={{
            background: V.bgCard, border: `1px solid ${V.border}`,
            borderRadius: 10, minHeight: 500,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: 6,
            color: V.textM, fontSize: 11, fontWeight: 500, letterSpacing: 0.5,
          }}>
            {/* Replace with AdSense 160×600 tag */}
            <span style={{ opacity: 0.5 }}>AD</span>
            <span style={{ opacity: 0.3, fontSize: 10 }}>160×600</span>
          </div>
        </div>

      </div>
    </div>
  );
}