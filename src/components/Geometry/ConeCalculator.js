import React, { useState } from 'react';

const ConeCalculator = () => {
  const [radius, setRadius] = useState('');
  const [height, setHeight] = useState('');
  const [volume, setVolume] = useState(null);
  const [surfaceArea, setSurfaceArea] = useState(null);

  const calculate = () => {
    const r = parseFloat(radius);
    const h = parseFloat(height);

    if (!isNaN(r) && !isNaN(h) && r > 0 && h > 0) {
      const l = Math.sqrt(r * r + h * h); // slant height
      const v = (1 / 3) * Math.PI * r * r * h;
      const sa = Math.PI * r * (r + l);

      setVolume(v.toFixed(2));
      setSurfaceArea(sa.toFixed(2));
    } else {
      setVolume(null);
      setSurfaceArea(null);
    }
  };

  return (
    <div className="calculator-container">
      <h2>Cone Calculator</h2>
      <input
        type="number"
        placeholder="Enter radius"
        value={radius}
        onChange={(e) => setRadius(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={calculate}>Calculate</button>

      {volume && (
        <div className="result">
          <p><strong>Volume:</strong> {volume} cubic units</p>
          <p><strong>Surface Area:</strong> {surfaceArea} square units</p>
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

export default ConeCalculator;
