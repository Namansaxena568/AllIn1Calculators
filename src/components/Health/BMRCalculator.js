import React, { useState } from 'react';

const BMRCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [bmr, setBmr] = useState(null);

  const calculateBMR = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (!w || !h || !a || w <= 0 || h <= 0 || a <= 0) return;

    let result;
    if (gender === 'male') {
      result = 88.36 + (13.4 * w) + (4.8 * h) - (5.7 * a);
    } else {
      result = 447.6 + (9.2 * w) + (3.1 * h) - (4.3 * a);
    }

    setBmr(result.toFixed(2));
  };

  return (
    <div style={styles.container}>
      <h2>BMR Calculator</h2>
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Age (years)"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        style={styles.input}
      />
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        style={styles.input}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button onClick={calculateBMR} style={styles.button}>Calculate BMR</button>

      {bmr && (
        <div style={styles.result}>
          <p><strong>BMR:</strong> {bmr} calories/day</p>
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
    border: '1px solid #ccc',
    borderRadius: '10px',
    textAlign: 'center',
    fontFamily: 'Arial',
    backgroundColor: '#fff',
  },
  input: {
    display: 'block',
    width: '90%',
    margin: '10px auto',
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    marginTop: '10px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
  result: {
    marginTop: '20px',
    backgroundColor: '#f5f5f5',
    padding: '15px',
    borderRadius: '5px',
    color: '#000', // ✅ Ensures text is visible
  }
};

export default BMRCalculator;
