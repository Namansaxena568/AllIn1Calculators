import React, { useState } from 'react';

const CircleCalculator = () => {
  const [radius, setRadius] = useState('');
  const [area, setArea] = useState(null);
  const [circumference, setCircumference] = useState(null);

  const calculate = () => {
    const r = parseFloat(radius);
    if (!isNaN(r) && r > 0) {
      const areaResult = Math.PI * r * r;
      const circumferenceResult = 2 * Math.PI * r;

      setArea(areaResult.toFixed(2));
      setCircumference(circumferenceResult.toFixed(2));
    } else {
      setArea(null);
      setCircumference(null);
    }
  };

  return (
    <div className="calculator-container">
      <h2>Circle Calculator</h2>
      <input
        type="number"
        placeholder="Enter radius"
        value={radius}
        onChange={(e) => setRadius(e.target.value)}
      />
      <button onClick={calculate}>Calculate</button>

      {area && (
        <div className="result">
          <p><strong>Area:</strong> {area} square units</p>
          <p><strong>Circumference:</strong> {circumference} units</p>
        </div>
      )}

      <style>{`
        body {
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #1e3c72, #2a5298);
          font-family: 'Segoe UI', sans-serif;
        }

        .calculator-container {
          max-width: 450px;
          margin: 50px auto;
          padding: 30px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: white;
          text-align: center;
        }

        h2 {
          margin-bottom: 25px;
          font-size: 28px;
        }

        input {
          width: 80%;
          padding: 12px;
          font-size: 16px;
          border: none;
          border-radius: 10px;
          margin-bottom: 20px;
          outline: none;
        }

        button {
          padding: 12px 25px;
          background-color: #00c9ff;
          border: none;
          color: #fff;
          font-size: 16px;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        button:hover {
          background-color: #007acc;
        }

        .result {
          margin-top: 25px;
          font-size: 18px;
        }

        .result p {
          margin: 8px 0;
        }
      `}</style>
    </div>
  );
};

export default CircleCalculator;
