import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ authToken, minimal, setShowModal, showModal, setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  return (
    <nav>
      <div className="logo-container">
        <Link to="/">
          <img src="path-to-your-logo.png" alt="Logo" className="logo" />
        </Link>
      </div>
      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/mechanics">Mechanics</Link>
        <Link to="/users">Users</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/publishers">Publishers</Link>
        <Link to="/versions">Versions</Link>
      </div>
      {!authToken && !minimal && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Log in
        </button>
      )}
    </nav>
  );
};

export default Nav;
