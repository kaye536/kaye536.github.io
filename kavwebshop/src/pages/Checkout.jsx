import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  return (
    <main className="content">
      <section className="owner-card">
        <h2>Checkout</h2>
        <button onClick={() => navigate('/confirmation')}>Place Order</button>
      </section>
    </main>
  );
};

export default Checkout; 