import React, { useState } from 'react';

const AverageCalculator = () => {
  const [numbers, setNumbers] = useState('');
  const [average, setAverage] = useState(null);

  const calculate = () => {
    if (!numbers.trim()) {
      setAverage('Please enter numbers separated by commas.');
      return;
    }
    const arr = numbers.split(',').map((n) => parseFloat(n.trim())).filter(n => !isNaN(n));
    if (arr.length === 0) {
      setAverage('Please enter valid numbers.');
      return;
    }
    const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
    setAverage(avg.toFixed(4));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Average Calculator</h2>
      <input
        type="text"
        placeholder="Enter numbers separated by commas"
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
        style={styles.input}
      />
      <button onClick={calculate} style={styles.button}>Calculate</button>
      {average !== null && <div style={styles.result}><strong>Average:</strong> {average}</div>}
    </div>
  );
};

const styles =  {
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
    marginBottom: '12px',
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

export default AverageCalculator;
