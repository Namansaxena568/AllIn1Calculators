import React, { useState } from 'react';

const RetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState('');
  const [retirementAge, setRetirementAge] = useState('');
  const [monthlySavings, setMonthlySavings] = useState('');
  const [expectedRate, setExpectedRate] = useState('');
  const [totalSavings, setTotalSavings] = useState(null);

  const calculateRetirementSavings = () => {
    const ageNow = parseInt(currentAge);
    const ageRetire = parseInt(retirementAge);
    const savings = parseFloat(monthlySavings);
    const rate = parseFloat(expectedRate) / 100 / 12;

    const months = (ageRetire - ageNow) * 12;

    let futureValue = 0;
    for (let i = 0; i < months; i++) {
      futureValue = (futureValue + savings) * (1 + rate);
    }

    setTotalSavings(futureValue.toFixed(2));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Retirement Calculator</h2>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Current Age:</label>
        <input
          type="number"
          value={currentAge}
          onChange={(e) => setCurrentAge(e.target.value)}
          placeholder="Enter current age"
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Retirement Age:</label>
        <input
          type="number"
          value={retirementAge}
          onChange={(e) => setRetirementAge(e.target.value)}
          placeholder="Enter retirement age"
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Monthly Savings (₹):</label>
        <input
          type="number"
          value={monthlySavings}
          onChange={(e) => setMonthlySavings(e.target.value)}
          placeholder="Enter monthly savings"
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Expected Annual Interest Rate (%):</label>
        <input
          type="number"
          value={expectedRate}
          onChange={(e) => setExpectedRate(e.target.value)}
          placeholder="Enter interest rate"
          style={styles.input}
        />
      </div>

      <button onClick={calculateRetirementSavings} style={styles.button}>
        Calculate
      </button>

      {totalSavings !== null && (
        <div style={styles.result}>
          <strong>Total Retirement Savings:</strong> ₹ {totalSavings}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '450px',
    margin: '40px auto',
    padding: '25px',
    border: '2px solid #ccc',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  heading: {
    fontSize: '22px',
    marginBottom: '20px',
    color: '#333',
  },
  inputGroup: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '20px',
    fontSize: '18px',
    color: '#000',
    backgroundColor: '#e6ffe6',
    padding: '10px',
    borderRadius: '5px',
  },
};

export default RetirementCalculator;
