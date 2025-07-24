import React, { useState } from 'react';

const IdealWeightCalculator = () => {
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male');
  const [idealWeight, setIdealWeight] = useState(null);
  const [error, setError] = useState('');

  const calculateIdealWeight = () => {
    const h = parseFloat(height);
    setError('');

    if (!h || h <= 0) {
      setError('Please enter a valid height.');
      setIdealWeight(null);
      return;
    }

    const heightInInches = h / 2.54;
    const base = gender === 'male' ? 50 : 45.5;
    const ideal = heightInInches > 60 ? base + 2.3 * (heightInInches - 60) : base;

    setIdealWeight(ideal.toFixed(2));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Ideal Weight Calculator</h2>

      <div style={styles.formGroup}>
        <label style={styles.label}>Height (cm):</label>
        <input
          type="number"
          placeholder="Enter your height in cm"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Gender:</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          style={styles.input}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <button onClick={calculateIdealWeight} style={styles.button}>
        Calculate
      </button>

      {error && <p style={styles.error}>{error}</p>}

      {idealWeight && !error && (
        <div style={styles.result}>
          <strong>Your Ideal Weight:</strong> {idealWeight} kg
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    fontFamily: 'Arial',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: '22px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    fontSize: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    marginTop: '15px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
  error: {
    marginTop: '15px',
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  result: {
    marginTop: '20px',
    backgroundColor: '#f2f2f2',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    fontSize: '16px',
    color: '#333',
    fontWeight: 'bold',
  },
};

export default IdealWeightCalculator;
