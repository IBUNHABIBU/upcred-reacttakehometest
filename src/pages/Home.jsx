import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Signup from './Signup';

const Home = () => {
  const user = useSelector((state) => state.user);
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
