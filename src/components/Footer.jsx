import React from 'react';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-shell">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>AgriX Global</h4>
              <p>
                Exporting the finest Indian agricultural products with integrity
                and global quality standards.
              </p>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#certified">Certifications</a>
              <a href="#products">Products</a>
            </div>

            <div className="footer-col">
              <h4>Products</h4>
              <a href="#products">Spices</a>
              <a href="#products">Dry Fruits</a>
              <a href="#products">Herbal Powders</a>
              <a href="#products">Dehydrated Range</a>
            </div>

            <div className="footer-col">
              <h4>Connect</h4>
              <p><i className="fas fa-map-marker-alt" style={{ marginRight: '8px' }}></i> Tamil Nadu, India</p>
              <p><i className="fas fa-envelope" style={{ marginRight: '8px' }}></i> info@agrixglobal.com</p>
              <p><i className="fas fa-phone-alt" style={{ marginRight: '8px' }}></i> +91 7397736407</p>
              <div className="social-icons">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>
          </div>

          <div className="copyright">
            <p>
              © 2026 AgriX Global — Origin Matters. Quality Travels. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
