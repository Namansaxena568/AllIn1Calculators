import React, { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      setCategory(getBMICategory(bmiValue));
    }
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    else if (bmi >= 18.5 && bmi < 25) return 'Normal weight';
    else if (bmi >= 25 && bmi < 30) return 'Overweight';
    else return 'Obesity';
  };

  return (
    <div className="bmi-container">
      <h2>BMI Calculator</h2>
      <div className="input-group">
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <button onClick={calculateBMI}>Calculate BMI</button>
      </div>

      {bmi && (
        <div className="result">
          <p><strong>BMI:</strong> {bmi}</p>
          <p><strong>Category:</strong> {category}</p>
        </div>
      )}

      <style>{`
        .bmi-container {
          max-width: 400px;
          margin: 30px auto;
          padding: 20px;
          border-radius: 10px;
          background-color: #ffffff;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          font-family: Arial, sans-serif;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
        }

        input {
          padding: 10px;
          font-size: 16px;
        }

        button {
          padding: 10px;
          background-color: #007BFF;
          color: white;
          font-size: 16px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button:hover {
          background-color: #0056b3;
        }

        .result {
          background-color: #f5f5f5;
          padding: 15px;
          border-radius: 5px;
          color: #000; /* ✅ important fix */
        }
      `}</style>
    </div>
  );
};

export default BMICalculator;
