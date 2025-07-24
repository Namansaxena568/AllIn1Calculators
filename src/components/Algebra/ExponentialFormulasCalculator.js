import React, { useState } from 'react';

const ExponentialFormulasCalculator = () => {
  const [base, setBase] = useState('');
  const [exponent, setExponent] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const b = parseFloat(base);
    const e = parseFloat(exponent);
    if (isNaN(b) || isNaN(e)) {
      setResult('Please enter valid numbers.');
      return;
    }
    setResult(Math.pow(b, e).toFixed(4));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Exponential Calculator</h2>
      <input
        type="number"
        placeholder="Base"
        value={base}
        onChange={(e) => setBase(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Exponent"
        value={exponent}
        onChange={(e) => setExponent(e.target.value)}
        style={styles.input}
      />
      <button onClick={calculate} style={styles.button}>Calculate</button>
      {result !== null && (
        <div style={styles.result}>
          <strong>Result:</strong> {result}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
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
    width: '80%',
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

export default ExponentialFormulasCalculator;
