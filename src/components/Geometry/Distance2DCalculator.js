import React, { useState } from 'react';

const Distance2DCalculator = () => {
  const [x1, setX1] = useState('');
  const [y1, setY1] = useState('');
  const [x2, setX2] = useState('');
  const [y2, setY2] = useState('');
  const [distance, setDistance] = useState(null);

  const calculateDistance = () => {
    const dx = parseFloat(x2) - parseFloat(x1);
    const dy = parseFloat(y2) - parseFloat(y1);
    const result = Math.sqrt(dx * dx + dy * dy);
    setDistance(result.toFixed(2));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>2D Distance Calculator</h2>
      <div style={styles.inputGroup}>
        <input
          type="number"
          placeholder="x1"
          value={x1}
          onChange={(e) => setX1(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="y1"
          value={y1}
          onChange={(e) => setY1(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="x2"
          value={x2}
          onChange={(e) => setX2(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="y2"
          value={y2}
          onChange={(e) => setY2(e.target.value)}
          style={styles.input}
        />
        <button onClick={calculateDistance} style={styles.button}>
          Calculate
        </button>
      </div>
      {distance !== null && (
        <div style={styles.result}>Distance: {distance} units</div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '30px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '12px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',
    color: '#333',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '15px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #aaa',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  result: {
    fontSize: '18px',
    color: '#222',
    fontWeight: 'bold',
    marginTop: '10px',
  },
};

export default Distance2DCalculator;
