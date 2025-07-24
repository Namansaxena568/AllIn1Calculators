import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal routing

const Footer = () => {
  const styles = {
    footer: {
      background: '#111',
      color: '#fff',
      textAlign: 'center',
      padding: '40px 20px',
      fontSize: '16px',
      marginTop: 'auto',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
    },
    column: {
      flex: '1 1 200px',
      padding: '10px',
      minWidth: '200px',
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    link: {
      color: '#aaa',
      display: 'block',
      margin: '8px 0',
      textDecoration: 'none',
      transition: 'color 0.3s',
    },
    linkHover: {
      color: '#fff',
    },
    socialIcons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '16px',
      marginTop: '20px',
    },
    iconWrapper: {
      width: '30px',
      height: '30px',
      cursor: 'pointer',
      transition: 'transform 0.3s',
    },
    iconHover: {
      transform: 'scale(1.2)',
    },
    iconSVG: {
      fill: '#aaa',
      transition: 'fill 0.3s',
    },
    iconSVGHover: {
      fill: '#fff',
    },
    copyright: {
      marginTop: '30px',
      color: '#888',
      fontSize: '14px',
    },
  };

  const [hoveredLink, setHoveredLink] = React.useState(null);
  const [hoveredIcon, setHoveredIcon] = React.useState(null);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const icons = [
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      svgPath: 'M22 12a10 10 0 10-11.6 9.9v-7h-2v-3h2v-2c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.8h2.2l-.4 3H13v7A10 10 0 0022 12z',
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      svgPath: 'M22.46 6c-.77.34-1.6.57-2.46.67a4.3 4.3 0 001.88-2.38 8.59 8.59 0 01-2.72 1.03 4.28 4.28 0 00-7.29 3.9A12.14 12.14 0 013 4.9a4.28 4.28 0 001.32 5.7A4.23 4.23 0 012.8 10v.05a4.28 4.28 0 003.44 4.2 4.3 4.3 0 01-1.92.07 4.28 4.28 0 004 2.98A8.6 8.6 0 012 19.54 12.15 12.15 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68l-.01-.53A8.33 8.33 0 0022.46 6z',
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      svgPath: 'M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.5.4.6.2 1 .5 1.4 1 .4.4.7.8 1 1.4.2.5.3 1.3.4 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.4 2.5-.2.6-.5 1-1 1.4-.4.4-.8.7-1.4 1-.5.2-1.3.3-2.5.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.5-.4-.6-.2-1-.5-1.4-1-.4-.4-.7-.8-1-1.4-.2-.5-.3-1.3-.4-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2 .4-2.5.2-.6.5-1 1-1.4.4-.4.8-.7 1.4-1 .5-.2 1.3-.3 2.5-.4C8.4 2.2 8.8 2.2 12 2.2',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      svgPath: 'M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1 5 2.1 5 3.5zM.5 8h4v12h-4V8zm7.5 0h3.8v1.7h.1c.5-1 1.7-2.1 3.4-2.1 3.6 0 4.2 2.4 4.2 5.5V20h-4v-5.5c0-1.3 0-3-2-3s-2.3 1.5-2.3 3V20h-4V8z',
    },
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <div style={styles.title}>AllIn1Calculator</div>
          <p>Your all-in-one calculator zone for every need — finance, health, conversions & more!</p>
        </div>

        <div style={styles.column}>
          <div style={styles.title}>Quick Links</div>
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              style={hoveredLink === index ? { ...styles.link, ...styles.linkHover } : styles.link}
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div style={styles.column}>
          <div style={styles.title}>Follow Us</div>
          <div style={styles.socialIcons}>
            {icons.map((icon, index) => (
              <a
                key={index}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
                onMouseEnter={() => setHoveredIcon(index)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <div style={hoveredIcon === index ? { ...styles.iconWrapper, ...styles.iconHover } : styles.iconWrapper}>
                  <svg height="24" width="24" viewBox="0 0 24 24" style={hoveredIcon === index ? { ...styles.iconSVG, ...styles.iconSVGHover } : styles.iconSVG}>
                    <path d={icon.svgPath} />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div style={styles.copyright}>
        © {new Date().getFullYear()} CalcZone. All rights reserved. This is created with ❤️ by Naman Saxena.
      </div>
    </footer>
  );
};

export default Footer;
