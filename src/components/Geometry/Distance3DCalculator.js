import React, { useState } from "react";

export default function Distance3DCalculator() {
  const [point1, setPoint1] = useState({ x: "", y: "", z: "" });
  const [point2, setPoint2] = useState({ x: "", y: "", z: "" });
  const [distance, setDistance] = useState(null);

  const calculateDistance = () => {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    const dz = point2.z - point1.z;
    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
    setDistance(dist.toFixed(2));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>3D Distance Calculator</h2>
      <div style={styles.inputGroup}>
        <h4>Point 1:</h4>
        <input
          type="number"
          placeholder="x1"
          value={point1.x}
          onChange={(e) => setPoint1({ ...point1, x: parseFloat(e.target.value) })}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="y1"
          value={point1.y}
          onChange={(e) => setPoint1({ ...point1, y: parseFloat(e.target.value) })}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="z1"
          value={point1.z}
          onChange={(e) => setPoint1({ ...point1, z: parseFloat(e.target.value) })}
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <h4>Point 2:</h4>
        <input
          type="number"
          placeholder="x2"
          value={point2.x}
          onChange={(e) => setPoint2({ ...point2, x: parseFloat(e.target.value) })}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="y2"
          value={point2.y}
          onChange={(e) => setPoint2({ ...point2, y: parseFloat(e.target.value) })}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="z2"
          value={point2.z}
          onChange={(e) => setPoint2({ ...point2, z: parseFloat(e.target.value) })}
          style={styles.input}
        />
      </div>

      <button onClick={calculateDistance} style={styles.button}>
        Calculate Distance
      </button>

      {distance !== null && <p style={styles.result}>Distance: {distance}</p>}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "30px auto",
    padding: "20px",
    border: "2px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  input: {
    margin: "5px",
    padding: "8px",
    width: "70px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #888",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  },
  result: {
    marginTop: "20px",
    fontSize: "20px",
    color: "#222",
    fontWeight: "bold",
  },
};
