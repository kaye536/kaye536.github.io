import React from 'react';
import ProductCard from '../components/ProductCard';

const Catalog = () => {
  const products = [
    { emoji: '🍔', name: 'Burger Pal', price: 15.00 },
    { emoji: '🍣', name: 'Sushi Roll Softie', price: 12.00 },
    { emoji: '🍦', name: 'Scoop Icecream', price: 10.00 },
    { emoji: '🍕', name: 'Pizza Slice Snuggle', price: 14.00 },
    { emoji: '🌮', name: 'Tiny Taco Friend', price: 13.00 },
    { emoji: '🍩', name: 'Donut Delight', price: 9.00 },
  ];

  return (
    <>
      <h2>Our Full Collection</h2>
      <section className="product-grid">
        {products.map((product, index) => (
          <ProductCard 
            key={index} 
            emoji={product.emoji} 
            name={product.name} 
            price={product.price} 
          />
        ))}
      </section>
    </>
  );
};

export default Catalog;