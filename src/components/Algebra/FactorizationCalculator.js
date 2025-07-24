import React, { useState } from 'react';

const FactorizationCalculator = () => {
  const [number, setNumber] = useState('');
  const [factors, setFactors] = useState([]);

  const primeFactors = (n) => {
    const result = [];
    let num = Math.abs(n);
    for (let i = 2; i <= num; i++) {
      while (num % i === 0) {
        result.push(i);
        num = num / i;
      }
    }
    return result;
  };

  const calculate = () => {
    const n = parseInt(number);
    if (isNaN(n) || n === 0) {
      setFactors(['Please enter a valid non-zero integer']);
      return;
    }
    if (Math.abs(n) === 1) {
      setFactors([n.toString()]);
      return;
    }
    setFactors(primeFactors(n));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Prime Factorization Calculator</h2>
      <input
        type="number"
        placeholder="Enter integer"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={styles.input}
      />
      <button onClick={calculate} style={styles.button}>Factorize</button>
      {factors.length > 0 && (
        <div style={styles.result}>
          <strong>Prime Factors:</strong> {factors.join(' × ')}
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

export default FactorizationCalculator;
