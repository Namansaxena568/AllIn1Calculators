import React, { useState } from 'react';

const CylinderCalculator = () => {
  const [radius, setRadius] = useState('');
  const [height, setHeight] = useState('');
  const [surfaceArea, setSurfaceArea] = useState(null);
  const [volume, setVolume] = useState(null);

  const calculate = () => {
    const r = parseFloat(radius);
    const h = parseFloat(height);
    if (!isNaN(r) && !isNaN(h)) {
      const sa = 2 * Math.PI * r * (r + h);
      const vol = Math.PI * r * r * h;
      setSurfaceArea(sa.toFixed(2));
      setVolume(vol.toFixed(2));
    } else {
      setSurfaceArea(null);
      setVolume(null);
    }
  };

  return (
    <div className="main-wrapper">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body, html {
          font-family: 'Arial', sans-serif;
        }
        .main-wrapper {
          min-height: 100vh;
          background: linear-gradient(135deg, #00b4db, #0083b0);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .calc-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 16px;
          padding: 30px 40px;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          width: 100%;
          max-width: 420px;
          color: #fff;
          text-align: center;
        }
        .calc-card h2 {
          margin-bottom: 25px;
          font-size: 26px;
          font-weight: bold;
        }
        .calc-card input {
          width: 90%;
          padding: 12px;
          margin-bottom: 15px;
          border-radius: 8px;
          border: none;
          font-size: 16px;
          outline: none;
        }
        .calc-card button {
          padding: 12px 24px;
          background-color: #ffffff;
          color: #0083b0;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
          font-size: 16px;
          transition: 0.3s ease;
        }
        .calc-card button:hover {
          background-color: #e6e6e6;
        }
        .calc-card .result {
          margin-top: 25px;
          font-size: 18px;
        }
      `}</style>

      <div className="calc-card">
        <h2>Cylinder Calculator</h2>
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

        {surfaceArea && volume && (
          <div className="result">
            <p><strong>Surface Area:</strong> {surfaceArea} unit²</p>
            <p><strong>Volume:</strong> {volume} unit³</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CylinderCalculator;
