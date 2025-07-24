import React, { useState } from 'react';

const InequalityCalculator = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [inequality, setInequality] = useState('<');
  const [solution, setSolution] = useState('');

  const calculate = () => {
    const A = parseFloat(a);
    const B = parseFloat(b);
    const C = parseFloat(c);

    if (isNaN(A) || isNaN(B) || isNaN(C)) {
      setSolution('Please enter valid numbers.');
      return;
    }

    let sol = '';
    switch (inequality) {
      case '<':
        sol = `x < ${(C - B) / A}`;
        break;
      case '<=':
        sol = `x ≤ ${(C - B) / A}`;
        break;
      case '>':
        sol = `x > ${(C - B) / A}`;
        break;
      case '>=':
        sol = `x ≥ ${(C - B) / A}`;
        break;
      case '=':
        sol = `x = ${(C - B) / A}`;
        break;
      default:
        sol = 'Invalid inequality.';
    }
    setSolution(sol);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Inequality Calculator</h2>
      <p>Calculate solution for inequality: <em>a*x + b {inequality} c</em></p>
      <input
        type="number"
        placeholder="Enter a"
        value={a}
        onChange={(e) => setA(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Enter b"
        value={b}
        onChange={(e) => setB(e.target.value)}
        style={styles.input}
      />
      <select value={inequality} onChange={(e) => setInequality(e.target.value)} style={styles.select}>
        <option value="<">&lt;</option>
        <option value="<=">&le;</option>
        <option value=">">&gt;</option>
        <option value=">=">&ge;</option>
        <option value="=">=</option>
      </select>
      <input
        type="number"
        placeholder="Enter c"
        value={c}
        onChange={(e) => setC(e.target.value)}
        style={styles.input}
      />
      <button onClick={calculate} style={styles.button}>Calculate</button>
      {solution && <div style={styles.result}><strong>Solution:</strong> {solution}</div>}
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
  input: {
    width: '80%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  select: {
    width: '84%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
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

export default InequalityCalculator;
