import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`Logging in with ${username} and ${password}`);
  };

  return (
    <div className="app-container">
      <div className="login-box">
        <h1 className="logo">Instagram</h1>
        <input
          type="text"
          placeholder="Username or email"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>
          Log In
        </button>
        <div className="divider">
          <div className="line"></div>
          <span>OR</span>
          <div className="line"></div>
        </div>
        <p className="forgot-link">Forgot password?</p>
      </div>
    </div>
  );
}

export default App;