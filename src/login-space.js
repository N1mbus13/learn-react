import React, { useState } from 'react';
import rocketLogo from './rocket.png'; // Import the rocket logo

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle login logic here
      console.log('Email:', email);
      console.log('Password:', password);
      setErrors({});
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#000',
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")', // Space-themed background
    color: '#fff',
  };

  const formContainerStyle = {
    textAlign: 'center',
  };

  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
    width: '300px',
    marginTop: '20px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#fff',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const logoStyle = {
    width: '100px',
    height: '100px',
  };

  const errorStyle = {
    color: 'red',
    fontSize: '12px',
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <img src={rocketLogo} alt="Rocket Logo" style={logoStyle} />
        <div style={formStyle}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
              />
              {errors.email && <div style={errorStyle}>{errors.email}</div>}
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={inputStyle}
              />
              {errors.password && <div style={errorStyle}>{errors.password}</div>}
            </div>
            <button type="submit" style={buttonStyle}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;