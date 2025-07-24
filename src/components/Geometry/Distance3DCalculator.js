import React, { useState } from 'react';

const ThreeDTriangleCalculator = () => {
  const [base, setBase] = useState('');
  const [height, setHeight] = useState('');
  const [area, setArea] = useState(null);

  const calculateArea = () => {
    const b = parseFloat(base);
    const h = parseFloat(height);
    if (!isNaN(b) && !isNaN(h) && b > 0 && h > 0) {
      const areaValue = 0.5 * b * h;
      setArea(areaValue.toFixed(2));
    } else {
      setArea(null);
    }
  };

  return (
    <div className="triangle-container">
      <h2>3D Triangle Area Calculator</h2>
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
      <button onClick={calculateArea}>Calculate</button>

      {area && (
        <div className="result">
          <p><strong>Area:</strong> {area} square units</p>
        </div>
      )}

      <style>{`
        body {
          margin: 0;
          padding: 0;
          background: linear-gradient(to right, #00c6ff, #0072ff);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .triangle-container {
          max-width: 420px;
          margin: 60px auto;
          padding: 30px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          text-align: center;
          color: #fff;
        }

        .triangle-container h2 {
          margin-bottom: 20px;
        }

        input {
          width: 90%;
          padding: 12px;
          margin: 12px 0;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          outline: none;
        }

        button {
          padding: 12px 28px;
          background-color: #1e90ff;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        button:hover {
          background-color: #005fbd;
          transform: scale(1.05);
        }

        .result {
          margin-top: 25px;
          background: rgba(255, 255, 255, 0.1);
          padding: 15px;
          border-radius: 10px;
          color: #fff;
        }

        @media (max-width: 500px) {
          .triangle-container {
            margin: 20px;
            padding: 20px;
          }

          button {
            width: 100%;
          }

          input {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ThreeDTriangleCalculator;
