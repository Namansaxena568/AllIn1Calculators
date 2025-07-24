import React, { useState } from 'react';

const GPACalculator = () => {
  const [courses, setCourses] = useState([{ grade: '', credits: '' }]);
  const [gpa, setGpa] = useState(null);

  const handleChange = (index, field, value) => {
    const newCourses = [...courses];
    newCourses[index][field] = value;
    setCourses(newCourses);
  };

  const addCourse = () => {
    setCourses([...courses, { grade: '', credits: '' }]);
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach(({ grade, credits }) => {
      const credit = parseFloat(credits);
      const point = convertGradeToPoint(grade.toUpperCase());

      if (!isNaN(point) && !isNaN(credit)) {
        totalPoints += point * credit;
        totalCredits += credit;
      }
    });

    if (totalCredits === 0) {
      setGpa('Please enter valid data');
    } else {
      setGpa((totalPoints / totalCredits).toFixed(2));
    }
  };

  const convertGradeToPoint = (grade) => {
    const scale = {
      A: 4.0,
      B: 3.0,
      C: 2.0,
      D: 1.0,
      F: 0.0
    };
    return scale[grade] !== undefined ? scale[grade] : NaN;
  };

  return (
    <div className="gpa-calculator">
      <style>{`
        .gpa-calculator {
          max-width: 500px;
          margin: 30px auto;
          padding: 25px;
          border: 2px solid #28a745;
          border-radius: 12px;
          background-color: #f9f9f9;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          font-family: Arial, sans-serif;
        }
        .gpa-calculator h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #28a745;
        }
        .course-row {
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
        }
        .course-row input {
          flex: 1;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        button {
          padding: 8px 16px;
          margin: 5px;
          border: none;
          border-radius: 5px;
          background-color: #28a745;
          color: white;
          cursor: pointer;
        }
        button:hover {
          background-color: #218838;
        }
        .gpa-result {
          margin-top: 20px;
          text-align: center;
        }
        .gpa-result p {
          font-size: 18px;
          font-weight: bold;
        }
        .error {
          color: red;
        }
      `}</style>

      <h2>GPA Calculator</h2>

      {courses.map((course, index) => (
        <div className="course-row" key={index}>
          <input
            type="text"
            placeholder="Grade (A-F)"
            value={course.grade}
            onChange={(e) => handleChange(index, 'grade', e.target.value)}
          />
          <input
            type="number"
            placeholder="Credits"
            value={course.credits}
            onChange={(e) => handleChange(index, 'credits', e.target.value)}
          />
        </div>
      ))}

      <button onClick={addCourse}>Add Course</button>
      <button onClick={calculateGPA}>Calculate GPA</button>

      {gpa && (
        <div className="gpa-result">
          {isNaN(gpa) ? (
            <p className="error">{gpa}</p>
          ) : (
            <p>Your GPA: <strong>{gpa}</strong></p>
          )}
        </div>
      )}
    </div>
  );
};

export default GPACalculator;
