import React, { useState } from 'react';

const HeightConverter = () => {
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [centimeters, setCentimeters] = useState('');

  const convertToCentimeters = () => {
    const ft = parseFloat(feet) || 0;
    const inch = parseFloat(inches) || 0;
    const totalInches = ft * 12 + inch;
    const cm = totalInches * 2.54;
    setCentimeters(cm.toFixed(2));
  };

  return (
    <div className="height-converter">
      <style>{`
        .height-converter {
          max-width: 400px;
          margin: 50px auto;
          padding: 30px;
          border-radius: 12px;
          background: linear-gradient(to bottom right, #e3f2fd, #ffffff);
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          font-family: 'Segoe UI', sans-serif;
          text-align: center;
        }

        h2 {
          margin-bottom: 20px;
          color: #0d47a1;
        }

        .form-group {
          margin-bottom: 15px;
          text-align: left;
        }

        label {
          display: block;
          margin-bottom: 5px;
          font-weight: 600;
        }

        input {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          border-radius: 6px;
          border: 1px solid #ccc;
          outline: none;
        }

        input:focus {
          border-color: #0d47a1;
        }

        button {
          margin-top: 15px;
          padding: 10px 25px;
          font-size: 16px;
          color: #fff;
          background-color: #0d47a1;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: 0.3s ease;
        }

        button:hover {
          background-color: #1565c0;
        }

        .result {
          margin-top: 20px;
          font-size: 18px;
          font-weight: bold;
          color: #1b5e20;
        }
      `}</style>

      <h2>Height Converter</h2>
      <div className="form-group">
        <label>Feet:</label>
        <input
          type="number"
          value={feet}
          onChange={(e) => setFeet(e.target.value)}
          placeholder="Enter feet"
        />
      </div>
      <div className="form-group">
        <label>Inches:</label>
        <input
          type="number"
          value={inches}
          onChange={(e) => setInches(e.target.value)}
          placeholder="Enter inches"
        />
      </div>
      <button onClick={convertToCentimeters}>Convert to Centimeters</button>

      {centimeters && (
        <div className="result">
          {feet} ft {inches} in = <br />
          <strong>{centimeters} cm</strong>
        </div>
      )}
    </div>
  );
};

export default HeightConverter;
