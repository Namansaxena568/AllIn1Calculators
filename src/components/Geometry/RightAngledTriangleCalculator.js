import React, { useState } from 'react';

const RightAngledTriangleCalculator = () => {
  const [base, setBase] = useState('');
  const [height, setHeight] = useState('');
  const [hypotenuse, setHypotenuse] = useState(null);
  const [area, setArea] = useState(null);
  const [perimeter, setPerimeter] = useState(null);

  const calculate = () => {
    const b = parseFloat(base);
    const h = parseFloat(height);

    if (!isNaN(b) && !isNaN(h) && b > 0 && h > 0) {
      const hyp = Math.sqrt(b * b + h * h);
      const areaValue = 0.5 * b * h;
      const perimeterValue = b + h + hyp;

      setHypotenuse(hyp.toFixed(2));
      setArea(areaValue.toFixed(2));
      setPerimeter(perimeterValue.toFixed(2));
    } else {
      setHypotenuse(null);
      setArea(null);
      setPerimeter(null);
    }
  };

  return (
    <div className="triangle-container">
      <h2>Right-Angled Triangle Calculator</h2>
      <input
        type="number"
        placeholder="Enter base"
        value={base}
        onChange={(e) => setBase(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={calculate}>Calculate</button>

      {area && (
        <div className="result">
          <p><strong>Hypotenuse:</strong> {hypotenuse} units</p>
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

        .triangle-container {
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

export default RightAngledTriangleCalculator;
