import React, { useState } from 'react';

const CalorieCalculator = () => {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState(1.2);
  const [calories, setCalories] = useState(null);
  const [error, setError] = useState('');

  const calculateCalories = () => {
    const a = parseFloat(age);
    const h = parseFloat(height);
    const w = parseFloat(weight);
    const act = activity;

    setError('');
    if (!a || !h || !w || !act) {
      setError('Please fill in all required fields.');
      setCalories(null);
      return;
    }

    let bmr;
    try {
      if (gender === 'male') {
        bmr = 10 * w + 6.25 * h - 5 * a + 5;
      } else {
        bmr = 10 * w + 6.25 * h - 5 * a - 161;
      }

      const result = bmr * act;

      if (isNaN(result) || result <= 0) {
        setError('Invalid values provided. Please check your inputs.');
        setCalories(null);
      } else {
        setCalories(result.toFixed(2));
      }
    } catch {
      setError('Calculation error. Please check input values.');
      setCalories(null);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Calorie Calculator</h2>

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

      <div style={styles.formGroup}>
        <label style={styles.label}>Age (years):</label>
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={styles.input}
        />
      </div>

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
        <label style={styles.label}>Weight (kg):</label>
        <input
          type="number"
          placeholder="Enter your weight in kg"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Activity Level:</label>
        <select
          value={activity}
          onChange={(e) => setActivity(parseFloat(e.target.value))}
          style={styles.input}
        >
          <option value="1.2">Sedentary (little/no exercise)</option>
          <option value="1.375">Lightly active (1-3 days/week)</option>
          <option value="1.55">Moderately active (3-5 days/week)</option>
          <option value="1.725">Very active (6-7 days/week)</option>
          <option value="1.9">Super active (twice/day training)</option>
        </select>
      </div>

      <button onClick={calculateCalories} style={styles.button}>
        Calculate
      </button>

      {error && <p style={styles.error}>{error}</p>}

      {calories && !error && (
        <div style={styles.result}>
          <strong>Estimated Calories:</strong> {calories} kcal/day
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
    color: '#333', // ✅ Added color to make it visible
    fontWeight: 'bold', // Optional
  },
};

export default CalorieCalculator;
