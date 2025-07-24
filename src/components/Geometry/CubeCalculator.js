import React, { useState } from 'react';

const CubeCalculator = () => {
  const [side, setSide] = useState('');
  const [volume, setVolume] = useState(null);
  const [surfaceArea, setSurfaceArea] = useState(null);

  const calculate = () => {
    const s = parseFloat(side);

    if (!isNaN(s) && s > 0) {
      const v = Math.pow(s, 3);
      const sa = 6 * Math.pow(s, 2);

      setVolume(v.toFixed(2));
      setSurfaceArea(sa.toFixed(2));
    } else {
      setVolume(null);
      setSurfaceArea(null);
    }
  };

  return (
    <div className="container">
      <h2>Cube Calculator</h2>
      <input
        type="number"
        placeholder="Enter side length"
        value={side}
        onChange={(e) => setSide(e.target.value)}
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
          max-width: 450px;
          margin: 40px auto;
          padding: 20px;
          border: 2px solid #ddd;
          border-radius: 10px;
          background-color: #f0f8ff;
          font-family: Arial, sans-serif;
          text-align: center;
          box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
        }
        input {
          width: 80%;
          padding: 10px;
          margin: 12px 0;
          font-size: 16px;
          border-radius: 5px;
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
          margin-top: 10px;
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

export default CubeCalculator;
