import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userProfile'));
    setUser(data);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <h2>User Profile</h2>
      <div className="owner-card">
        {user ? (
          <>
            <div className="owner-avatar">👤</div>
            <h3>Welcome back!</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Logged in on:</strong> {user.date}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <p>Please <a href="/login">Login</a> to see your profile.</p>
        )}
      </div>
    </>
  );
};

export default Profile; 