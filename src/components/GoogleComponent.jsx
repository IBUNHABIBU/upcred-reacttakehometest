import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { gapi } from 'gapi-script';
import { cliendId } from '../constants';
import { loginGoogle } from '../redux/actions/actions';

const GoogleComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: cliendId,
      });
    });
  }, []);
  const responseGoogle = (response) => {
    dispatch(loginGoogle(response));
    localStorage.setItem('isLogged', true);
    navigate('/products');
  };

  return (
    <div>
      <GoogleLogin
        clientId={cliendId}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};

export default GoogleComponent;
