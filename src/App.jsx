import React from 'react';
import './stylesheets/app.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import layout from './layouts';
import Home from './components/Home';

const App = () => {
  const HomeComponent = layout(Home)
  const router = createBrowserRouter([
    { path: '/', element: <HomeComponent />},
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
