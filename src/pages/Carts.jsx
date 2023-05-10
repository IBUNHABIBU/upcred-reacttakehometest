import React from 'react';
import { useSelector } from 'react-redux';

const Carts = () => {
  const cart = useSelector((state) => state.carts.products);
  const products = useSelector((state) => state.products);
  console.log(products, cart);

  const cartItems = products.filter((product) => cart.productId === product.id);
  console.log(cartItems);

  return (
    <div>
      hello
    </div>
  );
};

export default Carts;
