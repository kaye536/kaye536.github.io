import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    
    const user = {
      name: "Plushie Lover",
      email: email,
      date: new Date().toLocaleDateString()
    };

    localStorage.setItem('userProfile', JSON.stringify(user));
    

    navigate('/profile');
  };

  return (
    <>
      <h2>Login to your Account</h2>
      <form className="contact-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email Address</label>
          <input 
            type="email" 
            placeholder="email@example.com" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            placeholder="Enter password" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <p style={{ marginTop: '15px' }}>
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </form>
    </>
  );
};

export default Login;