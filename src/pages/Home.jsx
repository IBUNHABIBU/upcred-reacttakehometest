import React from 'react';
import { Navigate } from 'react-router-dom';
import Signup from './Signup';

const Home = () => {
  const isLogged = localStorage.getItem('isLogged');
  if (isLogged) {
    return (
      <>
        <Navigate to="/products" />
      </>
    );
  }
  return (
    <div>
      <Signup />
    </div>
  );
};

export default Home;
