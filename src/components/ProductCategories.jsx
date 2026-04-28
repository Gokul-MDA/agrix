import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategories = () => {
  const categories = [
    {
      title: "Premium Spices",
      image: "/assets/product_spice.png",
      description: "Discover our range of authentic Indian spices, sourced directly from farms."
    },
    {
      title: "Herbal Tea Powders",
      image: "/assets/product_herbs.png",
      description: "Experience wellness with our premium herbal blends and teas."
    },
    {
      title: "Dehydrated Powders",
      image: "/assets/product_spice.png",
      description: "High-quality dehydrated vegetable powders for global culinary use."
    }
  ];

  return (
    <section id="categories" style={{ backgroundColor: 'var(--color-offwhite)', padding: '80px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-charcoal)', marginBottom: '16px', fontFamily: '"Playfair Display", serif' }}>Explore Our Categories</h2>
          <p style={{ color: 'var(--color-gray)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            From farm to global markets, explore our premium ranges
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {categories.map((category, index) => (
            <div key={index} style={{ 
              backgroundColor: 'var(--color-white)', 
              borderRadius: '24px', 
              overflow: 'hidden',
              boxShadow: 'var(--shadow)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow)';
            }}
            >
              <div
                style={{ 
                  height: '240px', 
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: 'var(--color-mint)'
                }}
              ></div>
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1, textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-emerald-dark)', marginBottom: '12px' }}>{category.title}</h3>
                <p style={{ color: 'var(--color-gray)', marginBottom: '24px', lineHeight: '1.5' }}>{category.description}</p>
                <div style={{ marginTop: 'auto' }}>
                  <Link to="/products" className="btn-hero-secondary" style={{ width: '100%', padding: '12px' }}>
                    View All {category.title}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link to="/products" className="btn-hero-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
            View Full Product Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
