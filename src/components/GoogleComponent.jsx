import React from 'react';
import GoogleLogin from 'react-google-login';
import { cliendId } from '../constants/constants';

const GoogleComponent = () => {
  const responseGoogle = (response) => {
    console.log(response);
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
