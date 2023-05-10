import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fakeStoreUrl } from '../constants';

const Carts = () => {
  const cart = useSelector((state) => state.carts.products);
  console.log(cart);
  
  return (
    <div>
      <h1>Carts</h1>
      {
      cart && cart.length > 0 && cart.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.quantity}</p>
        </div>
      ))
    }
    </div>
  );
};

export default Carts;
