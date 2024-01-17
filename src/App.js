import F1 from './images/fl1.jpg';
import F2 from './images/fl2.jpg';
import F3 from './images/fl3.jpg';
import F4 from './images/fl4.jpg';
import F5 from './images/fl5.jpg';
import F6 from './images/fl6.jpg';
import BackgroundAni from './components/backgroun';
import NavBar from './components/navBar';

// App.js
import React, { useState } from 'react';
import FlowerGrid from './components/FlowerGrid';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const [flowers, setFlowers] = useState([
    { id: 1, name: 'Sunflower', price: 10, image: F1 },
    { id: 2, name: 'Rose', price: 15, image: F2 },
    { id: 3, name: 'Hibiscus ', price: 20, image: F3 },
    { id: 4, name: 'Black Dahlia', price: 25, image: F4 },
    { id: 5, name: 'Narcissuc', price: 30, image: F5 },
    { id: 6, name: 'Bluebell', price: 35, image: F6 }
    // Add more flowers as needed
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = (flower) => {
    console.log('flower', flower);
    setCartItems([...cartItems, flower]);
    setTotalAmount(totalAmount + flower.price);
    console.log('flower', totalAmount);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((flower) => flower.id !== item.id));
    setTotalAmount(totalAmount - item.price);
  };

  const checkout = async () => {
    // Remove flowers in the cart from the flowers grid
    const updatedFlowers = flowers.filter((flower) => !cartItems.some((item) => item.id === flower.id));
    setFlowers(updatedFlowers);
    setTotalAmount(0);
  
    // Clear the cart
    setCartItems([]);
    const isMetaMaskInstalled = () => {
      return typeof window.ethereum !== 'undefined';
    };
    
    if (isMetaMaskInstalled()) {
      try {
        // Request user's account from MetaMask
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  
        // Message to be signed (you can customize this)
        const messageToSign = "You are buying worth of flower";
  
        // Request a signature for the message
        const signature = await window.ethereum.request({
          method: 'personal_sign',
          params: [messageToSign, accounts[0]],
        });
  
      
  
      } 
      catch (error) {
          console.error('Error during MetaMask checkout:', error);
        }
    } 

    else {
        // Display a message or redirect to an error page
        console.log('MetaMask is not installed');
      }
    };
  


  return (
    <div className="app">
      <NavBar></NavBar>
      <BackgroundAni></BackgroundAni>
      <div className='flexbox'>
      <FlowerGrid flowers={flowers} addToCart={addToCart} />
      {/* <Cart cartItems={cartItems} removeFromCart={removeFromCart} checkout={checkout} /> */}
      <Cart cartItems={cartItems} totalAmount={totalAmount} removeFromCart={removeFromCart} checkout={checkout} />
      </div>
    </div>
  );
};

export default App;
