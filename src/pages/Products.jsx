import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addProducts } from '../redux/actions/actions';
import { fakeStoreUrl } from '../constants';

const Products = () => {
  const products = useSelector((state) => state.products);
  const [cart, setCart] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${fakeStoreUrl}/products`);
      const data = await response.json();
      dispatch(addProducts(data));
    };
    fetchProducts();
  }, []);

  const AddCart = (productId, quantity) => {
    setCart([...cart, { productId, quantity }]);
  };
  return (
    <div className="checkout">
      <div className="checkout__header">
        <button type='submit'>Checkout {carts.quantity}</button>
      </div>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.title} className="product__image" />
            <h3 className="product__title">{product.title.slice(0, 30)}</h3>
            <p className="product__description">{product.description.slice(0, 120).concat('...')}</p>
            <p className="product__price">{product.price}</p>
            <button type="submit" className="btn" onClick={() => AddCart(product.id)}>
              AddToCart (
              {cart.quantity}
              )
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
