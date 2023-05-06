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
    fbContent = ();
  }
   

  return (
    <div>Home</div>
  );
};

export default Home;
