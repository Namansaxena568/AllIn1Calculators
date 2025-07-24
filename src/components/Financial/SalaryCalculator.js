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

  const styles = {
    container: {
      maxWidth: '450px',
      margin: '50px auto',
      padding: '30px',
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Segoe UI, sans-serif',
      color: '#333',
    },
    heading: {
      textAlign: 'center',
      fontSize: '24px',
      marginBottom: '20px',
      color: '#007bff',
      fontWeight: '600',
    },
    inputGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '6px',
      fontWeight: '500',
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '6px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#28a745',
      color: '#fff',
      fontSize: '16px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      marginTop: '10px',
      transition: 'background-color 0.3s',
    },
    result: {
      marginTop: '20px',
      textAlign: 'center',
      fontSize: '18px',
      color: '#333',
      fontWeight: '500',
    },
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

export default SalaryCalculator;
