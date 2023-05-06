import React from 'react';
import { gapi } from 'gapi-script';
import FacebookComponent from './FacebookComponent';
import GoogleComponent from './GoogleComponent';
import GoogleLogoutComponent from './GoogleLogoutComponent';

const Home = () => {
  return(
  <div>
    <FacebookComponent />
    <GoogleComponent />
    <GoogleLogoutComponent />
  </div>
)};

export default Home;
