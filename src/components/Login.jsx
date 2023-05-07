import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';
import { useDispatch } from 'react-redux';
import FacebookComponent from './FacebookComponent';
import GoogleComponent from './GoogleComponent';
import { cliendId } from '../constants/constants';
import Form from './Form';

const Login = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: cliendId,
      });
    });
  }, []);

  const handleSubmit = (formData) => {
    dispatch(formData);
  };

  return (
    <div className="login">
      <div className="container">
        <div className="form">
          <Form
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

        <hr className="hr" />
        <h6 className="h6">Or </h6>
        <div className="service">
          <FacebookComponent />
          <GoogleComponent />
        </div>
      </div>
    </div>
  );
};

export default Login;
