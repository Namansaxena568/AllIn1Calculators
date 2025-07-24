import React, { useState } from 'react';

const IsoscelesTriangleCalculator = () => {
  const [base, setBase] = useState('');
  const [side, setSide] = useState('');
  const [area, setArea] = useState(null);
  const [perimeter, setPerimeter] = useState(null);

  const calculate = () => {
    const b = parseFloat(base);
    const s = parseFloat(side);

    if (!isNaN(b) && !isNaN(s) && b > 0 && s > 0) {
      const height = Math.sqrt(s * s - (b * b) / 4);
      const areaValue = (b * height) / 2;
      const perimeterValue = 2 * s + b;
      setArea(areaValue.toFixed(2));
      setPerimeter(perimeterValue.toFixed(2));
    } else {
      setArea(null);
      setPerimeter(null);
    }
  };

  return (
    <div className="iso-container">
      <h2>Isosceles Triangle Calculator</h2>
      <input
        type="number"
        placeholder="Enter base"
        value={base}
        onChange={(e) => setBase(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter equal side"
        value={side}
        onChange={(e) => setSide(e.target.value)}
      />
      <button onClick={calculate}>Calculate</button>

      {area && (
        <div className="result">
          <p><strong>Area:</strong> {area} square units</p>
          <p><strong>Perimeter:</strong> {perimeter} units</p>
        </div>
      )}

      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #9F44D3, #3C8CE7);
        }

        .iso-container {
          max-width: 500px;
          margin: 60px auto;
          padding: 30px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
          text-align: center;
          color: #fff;
        }

        h2 {
          margin-bottom: 25px;
          font-size: 26px;
          color: #fff;
        }

        input {
          width: 80%;
          padding: 12px;
          margin: 10px 0;
          border-radius: 8px;
          border: none;
          font-size: 16px;
          outline: none;
        }

        button {
          padding: 12px 25px;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          background-color: #00c6ff;
          color: white;
          cursor: pointer;
          transition: background 0.3s ease;
          margin-top: 10px;
        }

        button:hover {
          background-color: #0072ff;
        }

        .result {
          margin-top: 25px;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
};

export default IsoscelesTriangleCalculator;
