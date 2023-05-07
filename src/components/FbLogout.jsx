import React from 'react';
import { useNavigate } from 'react-router-dom';
import FacebookLogout from 'react-facebook-login';
import { useDispatch, useSelector } from 'react-redux';
import { facebookAppId } from '../constants/constants';

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
