import './header.css';
import React from 'react';

const Header = () => (
  <div className="header">
    <div className="logo">
      <h1>Math Magicans</h1>
    </div>
    <div className="nav">
      <a href="/" className="link">
        Home
      </a>
      <a href="/calc" className="link">
        Calculator
      </a>
      <a href="/quote" className="link">
        Quote
      </a>
    </div>
  </div>
);

export default Header;
