import { useState } from 'react';

const Home = () => {
  const [user, setUser] = useState({
    id: '',
    isLoggedIn: false,
    name: '',
    email: '',

  });
  let fbContent;
  if (user.isLoggedIn) { 
  } else {
    fbContent = ( <FacebookLogin
      appId="1088597931155576"
      autoLoad={true}
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook} />);
  }
   

  return (
    <div>Home</div>
  );
};

export default Home;
