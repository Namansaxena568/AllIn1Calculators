import React, { useState } from 'react';

const units = {
  meter: 1,
  kilometer: 0.001,
  centimeter: 100,
  millimeter: 1000,
  inch: 39.3701,
  foot: 3.28084,
  yard: 1.09361,
  mile: 0.000621371,
};

const LengthConverter = () => {
  const [input, setInput] = useState('');
  const [fromUnit, setFromUnit] = useState('meter');
  const [toUnit, setToUnit] = useState('kilometer');
  const [result, setResult] = useState(null);

  const convert = () => {
    const meters = parseFloat(input) / units[fromUnit];
    const converted = meters * units[toUnit];
    setResult(converted.toFixed(4));
  };

  return (
    <div>
      <style>
        {`
          .converter-container {
            max-width: 400px;
            margin: 30px auto;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            text-align: center;
          }

          .converter-container h2 {
            margin-bottom: 20px;
            color: #333;
          }

          .converter-container input {
            width: 80%;
            padding: 10px;
            font-size: 16px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          .unit-select {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-bottom: 15px;
          }

          .unit-select select {
            padding: 8px;
            font-size: 14px;
          }

          button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #007bff;
            border: none;
            color: white;
            border-radius: 5px;
            cursor: pointer;
          }

          button:hover {
            background-color: #0056b3;
          }

          p {
            font-size: 18px;
            margin-top: 15px;
          }
        `}
      </style>

      <div className="converter-container">
        <h2>Length Converter</h2>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter length"
        />
        <div className="unit-select">
          <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
            {Object.keys(units).map((unit) => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
          <span>to</span>
          <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
            {Object.keys(units).map((unit) => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </div>
        <button onClick={convert}>Convert</button>
        {result && <p>Converted Length: <strong>{result} {toUnit}</strong></p>}
      </div>
    </div>
  );
};

export default LengthConverter;
