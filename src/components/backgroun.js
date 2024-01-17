import React from 'react';
import './back.css';

const backgroundAni= () => {
  return (
    <div class='ripple-background'>
        <div class='circle xxlarge shade1'></div>
        <div class='circle xlarge shade2'></div>
        <div class='circle large shade3'></div>
        <div class='circle mediun shade4'></div>
        <div class='circle small shade5'></div>
    </div>
  
  );
};

export default backgroundAni;