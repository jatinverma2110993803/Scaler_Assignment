import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'; // Import Redirect
import chitkaraLogo from './chitkara-logo.png'; // Import the logo image

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your authentication logic
    // For now, let's assume login is successful and redirect to MentorDashboard
    setLoggedIn(true);
  };

  if (loggedIn) {
    // Redirect to MentorDashboard if logged in
    return <Redirect to="/mentordashboard" />;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f0f0f0' }}>
      <div style={{ background: '#fff', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
        <img src={chitkaraLogo} alt="Chitkara University Logo" style={{ width: '100px', marginBottom: '20px', marginTop: '20px' }} />
        <h2 style={{ marginBottom: '20px', color: '#333' }}>Chitkara University</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box', fontSize: '16px' }}
              required
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box', fontSize: '16px' }}
              required
            />
          </div>
          <div>
            <input
              type="submit"
              value="Login"
              style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', transition: 'background-color 0.3s' }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
