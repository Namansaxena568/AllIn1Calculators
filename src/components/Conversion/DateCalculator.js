import React, { useState } from 'react';

const DateCalculator = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [duration, setDuration] = useState(null);

  const calculateDuration = () => {
    if (!startDate || !endDate) return;

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start > end) {
      setDuration('Start date must be before end date');
      return;
    }

    const diffInMs = Math.abs(end - start);
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInMonths = Math.floor(diffInDays / 30.44); // approx

    setDuration({
      days: diffInDays,
      weeks: diffInWeeks,
      months: diffInMonths,
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Date Duration Calculator</h2>

      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        style={styles.input}
      />

      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        style={styles.input}
      />

      <button onClick={calculateDuration} style={styles.button}>Calculate</button>

      {duration && typeof duration === 'object' && (
        <div style={styles.result}>
          <p><strong>{duration.days}</strong> days</p>
          <p><strong>{duration.weeks}</strong> weeks</p>
          <p><strong>{duration.months}</strong> months (approx.)</p>
        </div>
      )}

      {typeof duration === 'string' && (
        <p style={styles.error}>{duration}</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f8f8f8",
    textAlign: "center",
    fontFamily: "Arial",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
  },
  input: {
    width: "90%",
    padding: "10px",
    margin: "10px auto",
    display: "block",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  },
  result: {
    marginTop: "20px",
    fontWeight: "bold",
    color: "#222",
  },
  error: {
    marginTop: "15px",
    color: "red",
    fontWeight: "bold",
  },
};

export default DateCalculator;
