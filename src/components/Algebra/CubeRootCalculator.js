import React, { useState } from 'react';

const CubeRootCalculator = () => {
  const [number, setNumber] = useState('');
  const [cubeRoot, setCubeRoot] = useState(null);

  const calculate = () => {
    const n = parseFloat(number);
    if (isNaN(n)) {
      setCubeRoot('Please enter a valid number.');
      return;
    }
    setCubeRoot(Math.cbrt(n).toFixed(4));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Cube Root Calculator</h2>
      <input
        type="number"
        placeholder="Enter number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={styles.input}
      />
      <button onClick={calculate} style={styles.button}>Calculate</button>
      {cubeRoot !== null && (
        <div style={styles.result}>
          <strong>Cube Root:</strong> {cubeRoot}
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

export default CubeRootCalculator;
