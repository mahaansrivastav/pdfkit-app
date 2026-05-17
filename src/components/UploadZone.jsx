import { useRef, useCallback, useState, useEffect } from 'react';
import { getTheme } from '../theme';

export default function UploadZone({ tool, isDark }) {
  const V = getTheme(isDark);
  const [files, setFiles]   = useState([]);
  const [drag, setDrag]     = useState(false);
  const [status, setStatus] = useState('idle'); // idle | processing | done
  const [password, setPassword] = useState('');
  const [pages, setPages]   = useState('');
  const [borderOffset, setBorderOffset] = useState(0);
  const inputRef = useRef(null);

  // Animated dashed border effect
  useEffect(() => {
    if (!drag) return;
    const interval = setInterval(() => {
      setBorderOffset((prev) => (prev + 1) % 20);
    }, 50);
    return () => clearInterval(interval);
  }, [drag]);

  const handleFiles = useCallback((incoming) => {
    const pdfs = Array.from(incoming).filter((f) => f.name.endsWith('.pdf'));
    if (tool.multi) setFiles((prev) => [...prev, ...pdfs]);
    else setFiles(pdfs.slice(0, 1));
    setStatus('idle');
  }, [tool]);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    setDrag(false);
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const removeFile = (idx) => setFiles((prev) => prev.filter((_, i) => i !== idx));

  const handleProcess = async () => {
    if (!files.length) return;
    setStatus('processing');
    setTimeout(() => setStatus('done'), 2000);
  };

  const reset = () => {
    setFiles([]);
    setStatus('idle');
    setPassword('');
    setPages('');
  };

  const dropZoneStyle = {
    position: 'relative',
    borderRadius: 12,
    padding: '32px 20px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    background: drag ? V.accentSoft : V.bgInput,
    border: drag ? 'none' : `2px dashed ${V.borderL}`,
    overflow: 'hidden',
  };

  return (
    <div style={{
      background: V.bgCard,
      border: `1px solid ${V.border}`,
      borderRadius: 14,
    }}>
      {/* Card header */}
      <div style={{
        padding: '16px 20px',
        borderBottom: `1px solid ${V.border}`,
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: 8,
          background: tool.bg,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 18,
        }}>
          {tool.emoji}
        </div>
        <div>
          <p style={{ fontWeight: 700, fontSize: 14, color: V.textP, margin: 0 }}>{tool.label}</p>
          <p style={{ fontSize: 12, color: V.textM, margin: 0 }}>{tool.desc}</p>
        </div>
      </div>

      <div style={{ padding: 20 }}>

        {/* Drop zone */}
        {status !== 'done' && (
          <div
            onDrop={onDrop}
            onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
            onDragLeave={() => setDrag(false)}
            onClick={() => inputRef.current?.click()}
            style={dropZoneStyle}
          >
            {/* Animated border when dragging */}
            {drag && (
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                borderRadius: 12,
                border: `2px dashed ${V.accent}`,
                backgroundImage: `repeating-linear-gradient(90deg, ${V.accent} 0, ${V.accent} 10px, transparent 10px, transparent 20px)`,
                backgroundSize: '20px 2px',
                backgroundPosition: `${borderOffset}px 0, ${borderOffset}px 100%, 0 ${borderOffset}px, 100% ${borderOffset}px`,
                backgroundRepeat: 'repeat-x, repeat-x, repeat-y, repeat-y',
                pointerEvents: 'none',
                animation: 'borderDash 0.5s linear infinite',
              }} />
            )}
            <div style={{ 
              fontSize: 28, 
              marginBottom: 8, 
              opacity: drag ? 1 : 0.5,
              transform: drag ? 'scale(1.1)' : 'scale(1)',
              transition: 'all 0.2s ease',
            }}>
              📤
            </div>
            <p style={{ fontWeight: 600, color: V.textP, fontSize: 14, margin: 0 }}>
              Drop PDF{tool.multi ? 's' : ''} here or{' '}
              <span style={{ color: V.accentText }}>browse</span>
            </p>
            <p style={{ fontSize: 12, color: V.textM, margin: '5px 0 0' }}>
              {tool.multi ? 'Multiple files supported' : 'One PDF file'} · Max 50MB
            </p>
            <input
              ref={inputRef}
              type="file"
              accept=".pdf"
              multiple={tool.multi}
              style={{ display: 'none' }}
              onChange={(e) => handleFiles(e.target.files)}
            />
          </div>
        )}

        {/* File list */}
        {files.length > 0 && status !== 'done' && (
          <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {files.map((f, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '8px 12px', background: V.bgInput,
                borderRadius: 8, border: `1px solid ${V.border}`,
                transition: 'all 0.2s ease',
              }}>
                <span style={{ fontSize: 14 }}>📄</span>
                <span style={{ flex: 1, fontSize: 12, color: V.textP, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {f.name}
                </span>
                <span style={{ fontSize: 11, color: V.textM, flexShrink: 0 }}>
                  {(f.size / 1024).toFixed(0)} KB
                </span>
                <button
                  onClick={() => removeFile(i)}
                  style={{ border: 'none', background: 'none', color: V.textM, cursor: 'pointer', fontSize: 18, lineHeight: 1, transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#EF4444'}
                  onMouseLeave={(e) => e.currentTarget.style.color = V.textM}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Password input */}
        {tool.id === 'password' && files.length > 0 && status !== 'done' && (
          <div style={{ marginTop: 14 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: V.textS, display: 'block', marginBottom: 5 }}>
              Set password
            </label>
            <input
              type="password"
              placeholder="Enter a password…"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%', padding: '9px 12px', borderRadius: 8,
                border: `1px solid ${V.borderL}`, background: V.bgInput,
                color: V.textP, fontSize: 13, outline: 'none',
                transition: 'border-color 0.2s ease',
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = V.accent}
              onBlur={(e) => e.currentTarget.style.borderColor = V.borderL}
            />
          </div>
        )}

        {/* Page range input */}
        {tool.id === 'remove' && files.length > 0 && status !== 'done' && (
          <div style={{ marginTop: 14 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: V.textS, display: 'block', marginBottom: 5 }}>
              Pages to remove
            </label>
            <input
              type="text"
              placeholder="e.g. 1, 3, 5-8"
              value={pages}
              onChange={(e) => setPages(e.target.value)}
              style={{
                width: '100%', padding: '9px 12px', borderRadius: 8,
                border: `1px solid ${V.borderL}`, background: V.bgInput,
                color: V.textP, fontSize: 13, outline: 'none',
                transition: 'border-color 0.2s ease',
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = V.accent}
              onBlur={(e) => e.currentTarget.style.borderColor = V.borderL}
            />
            <p style={{ fontSize: 11, color: V.textM, margin: '5px 0 0' }}>
              Comma-separated or ranges like 5-8
            </p>
          </div>
        )}

        {/* Process button */}
        {files.length > 0 && status === 'idle' && (
          <button
            onClick={handleProcess}
            style={{
              marginTop: 16, width: '100%', padding: 12,
              background: V.accent, color: 'white', border: 'none',
              borderRadius: 10, fontSize: 14, fontWeight: 700,
              cursor: 'pointer', letterSpacing: '-0.2px',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = V.accentH;
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(99, 102, 241, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = V.accent;
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.3)';
            }}
          >
            {tool.id === 'merge'    && 'Merge PDFs →'}
            {tool.id === 'remove'   && 'Remove Pages →'}
            {tool.id === 'password' && 'Lock PDF →'}
            {tool.id === 'ocr'      && 'Extract Text →'}
          </button>
        )}

        {/* Processing */}
        {status === 'processing' && (
          <div style={{ marginTop: 16, textAlign: 'center', padding: '20px 0' }}>
            <div className="spinner" />
            <p style={{ margin: '10px 0 0', fontSize: 13, color: V.textS }}>Processing your PDF…</p>
          </div>
        )}

        {/* Done */}
        {status === 'done' && (
          <div style={{ padding: '24px 0', textAlign: 'center' }}>
            <div style={{
              width: 48, height: 48,
              background: 'rgba(16,185,129,0.15)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 12px', fontSize: 22,
            }}>
              ✓
            </div>
            <h3 style={{ margin: '0 0 4px', fontSize: 15, fontWeight: 700, color: V.textP }}>
              Your file is ready!
            </h3>
            <p style={{ margin: '0 0 16px', fontSize: 13, color: V.textS }}>
              Connect the backend to enable real downloads.
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
              <button
                onClick={reset}
                style={{
                  padding: '8px 16px', borderRadius: 8,
                  border: `1px solid ${V.borderL}`, background: V.bgBadge,
                  color: V.textS, fontWeight: 600, cursor: 'pointer', fontSize: 13,
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = V.accent;
                  e.currentTarget.style.color = V.textP;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = V.borderL;
                  e.currentTarget.style.color = V.textS;
                }}
              >
                Process another
              </button>
              <button 
                style={{
                  padding: '8px 16px', borderRadius: 8, border: 'none',
                  background: V.accent, color: 'white', fontWeight: 700,
                  cursor: 'pointer', fontSize: 13, transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = V.accentH;
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = V.accent;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                ↓ Download
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}