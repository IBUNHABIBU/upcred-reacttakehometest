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
      {
        cartItems.map(({
          id, image, title, quantity,
        }) => (
          <div key={id}>
            <img src={image} alt={title} />
            <p>{title}</p>
            <p>{quantity}</p>
          </div>
        ))
      }
    </div>
  );
};

export default Carts;
