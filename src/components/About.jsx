import React from 'react';

const About = () => {
  return (
    <section id="about" style={{ backgroundColor: 'var(--color-white)', padding: '40px 0' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-emerald-dark)', marginBottom: '16px', fontFamily: '"Playfair Display", serif' }}>About Us</h2>

          <div style={{ padding: '32px', backgroundColor: 'var(--color-offwhite)', borderRadius: '24px', marginBottom: '32px', boxShadow: 'var(--shadow-soft)' }}>
            <div style={{ color: 'var(--color-emerald)', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '8px' }}>ROOTED IN QUALITY</div>
            <div style={{ color: 'var(--color-charcoal)', fontSize: '1.5rem', fontWeight: 'bold' }}>TRUSTED WORLDWIDE</div>
          </div>

          <div style={{ textAlign: 'left', padding: '32px', backgroundColor: 'var(--color-white)', border: '1px solid var(--color-mint)', borderRadius: '24px' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--color-charcoal)', marginBottom: '8px' }}>AgriX Global</h3>
            <div style={{ borderLeft: '4px solid var(--color-emerald)', paddingLeft: '16px', fontSize: '1.1rem', color: 'var(--color-gray)', marginBottom: '24px' }}>
              AgriX Global delivers premium Indian Agri Products to International Markets with quality & reliability
            </div>

            <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-emerald-dark)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="fas fa-leaf"></i> Our Mission
            </div>
            <p style={{ color: 'var(--color-charcoal)', marginBottom: '24px' }}>Maintaining trust, sustainability and long term business</p>

            <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-emerald-dark)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="fas fa-shield-alt"></i> Trusted & certified exports
            </div>
            <p style={{ color: 'var(--color-gray)', lineHeight: '1.6' }}>
              Our products comply with global food safety standards including certifications from{' '}
              <span style={{ fontWeight: 'bold', color: 'var(--color-charcoal)' }}>APEDA</span>,{' '}
              <span style={{ fontWeight: 'bold', color: 'var(--color-charcoal)' }}>FSSAI</span> &{' '}
              <span style={{ fontWeight: 'bold', color: 'var(--color-charcoal)' }}>ISO</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
