import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FacebookLogin, FacebookLogout } from 'react-facebook-login';
import { useDispatch, useSelector } from 'react-redux';
import { facebookAppId } from '../constants/constants';
import { loginFacebook, logout } from '../redux/actions/actions';

const FacebookComponent = () => {
  const dispatch = useDispatch();

 

  

  const handleLogout = () => {
    dispatch(logout());
  };

    let fbContent;
    fbContent = (
    
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
