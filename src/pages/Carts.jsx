import React from 'react';
import { useSelector } from 'react-redux';

const Carts = () => {
  const cart = useSelector((state) => state.carts.products);
  const products = useSelector((state) => state.products);

  const cartItems = products.filter((product) => {
    let cartItem = cart.find((item) => item.productId === product.id);
    return cartItem;
  });

  return (
    <div>
      {
        cartItems.map(({id, image, title }) => (
          <div key={id}>
            <img src={image} alt={title} />
            <p>{title}</p>
          </div>
        ))
      }
    </div>
  );
};

export default Carts;
