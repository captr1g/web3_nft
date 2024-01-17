import React, { useEffect } from 'react';
import Flower from './Flower';
import './flowerGridStyle.css';

const FlowerGrid = ({ flowers, addToCart }) => {
  useEffect(() => {
    // Log when flowers change for testing
    console.log('Flowers updated:', flowers);
  }, [flowers]);

  return (
    <div className="flower-grid">
      {flowers.map((flower, index) => (
        <Flower key={index} flower={flower} addToCart={() => addToCart(flower)} />
      ))}
    </div>
  );
};

export default FlowerGrid;