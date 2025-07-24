import React, { useState } from "react";

const CurrencyCalculator = () => {
  const [amount, setAmount] = useState("");
  const [sourceCurrency, setSourceCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("INR");
  const [converted, setConverted] = useState(null);

  // Dummy exchange rates
  const exchangeRates = {
    USD: { INR: 83, EUR: 0.91 },
    INR: { USD: 0.012, EUR: 0.011 },
    EUR: { USD: 1.1, INR: 91.5 },
  };

  const handleConvert = () => {
    const amt = parseFloat(amount);
    if (isNaN(amt)) {
      alert("Please enter a valid amount.");
      return;
    }

    if (sourceCurrency === targetCurrency) {
      setConverted(amt.toFixed(2));
      return;
    }

    const rate = exchangeRates[sourceCurrency]?.[targetCurrency];
    if (!rate) {
      alert("Conversion not available.");
      return;
    }

    const result = amt * rate;
    setConverted(result.toFixed(2));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Currency Converter</h2>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={styles.input}
      />

      <div style={{ marginBottom: "10px" }}>
        <label>From: </label>
        <select
          value={sourceCurrency}
          onChange={(e) => setSourceCurrency(e.target.value)}
          style={styles.select}
        >
          <option>USD</option>
          <option>INR</option>
          <option>EUR</option>
        </select>
        <span style={{ margin: "0 10px" }}>→</span>
        <label>To: </label>
        <select
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value)}
          style={styles.select}
        >
          <option>USD</option>
          <option>INR</option>
          <option>EUR</option>
        </select>
      </div>

      <button onClick={handleConvert} style={styles.button}>
        Convert
      </button>

      {converted && (
        <div style={styles.result}>
          <p>
            Converted Amount: {converted} {targetCurrency}
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
  select: {
    padding: "8px",
    fontSize: "16px",
    margin: "0 5px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#ff9800",
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

export default CurrencyCalculator;
