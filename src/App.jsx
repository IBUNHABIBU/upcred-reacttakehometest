import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './stylesheets/app.scss';

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
