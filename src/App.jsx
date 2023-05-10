import React from 'react';
import './stylesheets/app.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import layout from './layouts';
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Carts from './pages/Carts';
import Admin from './pages/Admin';

const App = () => {
  const HomeComponent = layout(Home);
  const LoginComponent = layout(Login);
  const ProductComponent = layout(Products);
  const SignUpComponent = layout(SignUp);
  const CartsComponent = layout(Carts);
  const AdminComponent = layout(Admin);

  const router = createBrowserRouter([
    { path: '/', element: <HomeComponent /> },
    { path: '/login', element: <LoginComponent /> },
    { path: '/products', element: <ProductComponent /> },
    { path: '/signup', element: <SignUpComponent /> },
    { path: '/carts', element: <CartsComponent /> },
    { path: '/admin', element: <AdminComponent /> },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
