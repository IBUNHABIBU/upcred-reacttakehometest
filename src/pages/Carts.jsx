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
      {
        cartItems.map(({
          id, image, title, quantity,
        }) => (
          <table className="cart-table">
            <tbody>
              <tr key={id} className="cart-row">
                <td>
                <img src={image} alt={title} className="cart-item__image" />
                <p className="cart-item__title">{title}</p>
                </td>
                <p className="cart-item__quantity">
                  <bold>
                    Qty:
                    {quantity}
                  </bold>
                </p>
              </tr>
            </tbody>
          </table>
        ))
      }
    </div>
  );
};

export default Carts;
