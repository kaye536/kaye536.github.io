import React, { useState } from 'react';

const ProductCard = ({ emoji, name, price, showButton = true }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article 
      className="product-card"
      style={{ backgroundColor: isHovered ? '#FFF0F5' : '#FFFFFF' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-img" style={{ fontSize: '3rem' }}>{emoji}</div>
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      {showButton && <button>Add to Cart</button>}
    </article>
  );
};

export default ProductCard;