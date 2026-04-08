import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-overlay"></div>
      
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content-left">
          <span className="hero-badge">India’s #1 Agri & Spice Platform</span>
          
          <h1 className="hero-title">
            Your Kitchen.
            <span className="highlight">Your Spice.</span>
          </h1>
          
          <p className="hero-subtitle">
            Fresh agri products and authentic Indian spices sourced directly from farms to your doorstep. Experience the purity of origin.
          </p>
          
          <div className="hero-cta">
            <button className="btn-hero-primary" onClick={scrollToProducts}>
              Explore Products
            </button>
            <button className="btn-hero-secondary" onClick={() => window.location.hash = '#products'}>
              View Categories
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="hero-content-right">
          <div className="spice-visual-container">
            <div className="glow-effect"></div>
            
            {/* Glassmorphism Cards */}
            <div className="glass-card card-1">
              <img src="/assets/turmeric.png" alt="Pure Turmeric" className="card-icon" />
              <div className="card-info">
                <p className="card-text">Pure Turmeric</p>
                <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>Cold Ground</span>
              </div>
            </div>
            
            <div className="glass-card card-2">
              <div className="card-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--hero-primary)' }}>
                <i className="fas fa-leaf" style={{ color: 'white' }}></i>
              </div>
              <div className="card-info">
                <p className="card-text">100% Natural</p>
                <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>Spice Blends</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Metrics */}
      {/* <div className="hero-metrics">
        <div className="metrics-container">
          <div className="metric-item">
            <span className="metric-value">50+</span>
            <span className="metric-label">Products</span>
          </div>
          <div className="metric-item">
            <span className="metric-value">10k+</span>
            <span className="metric-label">Customers</span>
          </div>
          <div className="metric-item">
            <span className="metric-value">4.9</span>
            <span className="metric-label">Rating</span>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
