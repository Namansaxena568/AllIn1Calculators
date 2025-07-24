import React, { useState } from 'react';

const BodyFatCalculator = () => {
  const [gender, setGender] = useState('male');
  const [waist, setWaist] = useState('');
  const [neck, setNeck] = useState('');
  const [hip, setHip] = useState('');
  const [height, setHeight] = useState('');
  const [bodyFat, setBodyFat] = useState(null);
  const [error, setError] = useState('');

  const calculateBodyFat = () => {
    const w = parseFloat(waist);
    const n = parseFloat(neck);
    const h = parseFloat(height);
    const hi = parseFloat(hip);

    setError('');
    if (!w || !n || !h || (gender === 'female' && !hi)) {
      setError('Please fill in all required fields.');
      setBodyFat(null);
      return;
    }

    let bf = 0;
    try {
      if (gender === 'male') {
        bf = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
      } else {
        bf = 495 / (1.29579 - 0.35004 * Math.log10(w + hi - n) + 0.221 * Math.log10(h)) - 450;
      }

      if (isNaN(bf) || bf < 0 || bf > 100) {
        setError('Invalid values provided. Please check your measurements.');
        setBodyFat(null);
      } else {
        setBodyFat(bf.toFixed(2));
      }
    } catch (err) {
      setError('Calculation error. Please check input values.');
      setBodyFat(null);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Body Fat Calculator</h2>

      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        style={styles.input}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <input
        type="number"
        placeholder="Waist (cm)"
        value={waist}
        onChange={(e) => setWaist(e.target.value)}
        style={styles.input}
      />

      <input
        type="number"
        placeholder="Neck (cm)"
        value={neck}
        onChange={(e) => setNeck(e.target.value)}
        style={styles.input}
      />

      {gender === 'female' && (
        <input
          type="number"
          placeholder="Hip (cm)"
          value={hip}
          onChange={(e) => setHip(e.target.value)}
          style={styles.input}
        />
      )}

      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        style={styles.input}
      />

      <button onClick={calculateBodyFat} style={styles.button}>
        Calculate
      </button>

      {error && <p style={styles.error}>{error}</p>}

      {bodyFat !== null && !error && (
        <div style={styles.result}>
          <p><strong>Estimated Body Fat:</strong> {bodyFat}%</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '30px',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '25px',
    color: '#333',
  },
  input: {
    width: '90%',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '12px',
    border: '1px solid #ccc',
    borderRadius: '6px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 25px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  error: {
    color: 'red',
    marginTop: '15px',
    fontWeight: '500',
  },
  result: {
    marginTop: '25px',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '8px',
    fontSize: '18px',
    color: '#333',
  },
};

export default BodyFatCalculator;
