// Cart.js
import React from 'react';
import './CartStyle.css';

const Cart = ({ cartItems, totalAmount, removeFromCart, checkout }) => {
    console.log(totalAmount);
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.image} alt={`cart-item-${item.id}`} />
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
      <div className="total-amount">
       
        <p>Total Amount: ${totalAmount}</p>
      </div>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

export default Cart;

