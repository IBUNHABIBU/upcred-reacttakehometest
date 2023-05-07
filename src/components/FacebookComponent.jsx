import React from 'react';
import { useNavigate } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { useDispatch, useSelector } from 'react-redux';
import { facebookAppId } from '../constants/constants';
import { loginFacebook } from '../redux/actions/actions';

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
      </div>
    );
  }

  return (
    <div>{fbContent}</div>
  );
};

export default FacebookComponent;
