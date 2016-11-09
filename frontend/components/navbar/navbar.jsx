import React from 'react';
import { Link } from 'react-router';

const Navbar = ({ loggedIn, pathname, logout }) => {
  let sessionLink;
  if (loggedIn) {
    sessionLink = <button onClick={logout}>log out</button>;
  } else if (pathname === '/login') {
    sessionLink = <Link to="/signup">sign up</Link>;
  } else if (!loggedIn || pathname === '/signup') {
    sessionLink = <Link to="/login">sign in</Link>;
  }

  return (
    <div className='navbar'>
      <div className='logo'>
        <Link to="/">
          <div className='logo-img background-img' />
          <h2>CribMapper</h2>
        </Link>
      </div>
      <div className='links'>
        <Link to ="/favorites">favorites</Link>
        {sessionLink}
      </div>
    </div>
  );
}

export default Navbar;
