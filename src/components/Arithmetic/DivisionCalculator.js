import React, { useState } from 'react';

const DivisionCalculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult('Please enter valid numbers.');
      return;
    }
    if (b === 0) {
      setResult('Cannot divide by zero.');
      return;
    }
    setResult(a / b);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Division Calculator</h2>
      <input
        type="number"
        placeholder="Enter dividend"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Enter divisor"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={styles.input}
      />
      <button onClick={calculate} style={styles.button}>Calculate</button>
      {result !== null && <div style={styles.result}><strong>Result:</strong> {result}</div>}
    </div>
  );
};

const styles =  {
  container: {
    maxWidth: '400px',
    margin: '30px auto',
    padding: '20px',
    border: '2px solid #ddd',
    borderRadius: '10px',
    textAlign: 'center',
    background: '#f9f9f9',
    fontFamily: 'Arial',
  },
  heading: {
    marginBottom: '15px',
    color: '#333',
  },
  input: {
    width: '80%',
    padding: '10px',
    marginBottom: '12px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#0077cc',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '15px',
    color: '#333',
  },
};

export default DivisionCalculator;
