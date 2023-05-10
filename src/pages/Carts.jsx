import React from 'react';
import { useSelector } from 'react-redux';

const Carts = () => {
  const cart = useSelector((state) => state.carts.products);
  const products = useSelector((state) => state.products);

  const cartItems = products.filter((product) => {
    const cartItem = cart && cart.find((item) => item.productId === product.id);
    return cartItem;
  });

  return (
    <div className ="cart-items">
      
      <h3>Cart Items</h3>
      {
        cartItems.map(({
          id, image, title,
        }) => (
          <div key={id} className='cart-item'>
            <img src={image} alt={title} />
            <p>{title}</p>
            <p>quantity</p>
          </div>
        ))
      }
    </div>
  );
};

export default Carts;
