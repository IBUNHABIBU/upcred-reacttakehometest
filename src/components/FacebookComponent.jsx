import React from 'react';
import { useNavigate } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { useDispatch } from 'react-redux';
import { loginFacebook } from '../redux/actions/actions';

const FacebookComponent = () => {
  const isLogged = localStorage.getItem('isLogged');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const responseFacebook = (response) => {
    dispatch(loginFacebook(response));
    localStorage.setItem('isLogged', true);
    navigate('/products');
  };

  let fbContent;
  if (isLogged) {
    fbContent = null;
  } else {
    fbContent = (
      <div>
        <FacebookLogin
          appId={process.env.REACT_APP_FACEBOOK_APP_ID}
          autoLoad
          fields="name,email,picture"
          callback={responseFacebook}
        />
      </div>
    );
  }

  return (
    <div>{fbContent}</div>
  );
};

export default FacebookComponent;
