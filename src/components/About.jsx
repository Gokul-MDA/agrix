import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-shell earth">
          <div className="leaf-bg">
            <span className="a"></span>
            <span className="b"></span>
            <span className="c"></span>
          </div>

          <h2 className="section-title center">About Us</h2>

          <div className="golden-highlight-box">
            <div className="green-text">ROOTED IN QUALITY</div>
            <div className="gold-text">TRUSTED WORLDWIDE</div>
          </div>

          <div className="about-mission-box">
            <h3>AgriX Global</h3>
            <div className="tagline">
              AgriX Global delivers premium Indian Agri Products to International Markets with quality & reliability
            </div>

            <div className="mission-title">
              <i className="fas fa-leaf" style={{ marginRight: '8px', color: '#6f9e7c' }}></i>
              Our Mission
            </div>
            <p>Maintaining trust, sustainability and long term business</p>

            <div className="cert-title">
              <i className="fas fa-shield-alt" style={{ marginRight: '8px' }}></i>
              Trusted & certified exports
            </div>
            <p>
              Our products comply with global food safety standards including certifications from{' '}
              <span className="gold-accent">Agricultural & Processed food products export development Authority</span>,{' '}
              <span className="gold-accent">food safety and standards Authority of India</span> &{' '}
              <span className="gold-accent">International organization for Standardization</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
