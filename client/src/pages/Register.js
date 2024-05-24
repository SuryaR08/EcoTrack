import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../services/authService';
import '../Register.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await register({ username, email, password });
      if (response.data) {
        navigate('/login');
      }
    } catch (err) {
      setError(err.response.data.error || 'Registration failed');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
        
      <form onSubmit={handleRegister}>
        {error && <p className="error">{error}</p>}
        
          {/* <label htmlFor="username">Username</label> */}
          <input
            type="text"
            id="username"
            value={username}
            placeholder='username'
            onChange={(e) => setUsername(e.target.value)}
            required
          />
       
        
          {/* <label htmlFor="email">Email</label> */}
          <input
          placeholder='email'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
      
        
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            placeholder='password'
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
       
        
          {/* <label htmlFor="confirmPassword">Confirm Password</label> */}
          <input
            type="password"
            placeholder='confirm password'
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
      
        <button type="submit">Register</button>
        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </form>
    </div>
  );
}

export default Register;
