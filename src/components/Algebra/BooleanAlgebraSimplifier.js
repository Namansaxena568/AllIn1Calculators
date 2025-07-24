import React, { useState } from 'react';

const BooleanAlgebraSimplifier = () => {
  const [expression, setExpression] = useState('');
  const [simplified, setSimplified] = useState('');

  // VERY BASIC simplifier example: replaces "A & A" with "A", "A | A" with "A"
  // For real simplification, external libraries needed (like logic-solver)
  const simplify = () => {
    if (!expression.trim()) {
      setSimplified('Please enter a Boolean expression.');
      return;
    }

    let expr = expression;
    expr = expr.replace(/\b([A-Za-z]+)\s*&\s*\1\b/g, '$1'); // A & A => A
    expr = expr.replace(/\b([A-Za-z]+)\s*\|\s*\1\b/g, '$1'); // A | A => A
    expr = expr.replace(/!!/g, ''); // double negation
    setSimplified(expr);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Boolean Algebra Simplifier</h2>
      <input
        type="text"
        placeholder="Enter Boolean expression (e.g. A & B | !A)"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
        style={styles.input}
      />
      <button onClick={simplify} style={styles.button}>Simplify</button>
      {simplified && <div style={styles.result}><strong>Simplified:</strong> {simplified}</div>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '450px',
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
    width: '90%',
    padding: '10px',
    marginBottom: '15px',
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

export default BooleanAlgebraSimplifier;
