import { useState } from 'react';

const Home = () => {
  const [user, setUser] = useState({
    id: '',
    isLoggedIn: false,
    password: '',

  });
  return (
    <div>Home</div>
  );
};

export default Home;
