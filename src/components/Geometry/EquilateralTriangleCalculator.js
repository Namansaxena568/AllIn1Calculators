import React, { useState } from 'react';

const EquilateralTriangleCalculator = () => {
  const [side, setSide] = useState('');
  const [area, setArea] = useState(null);
  const [perimeter, setPerimeter] = useState(null);

  const calculate = () => {
    const s = parseFloat(side);
    if (!isNaN(s) && s > 0) {
      const areaValue = (Math.sqrt(3) / 4) * s * s;
      const perimeterValue = 3 * s;
      setArea(areaValue.toFixed(2));
      setPerimeter(perimeterValue.toFixed(2));
    } else {
      setArea(null);
      setPerimeter(null);
    }
  };

  return (
    <div className="container">
      <h2>Equilateral Triangle Calculator</h2>
      <input
        type="number"
        placeholder="Enter side length"
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
        .container {
          max-width: 400px;
          margin: 40px auto;
          padding: 20px;
          border: 2px solid #ddd;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          font-family: sans-serif;
          background: #f9f9f9;
          text-align: center;
        }
        input {
          width: 80%;
          padding: 10px;
          margin: 10px 0;
          font-size: 16px;
        }
        button {
          padding: 10px 20px;
          background-color: teal;
          color: white;
          border: none;
          cursor: pointer;
          border-radius: 4px;
          font-size: 16px;
        }
        button:hover {
          background-color: #006666;
        }
        .result {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default EquilateralTriangleCalculator;
