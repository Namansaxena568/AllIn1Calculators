import React, { useState } from 'react';

const SquareCalculator = () => {
  const [side, setSide] = useState('');
  const [area, setArea] = useState(null);
  const [perimeter, setPerimeter] = useState(null);

  const calculate = () => {
    const s = parseFloat(side);
    if (!isNaN(s)) {
      setArea((s * s).toFixed(2));
      setPerimeter((4 * s).toFixed(2));
    } else {
      setArea(null);
      setPerimeter(null);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Square Calculator</h2>
      <input
        type="number"
        placeholder="Enter side length"
        value={side}
        onChange={(e) => setSide(e.target.value)}
        style={styles.input}
      />
      <button onClick={calculate} style={styles.button}>
        Calculate
      </button>

      {area && perimeter && (
        <div style={styles.result}>
          <p><strong>Area:</strong> {area} unit²</p>
          <p><strong>Perimeter:</strong> {perimeter} unit</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '2px solid #ddd',
    borderRadius: '10px',
    textAlign: 'center',
    background: '#f9f9f9',
    fontFamily: 'Arial',
  },
  heading: {
    marginBottom: '20px',
    color: '#444',
  },
  input: {
    width: '80%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '20px',
    color: '#333',
  },
};

export default SquareCalculator;
