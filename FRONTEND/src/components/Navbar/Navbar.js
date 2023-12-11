import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container">
      <div className="logo-nav">
        <div className="logo">
            <p>Share Wallet</p>
        </div>

        <ul className="nav-group">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/activities'>Activities</NavLink></li>
            <li><NavLink to='/create-group'>Create group</NavLink></li>
            <li><NavLink to='/expenses'>Expenses</NavLink></li>
            <li><NavLink to='/signin'>Sign in</NavLink></li>
            <li className='register'><NavLink to='/signup'>Sign up</NavLink></li>
        </ul>

      </div>
    </div>
  );
}

export default Navbar