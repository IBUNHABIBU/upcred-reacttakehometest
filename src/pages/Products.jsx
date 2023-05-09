import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../redux/actions/actions';

const Products = () => {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      dispatch(addProducts(data));
    };
    fetchProducts();
  }, []);
  return (
    <div className="products">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.title} className="product__image" />
          <h3 className="product__title">{product.title}</h3>
          <p className="product__description">{product.description}</p>
          <p className="product__price">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
