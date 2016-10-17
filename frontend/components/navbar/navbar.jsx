import React from 'react';
import { Link } from 'react-router';

const Navbar = ({ loggedIn, pathname, logout }) => {
  let sessionLink;
  if (pathname === '/' && loggedIn) {
    sessionLink = <button type="button" onClick={logout}>log out</button>;
  } else if ((pathname === '/' && !loggedIn) || pathname === '/login') {
    sessionLink = <Link to="/login">sign in</Link>;
  } else if (pathname === '/signup') {
    sessionLink = <Link to="/signup">sign up</Link>;
  }

  return (
    <div className='navbar'>
      <div className='logo'>
        <Link to="/">cribmapper</Link>
      </div>
      <div className='links'>
        <Link to ="/favorites">favorites</Link>
        {sessionLink}
      </div>
    </div>
  );
}

export default Navbar;
