import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    let charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (!charset) {
      setPassword('Select at least one option!');
      return;
    }

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Password Generator</h2>

      <label style={styles.label}>
        Length:
        <input
          type="number"
          min="4"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          style={styles.input}
        />
      </label>

      <label style={styles.checkboxLabel}>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(!includeUppercase)}
        />
        Include Uppercase
      </label>

      <label style={styles.checkboxLabel}>
        <input
          type="checkbox"
          checked={includeLowercase}
          onChange={() => setIncludeLowercase(!includeLowercase)}
        />
        Include Lowercase
      </label>

      <label style={styles.checkboxLabel}>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />
        Include Numbers
      </label>

      <label style={styles.checkboxLabel}>
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={() => setIncludeSymbols(!includeSymbols)}
        />
        Include Symbols
      </label>

      <button onClick={generatePassword} style={styles.button}>
        Generate Password
      </button>

      <div style={styles.output}>
        <strong>Password:</strong> <span>{password}</span>
      </div>
    </div>
  );
};

// ✅ Internal CSS styles
const styles = {
  container: {
    maxWidth: '400px',
    margin: '30px auto',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '10px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  },
  label: {
    display: 'block',
    marginBottom: '10px',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    marginLeft: '10px',
    padding: '5px',
    width: '60px',
    textAlign: 'center',
  },
  checkboxLabel: {
    display: 'block',
    margin: '8px 0',
    fontSize: '16px',
    color: '#333', // ✅ FIX: make checkbox labels visible
  },
  button: {
    marginTop: '15px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  output: {
    marginTop: '20px',
    fontSize: '16px',
    backgroundColor: '#fff',
    padding: '10px',
    border: '1px dashed #666',
    borderRadius: '5px',
    wordBreak: 'break-word',
  },
};

export default PasswordGenerator;
