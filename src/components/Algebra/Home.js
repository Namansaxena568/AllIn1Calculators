import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ComplexNumberCalculator from './ComplexNumberCalculator';
import BooleanAlgebraSimplifier from './BooleanAlgebraSimplifier';
import PartialFractionDecomposer from './PartialFractionDecomposer';
import InequalityCalculator from './InequalityCalculator';
import FlowRateCalculator from './FlowRateCalculator';
import ImpulseCalculator from './ImpulseCalculator';
import FactorizationCalculator from './FactorizationCalculator';
import PercentageCalculator from './PercentageCalculator';
import ExponentialFormulasCalculator from './ExponentialFormulasCalculator';
import CubeOfNumberCalculator from './CubeOfNumberCalculator';
import CubeRootCalculator from './CubeRootCalculator';

const calculators = [
  { name: 'Complex Number Calculator', component: ComplexNumberCalculator },
  { name: 'Boolean Algebra Simplifier', component: BooleanAlgebraSimplifier },
  { name: 'Partial Fraction Decomposer', component: PartialFractionDecomposer },
  { name: 'Inequality Calculator', component: InequalityCalculator },
  { name: 'Flow Rate Calculator', component: FlowRateCalculator },
  { name: 'Impulse Calculator', component: ImpulseCalculator },
  { name: 'Factorization Calculator', component: FactorizationCalculator },
  { name: 'Percentage Calculator', component: PercentageCalculator },
  { name: 'Exponential Formulas Calculator', component: ExponentialFormulasCalculator },
  { name: 'Cube of a Number Calculator', component: CubeOfNumberCalculator },
  { name: 'Cube Root Calculator', component: CubeRootCalculator },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const ActiveComponent = activeIndex !== null ? calculators[activeIndex].component : null;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Math & Algebra Calculators</h1>

      <div style={styles.buttonGrid}>
        {calculators.map((calc, idx) => (
          <motion.button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className="calc-button"
            style={{
              ...styles.button,
              backgroundColor: activeIndex === idx ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)',
              borderColor: activeIndex === idx ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.3)',
              boxShadow: activeIndex === idx ? '0 6px 16px rgba(255,255,255,0.4)' : 'none',
            }}
            whileHover={{ scale: 1.07, boxShadow: '0 8px 20px rgba(255,255,255,0.5)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {calc.name}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {ActiveComponent && (
          <motion.div
            key={activeIndex}
            style={styles.cardWrapper}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <ActiveComponent />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        body {
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          background-attachment: fixed;
          background-size: cover;
          font-family: Arial, sans-serif;
        }

        @media (max-width: 700px) {
          .calc-button {
            min-width: 140px !important;
            font-size: 13px !important;
            padding: 8px 10px !important;
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 900,
    margin: '40px auto',
    padding: '30px 25px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.07)',
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    borderRadius: '16px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
    color: '#fff',
  },
  heading: {
    marginBottom: 30,
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textShadow: '1px 1px 8px rgba(0,0,0,0.6)',
  },
  buttonGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'center',
    marginBottom: 40,
  },
  button: {
    minWidth: 180,
    padding: '14px 22px',
    fontSize: 16,
    color: '#fff',
    border: '2px solid rgba(255,255,255,0.3)',
    borderRadius: 16,
    cursor: 'pointer',
    backdropFilter: 'blur(6px)',
    background: 'rgba(255,255,255,0.1)',
    userSelect: 'none',
    outline: 'none',
  },
  cardWrapper: {
    background: 'rgba(255, 255, 255, 0.12)',
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    borderRadius: '24px',
    padding: '30px 35px',
    maxWidth: '700px',
    margin: 'auto',
    boxShadow: '0 12px 48px rgba(0,0,0,0.35)',
    color: '#fff',
  },
};

export default Home;
