import React, { useState } from 'react';

const SalesTaxCalculator = () => {
  const [price, setPrice] = useState('');
  const [taxRate, setTaxRate] = useState('');
  const [totalPrice, setTotalPrice] = useState(null);

  const calculateTotalPrice = () => {
    if (price && taxRate) {
      const taxAmount = (parseFloat(price) * parseFloat(taxRate)) / 100;
      const total = parseFloat(price) + taxAmount;
      setTotalPrice(total.toFixed(2));
    } else {
      setTotalPrice(null);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Sales & Tax Calculator</h2>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter Price"
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Tax Rate (%):</label>
        <input
          type="number"
          value={taxRate}
          onChange={(e) => setTaxRate(e.target.value)}
          placeholder="Enter Tax Rate"
          style={styles.input}
        />
      </div>

      <button onClick={calculateTotalPrice} style={styles.button}>
        Calculate Total Price
      </button>

      {totalPrice && (
        <div style={styles.result}>
          <strong>Total Price with Tax:</strong> ₹ {totalPrice}
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
    backgroundColor: '#007bff',
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
    backgroundColor: '#e6f7ff',
    padding: '10px',
    borderRadius: '5px',
  },
};

export default SalesTaxCalculator;
