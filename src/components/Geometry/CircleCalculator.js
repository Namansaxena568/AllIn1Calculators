import React, { useState } from 'react';

const CircleCalculator = () => {
  const [radius, setRadius] = useState('');
  const [area, setArea] = useState(null);
  const [circumference, setCircumference] = useState(null);

  const calculate = () => {
    const r = parseFloat(radius);
    if (!isNaN(r)) {
      const a = Math.PI * r * r;
      const c = 2 * Math.PI * r;
      setArea(a.toFixed(2));
      setCircumference(c.toFixed(2));
    } else {
      setArea(null);
      setCircumference(null);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Circle Calculator</h2>
      <input
        type="number"
        placeholder="Enter radius"
        value={radius}
        onChange={(e) => setRadius(e.target.value)}
        style={styles.input}
      />
      <button onClick={calculate} style={styles.button}>
        Calculate
      </button>

      {area && circumference && (
        <div style={styles.result}>
          <p><strong>Area:</strong> {area} unit²</p>
          <p><strong>Circumference:</strong> {circumference} units</p>
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
    marginTop: '20px',
    color: '#333',
  },
};

export default CircleCalculator;
