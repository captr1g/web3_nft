// Cart.js
import React from 'react';
import './CartStyle.css';

const Cart = ({ cartItems, removeFromCart, checkout }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.image} alt={`cart-item-${item.id}`} />
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

export default Cart;
