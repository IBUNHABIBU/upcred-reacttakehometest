import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FacebookLogin, FacebookLogout } from 'react-facebook-login';
import { useDispatch, useSelector } from 'react-redux';
import { facebookAppId } from '../constants/constants';
import { loginFacebook, logout } from '../redux/actions/actions';

const FacebookComponent = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const responseFacebook = (response) => {
    console.log('Response', response.accessToken);
    dispatch(loginFacebook(response));
    navigate('/products');
  };

  const componentClicked = () => {
    console.log('clicked');
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  let fbContent;
  if (user.isLogged) {
    console.log('user', user.isLogged);
    fbContent = null;
  } else {
    fbContent = (
      <div>
        <FacebookLogin
          appId={facebookAppId}
          autoLoad
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
        />
        <FacebookLogout
          appId={facebookAppId}
          onLogout={handleLogout}
        />
      </div>
    );
  }

  return (
    <div>{fbContent}</div>
  );
};

export default FacebookComponent;
