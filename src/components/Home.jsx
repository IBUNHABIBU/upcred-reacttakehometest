import { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

const Home = () => {
  const [user, setUser] = useState({
    id: '',
    isLoggedIn: false,
    name: '',
    email: '',

  });

  const responseFacebook = (response) => {
    console.log(response);
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
        appId="216650907742077"
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

export default Home;
