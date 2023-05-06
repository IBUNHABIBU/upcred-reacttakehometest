import { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { facebookAppId } from '../constants/constants';

const FacebookComponent = () => {
  const [user, setUser] = useState({
    id: '',
    isLoggedIn: false,
    name: '',
    email: '',

  });

  const responseFacebook = (response) => {
    console.log(response);
    setUser({
      id: response.id,
      isLoggedIn: true,
      name: response.name,
      email: response.email,
    });
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
