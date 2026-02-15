import React from 'react';

const About = () => {
  return (
    <div className="profile-section">
      <h2>About Our Shop</h2>
      <p>
        Plushie Food Company was born out of a love for all things sweet and squishy. 
        We believe that food is better when you can hug it!
      </p>
      
      <div className="owner-card">
        <div className="owner-avatar" style={{ fontSize: '3rem' }}>👩‍🎨</div>
        <h3>Meet Kaye</h3>
        <p><strong>Founder & Chief Cuddler</strong></p>
        <p>Kaye started this business to bring a little more softness to the world, one plushie at a time.</p>
      </div>
    </div>
  );
};

export default About;