import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: cliendId,
      });
    });
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
};

export default Home;
