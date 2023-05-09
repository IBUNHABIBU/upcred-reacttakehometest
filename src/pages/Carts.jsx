import React from 'react';

const Carts = () => {
  const cart = useSelector((state) => state.cart);
  return(
  <div>
    <h1>Carts</h1>
    {
      cart.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.quantity}</p>
        </div>
    }
  </div>
)};

export default Carts;
