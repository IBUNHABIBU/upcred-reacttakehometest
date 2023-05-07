import React from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { cliendId } from '../constants/constants';

const GoogleComponent = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    console.log(response);
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
