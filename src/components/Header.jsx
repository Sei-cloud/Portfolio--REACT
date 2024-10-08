import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/app.css'

function Header() {
  return (
    <header>
      <h1><Link className='name' to="/about-me">Sei.</Link></h1>
      <nav>
        <ul>
          <li><Link to="/">About Me.</Link></li>
          <li><Link to="/portfolio">Portfolio.</Link></li>
          <li><Link to="/contact">Contact.</Link></li>
          <li><Link to="/resume">Resume.</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
