import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Signup from './Signup';

const Home = () => {
  if (user.isLogged) {
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
