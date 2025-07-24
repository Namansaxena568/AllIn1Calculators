import React, { useState } from 'react';

const ImpulseCalculator = () => {
  const [force, setForce] = useState('');
  const [time, setTime] = useState('');
  const [impulse, setImpulse] = useState(null);

  const calculate = () => {
    const F = parseFloat(force);
    const t = parseFloat(time);
    if (isNaN(F) || isNaN(t)) {
      setImpulse('Please enter valid numbers.');
      return;
    }
    const I = F * t;
    setImpulse(I.toFixed(4));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Impulse Calculator</h2>
      <input
        type="number"
        placeholder="Force (N)"
        value={force}
        onChange={(e) => setForce(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Time (s)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        style={styles.input}
      />
      <button onClick={calculate} style={styles.button}>Calculate</button>
      {impulse !== null && (
        <div style={styles.result}>
          <strong>Impulse:</strong> {impulse} N·s
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

export default ImpulseCalculator;
