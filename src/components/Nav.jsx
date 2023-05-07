import React from 'react';
import { NavLink } from 'react-router-dom';
import { list } from '../constants/constants';

const Nav = () => {
  const handleLogout = () => {
    console.log('logout');
  };

  const user = false;

  return (
    <nav className="nav">
      <div className="nav__logo">
        <span />
        <NavLink to="/" className="link">Salum Habibu</NavLink>
      </div>
      <div className="nav__list">
        {
        list.map((item) => (
          <NavLink
            to={item.path}
            key={item.id}
            className={({ isActive }) => (isActive ? 'link link--active' : 'link')}
          >
            {item.name}
          </NavLink>
        ))
      }
        { user ? (
          <button type="submit" className="btn" onClick={handleLogout}>Logout</button>) : (
            <NavLink to="/login" className="link">Login</NavLink>
        )}
      </div>
    </nav>
  );
};

export default Nav;
