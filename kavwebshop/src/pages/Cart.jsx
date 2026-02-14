import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  const cartItems = [
    { id: 1, emoji: '🍔', name: 'Burger Pal', price: 15.00 },
    { id: 2, emoji: '🍣', name: 'Sushi Roll Softie', price: 12.00 },
    { id: 3, emoji: '🍦', name: 'Scoop Icecream', price: 10.00 },
    { id: 4, emoji: '🍕', name: 'Pizza Slice Snuggle', price: 14.00 },
    { id: 5, emoji: '🌮', name: 'Tiny Taco Friend', price: 13.00 },
    { id: 6, emoji: '🍩', name: 'Donut Delight', price: 9.00 }
  ];

  return (
    <main className="content">
      <section className="cart-header">
        <h2>My Shopping Basket</h2>
        <p>You have {cartItems.length} items ready for cuddles!</p>
      </section>

      <br />

      <section className="owner-card" style={{ maxWidth: '600px' }}>
        {cartItems.map((item) => (
          <article 
            key={item.id} 
            className="cart-item" 
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}
          >
            <span>{item.emoji} <strong>{item.name}</strong></span>
            <span>${item.price.toFixed(2)}</span>
          </article>
        ))}
      </section>

      <br />

      <section className="owner-card" style={{ maxWidth: '600px', backgroundColor: '#FFF0F5' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 'bold' }}>
          <span>Total Amount:</span>
          <span>$73.00</span>
        </div>
        <hr style={{ border: '1px solid #FFD1DC', margin: '15px 0' }} />
        
        <button 
          style={{ width: '100%' }} 
          onClick={() => navigate('/checkout')}
        >
          Proceed to Payment
        </button>
      </section>
    </main>
  );
};

export default Cart;