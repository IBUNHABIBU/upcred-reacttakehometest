import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';
import FacebookComponent from './FacebookComponent';
import GoogleComponent from './GoogleComponent';
import GoogleLogoutComponent from './GoogleLogoutComponent';
import { cliendId } from '../constants/constants';

const Login = () => {
  useEffect(() => {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: cliendId,
      });
    });
  }, []);

  return (
    <div className="login">
      <FacebookComponent />
      <GoogleComponent />
    </div>
  );
};

export default Login;
