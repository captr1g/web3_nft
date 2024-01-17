// // Flower.js
import React from 'react';
import './floweStyle.css';

const Flower = ({ flower, addToCart }) => {
  return (
    <div className="flower">
      <img src={flower.image} alt={`flower-${flower.id}`} />
      <div className="flower-details">
        <p>{flower.name} Price: ${flower.price}</p>
        <button onClick={addToCart}>Buy</button>
      </div>
    </div>
  );
};

export default Flower;
