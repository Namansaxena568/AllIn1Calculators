import React, { useState } from 'react';

const SphereCalculator = () => {
  const [radius, setRadius] = useState('');
  const [surfaceArea, setSurfaceArea] = useState(null);
  const [volume, setVolume] = useState(null);

  const calculate = () => {
    const r = parseFloat(radius);
    if (!isNaN(r)) {
      const sa = 4 * Math.PI * r * r; // Surface Area
      const vol = (4 / 3) * Math.PI * r * r * r; // Volume
      setSurfaceArea(sa.toFixed(2));
      setVolume(vol.toFixed(2));
    } else {
      setSurfaceArea(null);
      setVolume(null);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Sphere Calculator</h2>
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

      {surfaceArea && volume && (
        <div style={styles.result}>
          <p><strong>Surface Area:</strong> {surfaceArea} unit²</p>
          <p><strong>Volume:</strong> {volume} unit³</p>
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

export default SphereCalculator;
