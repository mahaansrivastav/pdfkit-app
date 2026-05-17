import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Terms from './pages/Terms';
import { V } from './theme';

export default function App() {
  const [page, setPage] = useState('home');

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', background: V.bgPage }}>
      <Navbar page={page} setPage={navigate} />

      {page === 'home'  && <Home setPage={navigate} />}
      {page === 'about' && <About setPage={navigate} />}
      {page === 'terms' && <Terms />}

      {/* Bottom ad banner */}
      <div style={{
        width: '100%', height: 80,
        background: '#080B14',
        borderTop: `1px solid ${V.border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: V.textM, fontSize: 11, letterSpacing: 1, fontWeight: 500,
      }}>
        {/* Replace with: <ins className="adsbygoogle" ... /> */}
        ADVERTISEMENT — BOTTOM BANNER
      </div>

      <Footer setPage={navigate} />
    </div>
  );
}