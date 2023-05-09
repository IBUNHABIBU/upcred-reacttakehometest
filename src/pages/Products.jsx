import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addProducts, addToCart } from '../redux/actions/actions';
import { fakeStoreUrl } from '../constants';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const products = useSelector((state) => state.products);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${fakeStoreUrl}/products`);
      const data = await response.json();
      dispatch(addProducts(data));
    };
    fetchProducts();
  }, []);

  const AddCart = (productId) => {
    const productInTheCart = cart.find((item) => item.productId === productId);

    if (productInTheCart) {
      const newCart = cart.map((item) => {
        if (item.productId === productId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      setCart(newCart);
    } else { setCart([...cart, { productId, quantity: 1 }]); }
    const body = {
      userId: 1,
      date: new Date(),
      products: cart,
    };
    axios.post(`${fakeStoreUrl}/carts`, body)
      .then((response) => {
        dispatch(addToCart(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCheckout = () => {
    navigate('/carts');
  };
 
  return (
    <div className="checkout">
      <div className="checkout__header">
        <button type="submit" className="btn" onClick={handleCheckout}>
          Checkout (
          {cart.reduce((acc, item) => acc + item.quantity, 0)}
          )
        </button>
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
              {cart.find((item) => item.productId === product.id)?.quantity || 0}
              )
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
