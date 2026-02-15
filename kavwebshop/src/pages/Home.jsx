import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="content">
      <section style={{ textAlign: 'center', padding: '40px 0' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--text-gray)' }}>Welcome to Plushie Food!</h1>
        <p>The softest snacks you'll ever hug.</p>
        <br />
        <button onClick={() => navigate('/catalog')}>
          Shop the Collection
        </button>
      </section>

      <h2 style={{ marginBottom: '20px' }}>Featured Favorites</h2>
      
      <section className="product-grid">
        <article className="product-card">
          <div className="product-img">🍔</div>
          <h3>Burger Pal</h3>
          <p>$15.00</p>
          <button onClick={() => navigate('/cart')} style={{ marginTop: '10px', padding: '8px 20px' }}>
            Add to Basket
          </button>
        </article>

        <article className="product-card">
          <div className="product-img">🍣</div>
          <h3>Sushi Roll Softie</h3>
          <p>$12.00</p>
          <button onClick={() => navigate('/cart')} style={{ marginTop: '10px', padding: '8px 20px' }}>
            Add to Basket
          </button>
        </article>

        <article className="product-card">
          <div className="product-img">🍦</div>
          <h3>Scoop Icecream</h3>
          <p>$10.00</p>
          <button onClick={() => navigate('/cart')} style={{ marginTop: '10px', padding: '8px 20px' }}>
            Add to Basket
          </button>
        </article>
      </section>
    </main>
  );
};

export default Home;