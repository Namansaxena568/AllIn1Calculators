import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!birthDate) return;

    const birth = new Date(birthDate);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Age Calculator</h2>
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        style={styles.input}
      />
      <button onClick={calculateAge} style={styles.button}>Calculate Age</button>
      {age && (
        <div style={styles.result}>
          <p>
            You are <strong>{age.years}</strong> years,{' '}
            <strong>{age.months}</strong> months, and{' '}
            <strong>{age.days}</strong> days old.
          </p>
        </div>
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
};

export default AgeCalculator;
