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
    <div className="container">
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
        .container {
          max-width: 480px;
          margin: 40px auto;
          padding: 20px;
          border: 2px solid #ccc;
          border-radius: 12px;
          background-color: #e8f4fc;
          font-family: Arial, sans-serif;
          text-align: center;
          box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
        }
        input {
          width: 80%;
          padding: 10px;
          margin: 10px 0;
          font-size: 16px;
          border-radius: 6px;
          border: 1px solid #aaa;
        }
        button {
          padding: 10px 20px;
          background-color: #0074cc;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
        }
        button:hover {
          background-color: #005fa3;
        }
        .result {
          margin-top: 20px;
          font-size: 17px;
        }
      `}</style>
    </div>
  );
};

export default ConeCalculator;
