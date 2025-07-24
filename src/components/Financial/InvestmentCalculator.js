import React, { useState } from 'react';

const SalaryCalculator = () => {
  const [basic, setBasic] = useState('');
  const [hra, setHra] = useState('');
  const [da, setDa] = useState('');
  const [tax, setTax] = useState('');
  const [netSalary, setNetSalary] = useState(null);

  const calculateSalary = () => {
    const B = parseFloat(basic) || 0;
    const H = parseFloat(hra) || 0;
    const D = parseFloat(da) || 0;
    const T = parseFloat(tax) || 0;

    const gross = B + H + D;
    const net = gross - (gross * T) / 100;
    setNetSalary(net.toFixed(2));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Salary Calculator</h2>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Basic Salary:</label>
        <input
          type="number"
          value={basic}
          onChange={(e) => setBasic(e.target.value)}
          placeholder="Enter basic salary"
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>HRA:</label>
        <input
          type="number"
          value={hra}
          onChange={(e) => setHra(e.target.value)}
          placeholder="Enter HRA"
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>DA:</label>
        <input
          type="number"
          value={da}
          onChange={(e) => setDa(e.target.value)}
          placeholder="Enter DA"
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Tax (%):</label>
        <input
          type="number"
          value={tax}
          onChange={(e) => setTax(e.target.value)}
          placeholder="Enter tax percentage"
          style={styles.input}
        />
      </div>

      <button onClick={calculateSalary} style={styles.button}>
        Calculate Net Salary
      </button>

      {netSalary && (
        <div style={styles.result}>
          <strong>Net Salary:</strong> ₹ {netSalary}
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

export default SalaryCalculator;
