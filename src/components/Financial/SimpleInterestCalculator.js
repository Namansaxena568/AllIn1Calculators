import React, { useState } from "react";

const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState(null);

  const calculateSimpleInterest = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate);
    const T = parseFloat(time);

    if (isNaN(P) || isNaN(R) || isNaN(T)) {
      alert("Please fill all fields correctly.");
      return;
    }

    const SI = (P * R * T) / 100;
    const total = P + SI;

    setResult({
      simpleInterest: SI.toFixed(2),
      totalAmount: total.toFixed(2),
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Simple Interest Calculator</h2>
      <input
        type="number"
        placeholder="Principal"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Rate (%)"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Time (years)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        style={styles.input}
      />
      <button onClick={calculateSimpleInterest} style={styles.button}>
        Calculate
      </button>

      {result && (
        <div style={styles.result}>
          <p>Simple Interest: ₹{result.simpleInterest}</p>
          <p>Total Amount: ₹{result.totalAmount}</p>
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

export default SimpleInterestCalculator;
