import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Welcome to the family! Please login with your new account.");
    navigate('/login');
  };

  return (
    <main className="content">
      <section>
        <h2>Create an Account</h2>
        <form className="contact-form" onSubmit={handleSignup}>
          <section className="form-group">
            <label>First Name</label>
            <input type="text" required />
          </section>

          <section className="form-group">
            <label>Last Name</label>
            <input type="text" required />
          </section>

          <section className="form-group">
            <label>Email Address</label>
            <input type="email" required />
          </section>

          <section className="form-group">
            <label>Password</label>
            <input type="password" required />
          </section>

          <section className="form-group">
            <label>Confirm Password</label>
            <input type="password" required />
          </section>

          <section className="form-group">
            <label>Mobile Number</label>
            <input type="tel" required />
          </section>

          <section className="form-group">
            <label>Home Address</label>
            <textarea required rows="3"></textarea>
          </section>

          <button type="submit">Register</button>
          
          <p style={{ marginTop: '15px' }}>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Signup;