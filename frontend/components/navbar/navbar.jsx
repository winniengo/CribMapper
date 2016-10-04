import React from 'react';
import { Link } from 'react-router';

const Navbar = () => (
  <div className='navbar'>
    <div className='logo'>
      <Link to="/">CRIBMAPPER</Link>
    </div>
    <Link to="/login">SIGN IN</Link>
  </div>
);

export default Navbar;
