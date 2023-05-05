import React from 'react';
import Nav from '../components/Nav';

const layout = (Component) => () => (
  <div className="layout">
    <Nav />
    <div className="container">
      <div className="main-container">
        <Component />
      </div>
    </div>
  </div>
);

export default layout;