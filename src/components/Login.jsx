import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';
import FacebookComponent from './FacebookComponent';
import GoogleComponent from './GoogleComponent';
import GoogleLogoutComponent from './GoogleLogoutComponent';
import { cliendId } from '../constants/constants';
import Form from './Form';

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
      <div className="container">
        <div className="service">
          <FacebookComponent />
          <GoogleComponent />
        </div>
        <div className="form">
        <Form
        errors={errors}
        field={
        [
          {
            name: 'email', type: 'email', label: 'Email', required: true,
          },
          {
            name: 'password', type: 'password', label: 'Password', required: true,
          },
        ]
      }
        onSubmit={(formData) => handleSubmit(formData)}
        action="Login"
      />
        </div>
      </div>
    </div>
  );
};

export default Login;
