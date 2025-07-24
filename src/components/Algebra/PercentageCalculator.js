import React, { useState } from 'react';

const PercentageCalculator = () => {
  const [original, setOriginal] = useState('');
  const [percentChange, setPercentChange] = useState('');
  const [newValue, setNewValue] = useState(null);

  const calculate = () => {
    const orig = parseFloat(original);
    const perc = parseFloat(percentChange);
    if (isNaN(orig) || isNaN(perc)) {
      setNewValue('Please enter valid numbers.');
      return;
    }
    const result = orig + (orig * perc) / 100;
    setNewValue(result.toFixed(2));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Percentage Calculator</h2>
      <input
        type="number"
        placeholder="Original Value"
        value={original}
        onChange={(e) => setOriginal(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Percentage Change (%)"
        value={percentChange}
        onChange={(e) => setPercentChange(e.target.value)}
        style={styles.input}
      />
      <button onClick={calculate} style={styles.button}>Calculate</button>
      {newValue !== null && (
        <div style={styles.result}>
          <strong>New Value:</strong> {newValue}
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

export default PercentageCalculator;
