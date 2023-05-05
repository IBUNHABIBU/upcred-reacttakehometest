import React from 'react';
import './stylesheets/app.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter([
    { path: '/', action: () => <div>Home</div> },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
