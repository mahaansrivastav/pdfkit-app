import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Terms from './pages/Terms';
import { getTheme } from './theme';

export default function App() {
  const [page, setPage] = useState('home');
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('pdfkit-theme');
    return saved ? saved === 'dark' : true;
  });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedPage, setDisplayedPage] = useState('home');

  const V = getTheme(isDark);

  // Save theme preference
  useEffect(() => {
    localStorage.setItem('pdfkit-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Handle page transition
  const handleSetPage = (newPage) => {
    if (newPage === page) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setDisplayedPage(newPage);
      setPage(newPage);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 200);
  };

  const toggleTheme = () => setIsDark(!isDark);

  const pageStyle = {
    opacity: isTransitioning ? 0 : 1,
    transform: isTransitioning ? 'translateY(10px)' : 'translateY(0)',
    transition: 'opacity 0.2s ease, transform 0.2s ease',
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: V.bgPage, 
      display: 'flex', 
      flexDirection: 'column',
      transition: 'background 0.3s ease',
    }}>
      <Navbar page={page} setPage={handleSetPage} isDark={isDark} toggleTheme={toggleTheme} />
      
      <main style={{ flex: 1, ...pageStyle }}>
        {displayedPage === 'home' && <Home setPage={handleSetPage} isDark={isDark} />}
        {displayedPage === 'about' && <About setPage={handleSetPage} isDark={isDark} />}
        {displayedPage === 'terms' && <Terms isDark={isDark} />}
      </main>
      
      <Footer setPage={handleSetPage} isDark={isDark} />
    </div>
  );
}