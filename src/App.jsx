import React from 'react';
import './stylesheets/app.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import layout from './layouts';
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App = () => {
  const HomeComponent = layout(Home);
  const LoginComponent = layout(Login);
  const ProductComponent = layout(Products);
  const SignUpComponent = layout(SignUp);

  const router = createBrowserRouter([
    { path: '/', element: <HomeComponent /> },
    { path: '/login', element: <LoginComponent /> },
    { path: '/products', element: <ProductComponent /> },
    { path: '/signup', element: <SignUpComponent /> },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
