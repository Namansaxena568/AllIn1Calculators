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
    <div className="container">
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
        .container {
          max-width: 450px;
          margin: 40px auto;
          padding: 20px;
          border: 2px solid #ddd;
          border-radius: 10px;
          background-color: #f9f9f9;
          font-family: Arial, sans-serif;
          text-align: center;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
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
          border-radius: 5px;
          cursor: pointer;
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

export default IsoscelesTriangleCalculator;
