import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Sent:", formData);
    alert("Love received! We'll get back to you soon.");
  };

  return (
    <>
      <h2>Send us a Message</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Your Name</label>
          <input 
            type="text" 
            placeholder="Enter your name" 
            required 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea 
            placeholder="Tell us which plushie you love!" 
            required 
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          ></textarea>
        </div>
        <button type="submit">Send Love</button>
      </form>
    </>
  );
};

export default Contact;