import React, { useState } from 'react';

const HourToMinuteSeconds = () => {
  const [hours, setHours] = useState('');
  const [result, setResult] = useState(null);

  const convertTime = () => {
    const h = parseFloat(hours);
    if (isNaN(h) || h < 0) {
      setResult(null);
      return;
    }
    const minutes = h * 60;
    const seconds = h * 3600;
    setResult({ minutes, seconds });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Hour to Minutes & Seconds</h2>
      <input
        type="number"
        placeholder="Enter hours"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        style={styles.input}
      />
      <button onClick={convertTime} style={styles.button}>Convert</button>
      {result && (
        <div style={styles.result}>
          <p><strong>{hours}</strong> hours is:</p>
          <p><strong>{result.minutes}</strong> minutes</p>
          <p><strong>{result.seconds}</strong> seconds</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '20px',
    textAlign: 'center',
    border: '2px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f7f7f7',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    marginBottom: '20px',
    color: '#333',
  },
  input: {
    padding: '10px',
    width: '80%',
    fontSize: '16px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '20px',
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '6px',
    boxShadow: '0 0 5px rgba(0,0,0,0.1)',
  },
};

export default HourToMinuteSeconds;
