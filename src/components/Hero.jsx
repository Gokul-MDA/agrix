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
        {/* The hero content seems to be handled predominantly by CSS background in the original */}
      </div>
    </section>
  );
};

export default Hero;
