import React, { useState } from 'react';

const PartialFractionDecomposer = () => {
  const [numerator, setNumerator] = useState('');
  const [denominator, setDenominator] = useState('');
  const [result, setResult] = useState('');

  // This is a simplified example just to show input/output UI.
  // Real partial fraction decomposition is complex and needs math lib like algebra.js or math.js

  const decompose = () => {
    if (!numerator || !denominator) {
      setResult('Please enter numerator and denominator polynomials.');
      return;
    }
    // Dummy output as example
    setResult(`Partial fractions decomposition of (${numerator}) / (${denominator})`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Partial Fraction Decomposer</h2>
      <input
        type="text"
        placeholder="Enter numerator polynomial (e.g. x^2 + 3x + 2)"
        value={numerator}
        onChange={(e) => setNumerator(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Enter denominator polynomial (e.g. x^2 - 1)"
        value={denominator}
        onChange={(e) => setDenominator(e.target.value)}
        style={styles.input}
      />
      <button onClick={decompose} style={styles.button}>Decompose</button>
      {result && <div style={styles.result}>{result}</div>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '450px',
    margin: '30px auto',
    padding: '20px',
    border: '2px solid #ddd',
    borderRadius: '10px',
    textAlign: 'center',
    background: '#f9f9f9',
    fontFamily: 'Arial',
  },
  heading: {
    marginBottom: '15px',
    color: '#333',
  },
  input: {
    width: '90%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#0077cc',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '15px',
    color: '#333',
  },
};

export default PartialFractionDecomposer;
