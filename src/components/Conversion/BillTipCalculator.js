import React, { useState } from 'react';

const BillTipCalculator = () => {
  const [bill, setBill] = useState('');
  const [tipPercent, setTipPercent] = useState('');
  const [tipAmount, setTipAmount] = useState(null);
  const [total, setTotal] = useState(null);

  const calculateTip = () => {
    const billValue = parseFloat(bill);
    const tipValue = parseFloat(tipPercent);

    if (!isNaN(billValue) && !isNaN(tipValue)) {
      const tip = (billValue * tipValue) / 100;
      setTipAmount(tip.toFixed(2));
      setTotal((billValue + tip).toFixed(2));
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Bill & Tip Calculator</h2>
      <div style={styles.formGroup}>
        <label style={styles.label}>Bill Amount</label>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Tip Percentage (%)</label>
        <input
          type="number"
          value={tipPercent}
          onChange={(e) => setTipPercent(e.target.value)}
          style={styles.input}
        />
      </div>
      <button onClick={calculateTip} style={styles.button}>
        Calculate
      </button>

      {tipAmount && total && (
        <div style={styles.result}>
          <p>Tip Amount: ₹{tipAmount}</p>
          <p>Total Bill: ₹{total}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '25px',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',
    color: '#333',
    fontSize: '24px',
  },
  formGroup: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    fontWeight: '600',
    marginBottom: '5px',
    color: '#444',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '16px',
  },
  button: {
    marginTop: '15px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '6px',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '20px',
    fontSize: '18px',
    color: '#222',
  },
};

export default BillTipCalculator;
