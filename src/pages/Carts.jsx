import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fakeStoreUrl } from '../constants';

const Carts = () => {
  const cart = useSelector((state) => state.carts.products);
  const products = useSelector((state) => state.products);
  console.log(products);
  
  return (
    <div>
   hello
    </div>
  );
};

export default Carts;
