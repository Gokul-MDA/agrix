import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content-left">
          <span className="hero-badge">Origin Matters. Quality Travels.</span>
          
          <h1 className="hero-title">
            Premium Indian <br/>
            <span className="highlight">Spices & Agri Products</span>
          </h1>
          
          <p className="hero-subtitle">
            100% Traceable, farm-direct sourcing with global compliance. Experience the purity of origin in every batch.
          </p>
          
          <div className="hero-cta">
            <Link to="/products" className="btn-hero-primary">
              Explore Products
            </Link>
            <Link to="/about" className="btn-hero-secondary">
              Discover Our Process
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="hero-content-right">
          <div className="spice-visual-container">
            <div className="glow-effect"></div>
            <img src="/assets/hero_graphic.png" alt="Premium Spices" className="hero-graphic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
