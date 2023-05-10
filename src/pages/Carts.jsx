import React from 'react';
import { useSelector } from 'react-redux';

const Carts = () => {
  const cart = useSelector((state) => state.carts.products);
  const products = useSelector((state) => state.products);

  const cartItems = products.filter((product) => {
    const cartItem = cart && cart.find((item) => item.productId === product.id);
    return cartItem;
  }).map((product) => {
    const cartItem = cart && cart.find((item) => item.productId === product.id);
    return {
      ...product,
      quantity: cartItem.quantity,
    };
  });

  return (
    <div className="cart-items">
      <h3>Cart Items</h3>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product image</th>
            <th>Title</th>
            <th>Quantity</th>
          </tr>
        </thead>
        {
        cartItems.map(({
          id, image, title, quantity,
        }) => (

          <tbody key={id}>
            <tr className="cart-row">
              <td className="cart-item">
                <img src={image} alt={title} className="cart-item__image" />
              </td>
              <td>
                {title}
              </td>
              <td className="cart-item__quantity">
                {quantity}
              </td>
            </tr>
          </tbody>
        ))
      }
      </table>
    </div>
  );
};

export default Carts;
