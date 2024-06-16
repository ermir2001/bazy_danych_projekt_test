import React, { useState } from 'react';
import Nav from '../components/Nav';
import AuthModal from "../components/AuthModal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [authToken, setAuthToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const handleClick = () => {
    if (authToken) {
      setAuthToken(null);
      setUserId(null);
      window.location.reload();
      return;
    }
    setShowModal(true);
    setIsSignUp(true);
  };

  return (
    <div className="overlay">
      <Nav
        authToken={authToken}
        minimal={false}
        setShowModal={setShowModal}
        showModal={showModal}
        setIsSignUp={setIsSignUp}
      />
      <div className="home">
        <h1 className="primary-title">Swipe Right®</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? 'Signout' : 'Create Account'}
        </button>

        {showModal && (
          <AuthModal
            setShowModal={setShowModal}
            isSignUp={isSignUp}
            setAuthToken={setAuthToken}
            setUserId={setUserId}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
