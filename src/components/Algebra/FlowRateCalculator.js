import React, { useState } from 'react';

const FlowRateCalculator = () => {
  const [diameter, setDiameter] = useState('');
  const [velocity, setVelocity] = useState('');
  const [flowRate, setFlowRate] = useState(null);

  const calculate = () => {
    const d = parseFloat(diameter);
    const v = parseFloat(velocity);
    if (isNaN(d) || isNaN(v) || d <= 0) {
      setFlowRate('Please enter valid positive numbers.');
      return;
    }
    // Flow rate Q = A * v, area A = π * (d/2)^2
    const area = Math.PI * (d / 2) ** 2;
    const Q = area * v;
    setFlowRate(Q.toFixed(4));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Flow Rate Calculator</h2>
      <input
        type="number"
        placeholder="Pipe Diameter (units)"
        value={diameter}
        onChange={(e) => setDiameter(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Velocity (units/time)"
        value={velocity}
        onChange={(e) => setVelocity(e.target.value)}
        style={styles.input}
      />
      <button onClick={calculate} style={styles.button}>Calculate</button>
      {flowRate !== null && (
        <div style={styles.result}>
          <strong>Flow Rate:</strong> {flowRate} unit³/time
        </div>
      )}
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

export default FlowRateCalculator;
