import React from 'react';
import { useNavigate } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { facebookAppId } from '../constants/constants';
import { useDispatch } from 'react-redux';
import setUser from '../redux/actions/actions';

const FacebookComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const responseFacebook = (response) => {
    console.log(response);
    dispatch(setUser(response))
    navigate('/products');
  };

  const componentClicked = () => {
    console.log('clicked');
  };

  let fbContent;
  if (user.isLoggedIn) {
    fbContent = null;
  } else {
    fbContent = (
      <FacebookLogin
        appId={facebookAppId}
        autoLoad
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    );
  }

  return (
    <div>{fbContent}</div>
  );
};

export default FacebookComponent;
