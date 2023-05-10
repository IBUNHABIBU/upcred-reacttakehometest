import React from 'react';
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
