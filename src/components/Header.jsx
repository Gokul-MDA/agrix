import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container nav-wrapper">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img
              src="/assets/logo.png"
              alt="AgriX Global"
              style={{ height: '80px', width: 'auto' }}
            />
          </Link>
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
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
          <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
          <li><Link to="/global-markets" onClick={closeMenu}>Global Markets</Link></li>
        </ul>

        <Link to="/contact" className="btn-hero-primary" onClick={closeMenu} style={{ padding: '10px 24px', fontSize: '1rem' }}>Contact Us</Link>
      </div>
    </header>
  );
};

export default Header;
