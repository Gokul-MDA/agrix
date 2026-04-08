import React from 'react';

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToProducts();
    }
  };

  return (
    <section
      id="home"
      className="hero"
      role="button"
      aria-label="Scroll to products"
      tabIndex="0"
      onClick={scrollToProducts}
      onKeyDown={handleKeyDown}
    >
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="hero-line-1">Origin Matters.</span>
          <span className="hero-line-2">Quality Travels.</span>
          <p className="hero-subheadline">
            AgriX Global delivers premium Indian agriculture products with unmatched purity and reliability to the international market.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToProducts}>
              Explore Products <i className="fas fa-arrow-right"></i>
            </button>
            <a href="#about" className="btn-outline-gold">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
