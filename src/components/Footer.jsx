import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" style={{ backgroundColor: 'var(--color-forest-dark)', color: 'var(--color-offwhite)', paddingTop: '64px', paddingBottom: '32px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '48px' }}>
          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '16px', color: 'var(--color-mint)', fontFamily: '"Playfair Display", serif' }}>AgriX Global</h4>
            <p style={{ color: 'var(--color-lightgray)', lineHeight: '1.6' }}>
              Exporting the finest Indian agricultural products with integrity
              and global quality standards.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '16px', color: 'var(--color-mint)', fontFamily: '"Playfair Display", serif' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link to="/" style={{ color: 'var(--color-lightgray)', textDecoration: 'none' }}>Home</Link>
              <Link to="/about" style={{ color: 'var(--color-lightgray)', textDecoration: 'none' }}>About Us</Link>
              <Link to="/products" style={{ color: 'var(--color-lightgray)', textDecoration: 'none' }}>Products</Link>
              <Link to="/global-markets" style={{ color: 'var(--color-lightgray)', textDecoration: 'none' }}>Global Markets</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '16px', color: 'var(--color-mint)', fontFamily: '"Playfair Display", serif' }}>Categories</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link to="/products" style={{ color: 'var(--color-lightgray)', textDecoration: 'none' }}>Spices</Link>
              <Link to="/products" style={{ color: 'var(--color-lightgray)', textDecoration: 'none' }}>Herbal Powders</Link>
              <Link to="/products" style={{ color: 'var(--color-lightgray)', textDecoration: 'none' }}>Dehydrated Range</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '16px', color: 'var(--color-mint)', fontFamily: '"Playfair Display", serif' }}>Our Headquarters</h4>
            <p style={{ color: 'var(--color-lightgray)', marginBottom: '12px', lineHeight: '1.6' }}>
              AgriX Global<br />
              6/45, SRI ARUNACHALESWARA COMPLEX<br />
              PALGHAT MAIN ROAD VK PURAM,<br />
              KOVAIPUDUR PIRIVU COIMBATORE - 641008
            </p>
            <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
              <a href="#" style={{ color: 'var(--color-white)', fontSize: '1.2rem' }}><i className="fab fa-instagram"></i></a>
              <a href="#" style={{ color: 'var(--color-white)', fontSize: '1.2rem' }}><i className="fab fa-linkedin-in"></i></a>
              <a href="#" style={{ color: 'var(--color-white)', fontSize: '1.2rem' }}><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '16px', color: 'var(--color-mint)', fontFamily: '"Playfair Display", serif' }}>Phone Number</h4>
            <p style={{ color: 'var(--color-lightgray)', marginBottom: '8px' }}>+91 78100 36407</p>
            <p style={{ color: 'var(--color-lightgray)', marginBottom: '8px' }}>+91 73977 36407</p>
            <p style={{ color: 'var(--color-gray)', fontSize: '0.9rem' }}>Mon-Fri from 9am to 6pm</p>
            
            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '16px', marginTop: '24px', color: 'var(--color-mint)', fontFamily: '"Playfair Display", serif' }}>Email Support</h4>
            <p style={{ color: 'var(--color-lightgray)', marginBottom: '8px' }}>info.agrixglobal@gmail.com</p>
            <p style={{ color: 'var(--color-gray)', fontSize: '0.9rem' }}>For wholesale inquiries, please contact us via email.</p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', textAlign: 'center' }}>
          <p style={{ color: 'var(--color-gray)', fontSize: '0.9rem' }}>
            © 2026 AgriX Global — Origin Matters. Quality Travels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
