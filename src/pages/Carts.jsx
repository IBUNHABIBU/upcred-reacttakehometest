import React from 'react';
import { useSelector } from 'react-redux';

const Carts = () => {
  const cart = useSelector((state) => state.carts.products);
  const products = useSelector((state) => state.products);

  const cartItems = products.filter((product) => {
    const cartItem = cart.find((item) => item.productId === product.id);
    return cartItem;
  });

  return (
    <div>
      hello
    </div>
  );
};

export default Carts;
