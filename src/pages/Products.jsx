import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../redux/actions/actions';

const Products = () => {
  const products = useSelector((state) => state.products);
  console.log(products);
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
    <div>Products</div>
  );
};

export default Products;
