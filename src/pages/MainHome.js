import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = [
  {
    name: 'Financial Calculators',
    description: 'Manage your personal finances with ease.',
    path: '/Financial',
    color: '#3b82f6',
  },
  {
    name: 'Health Calculators',
    description: 'Track your fitness and health goals.',
    path: '/Health',
    color: '#10b981',
  },
  {
    name: 'Conversion Calculators',
    description: 'Convert units and values instantly.',
    path: '/Conversion',
    color: '#f59e0b',
  },
  {
    name: 'Geometry Calculators',
    description: 'Calculate geometric shapes and formulas.',
    path: '/geometry',
    color: '#8b5cf6',
  },
  {
    name: 'Algebra Calculators',
    description: 'Solve algebraic problems easily.',
    path: '/algebra',
    color: '#ef4444',
  },
  {
    name: 'Arithmetic Calculators',
    description: 'Perform basic math operations.',
    path: '/arithmetic',
    color: '#ec4899',
  },
];

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, boxShadow: '0 6px 16px rgba(255,255,255,0.2)' },
  tap: { scale: 0.96 },
};

const MainHome = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Main Content */}
      <div style={styles.container}>
        <h1 style={styles.heading}>All In One Calculator</h1>

        <div style={styles.grid}>
          {categories.map((item, idx) => (
            <motion.div
              key={idx}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={() => navigate(item.path)}
              style={{
                ...styles.card,
                border: `2px solid ${item.color}`,
                background: `linear-gradient(135deg, ${item.color}33, #ffffff0a)`,
                boxShadow: `0 10px 25px ${item.color}55`,
              }}
            >
              <h3 style={styles.title}>{item.name}</h3>
              <p style={styles.desc}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        body {
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          background-attachment: fixed;
          background-size: cover;
          font-family: Arial, sans-serif;
        }

        a {
          color: #fff;
          text-decoration: none;
          margin: 0 15px;
          transition: color 0.3s ease;
        }

        a:hover {
          color: #ccc;
        }

        @media (max-width: 768px) {
          .card {
            min-width: 100% !important;
            padding: 16px !important;
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 1100,
    margin: '100px auto 40px',
    padding: '30px 25px',
    textAlign: 'center',
    background: 'rgba(255,255,255,0.06)',
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    borderRadius: '20px',
    boxShadow: '0 12px 45px rgba(0,0,0,0.3)',
    color: '#fff',
  },
  heading: {
    marginBottom: 35,
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textShadow: '1px 1px 8px rgba(0,0,0,0.6)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 24,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  card: {
    padding: '20px 25px',
    borderRadius: '18px',
    cursor: 'pointer',
    color: '#fff',
    transition: 'all 0.3s ease',
    userSelect: 'none',
    textAlign: 'left',
    backdropFilter: 'blur(6px)',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  desc: {
    fontSize: 15, // Increased font size slightly
    color: '#ddd',
  },
};

export default MainHome;
