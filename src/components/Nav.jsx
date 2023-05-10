import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { list } from '../constants';
import { logout } from '../redux/actions/actions';

const Nav = () => {
  const user = useSelector((state) => state.user);
  const isLogged = localStorage.getItem('isLogged');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('isLogged');
    navigate('/');
  };

  return (
    <nav className="nav">
      <div className="nav__logo">
        <span />
        <NavLink to="/" className="link">
          user:
          {user.name}
        </NavLink>
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
        { isLogged ? (
          <button type="submit" className="btn" onClick={handleLogout}>Logout</button>) : (
            <NavLink to="/login" className="link">Login</NavLink>
        )}

      </div>
    </nav>
  );
};

export default Nav;
