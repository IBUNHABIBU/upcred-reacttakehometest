import React from 'react';
import './stylesheets/app.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import layout from './layouts';
import Home from './components/Home';
import Login from './components/Login';
import Products from './components/Products';

const App = () => {
  const HomeComponent = layout(Home);
  const LoginComponent = layout(Login);
  const ProductComponent = layout(Products);

  const router = createBrowserRouter([
    { path: '/', element: <HomeComponent /> },
    { path: '/login', element: <LoginComponent /> },
    { path: '/products', element: <ProductComponent /> },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
