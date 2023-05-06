import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { cliendId } from '../constants/constants';

const GoogleLogoutComponent = () => {
  const logout = () => {
    console.log('logout');
  };
  return (
    <div>
      <GoogleLogout
        clientId={cliendId}
        buttonText="Logout"
        onLogoutSuccess={logout}
      />
    </div>
  );
};

export default GoogleLogoutComponent;
