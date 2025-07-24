import React, { useState } from 'react';

const ComplexNumberCalculator = () => {
  const [real1, setReal1] = useState('');
  const [imag1, setImag1] = useState('');
  const [real2, setReal2] = useState('');
  const [imag2, setImag2] = useState('');
  const [result, setResult] = useState('');

  const parseNum = (val) => (val === '' ? 0 : parseFloat(val));

  const add = () => {
    const r = parseNum(real1) + parseNum(real2);
    const i = parseNum(imag1) + parseNum(imag2);
    setResult(`${r} + ${i}i`);
  };

  const subtract = () => {
    const r = parseNum(real1) - parseNum(real2);
    const i = parseNum(imag1) - parseNum(imag2);
    setResult(`${r} + ${i}i`);
  };

  const multiply = () => {
    const a = parseNum(real1);
    const b = parseNum(imag1);
    const c = parseNum(real2);
    const d = parseNum(imag2);
    const r = a * c - b * d;
    const i = a * d + b * c;
    setResult(`${r} + ${i}i`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Complex Number Calculator</h2>
      <div style={styles.inputGroup}>
        <label>First Complex Number:</label><br />
        <input
          type="number"
          placeholder="Real part"
          value={real1}
          onChange={(e) => setReal1(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Imaginary part"
          value={imag1}
          onChange={(e) => setImag1(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <label>Second Complex Number:</label><br />
        <input
          type="number"
          placeholder="Real part"
          value={real2}
          onChange={(e) => setReal2(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Imaginary part"
          value={imag2}
          onChange={(e) => setImag2(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.buttonGroup}>
        <button onClick={add} style={styles.button}>Add</button>
        <button onClick={subtract} style={styles.button}>Subtract</button>
        <button onClick={multiply} style={styles.button}>Multiply</button>
      </div>
      {result && <div style={styles.result}><strong>Result:</strong> {result}</div>}
    </div>
  );
};

const styles = {
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
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '45%',
    padding: '10px',
    margin: '5px 2%',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  buttonGroup: {
    marginBottom: '15px',
  },
  button: {
    padding: '10px 15px',
    margin: '0 5px',
    backgroundColor: '#0077cc',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  result: {
    color: '#333',
    fontWeight: 'bold',
  },
};

export default ComplexNumberCalculator;
