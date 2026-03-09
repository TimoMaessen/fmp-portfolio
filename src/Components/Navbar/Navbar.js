import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; // Importeer Link

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links-container">
        {/* 'to' verwijst naar de URL die we in App.js gaan definiëren */}
        <Link to="/hi" className="nav-link">Hi!</Link>
        <Link to="/development" className="nav-link">Development</Link>
        <Link to="/projects" className="nav-link">Project Overview</Link>
        <Link to="/future" className="nav-link">Future</Link>
      </div>
    </nav>
  );
};

export default Navbar;