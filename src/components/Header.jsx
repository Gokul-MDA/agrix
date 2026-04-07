import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="container nav-wrapper">
        <div className="logo">
          <img
            src="YOUR-LOGO-IMAGE-URL-HERE"
            alt="AgriX Global"
            style={{ height: '55px', width: 'auto', objectFit: 'contain' }}
          />
        </div>

        <button
          className="mobile-menu-btn"
          id="mobileMenuBtn"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`} id="navLinks">
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#certified" onClick={closeMenu}>Certifications</a></li>
          <li><a href="#why" onClick={closeMenu}>Why Us</a></li>
          <li><a href="#products" onClick={closeMenu}>Products</a></li>
          <li><a href="#process" onClick={closeMenu}>Process</a></li>
        </ul>

        <a href="#contact" className="btn-quote" onClick={closeMenu}>Get Quote →</a>
      </div>
    </header>
  );
};

export default Header;
