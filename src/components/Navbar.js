// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <header style={styles.navbar}>
      <div style={styles.navContent}>
        <div style={styles.logo}>
          🧮 <span style={{ fontWeight: 'bold' }}>AllIn1Calculator</span>
        </div>
        <nav style={styles.navLinks}>
          <CustomLink to="/" current={location.pathname === '/'}>Home</CustomLink>
          <CustomLink to="/about" current={location.pathname === '/about'}>About Us</CustomLink>
          <CustomLink to="/services" current={location.pathname === '/services'}>Services</CustomLink>
          <CustomLink to="/contact" current={location.pathname === '/contact'}>Contact Us</CustomLink>
        </nav>
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
      paddingBottom: '2px',
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
    padding: '0 40px',
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
  },
  navLinks: {
    display: 'flex',
    gap: '24px',
  },
};

export default Navbar;
