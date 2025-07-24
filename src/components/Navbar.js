import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const fullText = 'AllIn1Calculator';
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const speed = isDeleting ? 100 : 150;
    const pause = isDeleting ? 500 : 1000;

    const typingEffect = setTimeout(() => {
      if (!isDeleting && index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      } else if (!isDeleting && index === fullText.length) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && index > 0) {
        setDisplayText(fullText.slice(0, index - 1));
        setIndex(index - 1);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(typingEffect);
  }, [index, isDeleting]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header style={styles.navbar}>
      <div style={styles.navContent}>
        <div style={styles.logo}>
          🧮 <span style={styles.typingText}>{displayText}</span>
        </div>

        {isMobile ? (
          <>
            <button style={styles.hamburger} onClick={toggleMenu}>
              ☰
            </button>
            {menuOpen && (
              <nav style={styles.mobileMenu}>
                <CustomLink to="/" current={location.pathname === '/'}>Home</CustomLink>
                <CustomLink to="/about" current={location.pathname === '/about'}>About Us</CustomLink>
                <CustomLink to="/services" current={location.pathname === '/services'}>Services</CustomLink>
                <CustomLink to="/contact" current={location.pathname === '/contact'}>Contact Us</CustomLink>
              </nav>
            )}
          </>
        ) : (
          <nav style={styles.navLinks}>
            <CustomLink to="/" current={location.pathname === '/'}>Home</CustomLink>
            <CustomLink to="/about" current={location.pathname === '/about'}>About Us</CustomLink>
            <CustomLink to="/services" current={location.pathname === '/services'}>Services</CustomLink>
            <CustomLink to="/contact" current={location.pathname === '/contact'}>Contact Us</CustomLink>
          </nav>
        )}
      </div>
    </header>
  );
};

const CustomLink = ({ to, current, children }) => (
  <Link
    to={to}
    style={{
      color: '#fff',
      textDecoration: current ? 'underline' : 'none',
      fontWeight: current ? 'bold' : 'normal',
      fontSize: '1rem',
      transition: '0.3s',
      paddingBottom: '4px',
    }}
  >
    {children}
  </Link>
);

const styles = {
  navbar: {
    background: 'rgba(0, 0, 0, 0.85)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    color: '#fff',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    padding: '16px 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  navContent: {
    width: '100%',
    maxWidth: '1200px',
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  typingText: {
    borderRight: '2px solid white',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    animation: 'blink 0.7s steps(1) infinite',
  },
  navLinks: {
    display: 'flex',
    gap: '24px',
  },
  hamburger: {
    fontSize: '1.5rem',
    background: 'transparent',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
  },
  mobileMenu: {
    position: 'absolute',
    top: '70px',
    right: '24px',
    background: 'rgba(0, 0, 0, 0.9)',
    borderRadius: '8px',
    padding: '12px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    zIndex: 1001,
  },
};

// Inject blinking cursor animation
const blinkStyle = document.createElement('style');
blinkStyle.innerHTML = `
@keyframes blink {
  0%, 100% { border-color: transparent }
  50% { border-color: white }
}
`;
document.head.appendChild(blinkStyle);

export default Navbar;
