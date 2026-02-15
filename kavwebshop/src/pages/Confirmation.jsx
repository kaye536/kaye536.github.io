import React from 'react';
import { useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <article className="owner-card" style={{ maxWidth: '500px', margin: 'auto', textAlign: 'center' }}>
      <div className="owner-avatar" style={{ fontSize: '3rem' }}>✅</div>
      <h2>Order Confirmed!</h2>
      <p>Thank you for shopping with us. Here is your e-receipt:</p>
      
      <div style={{ textAlign: 'left', background: '#FFF5E1', padding: '15px', borderRadius: '15px', marginTop: '20px' }}>
        <p><strong>Transaction ID:</strong> #PFC-77210</p>
        <p><strong>Items:</strong> Burger Pal, Tiny Taco</p>
        <p><strong>Total Paid:</strong> $28.00</p>
        <p><strong>Status:</strong> Preparing for Shipment</p>
      </div>
      <br />
      <button onClick={() => navigate('/')}>Return to Home</button>
    </article>
  );
};

export default Confirmation;