import React from 'react';
import FacebookLogout from 'react-facebook-login';
import { useDispatch } from 'react-redux';
import { facebookAppId } from '../constants/constants';
import { logout } from '../redux/actions/actions';

const FacebookComponent = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const fbContent = (

    <FacebookLogout
      appId={facebookAppId}
      onLogout={handleLogout}
    />

  );

  return (
    <div>{fbContent}</div>
  );
};

export default FacebookComponent;
