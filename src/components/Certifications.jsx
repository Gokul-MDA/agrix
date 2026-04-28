import React from 'react';

const Certifications = () => {
  const certifications = [
    { icon: "fas fa-shield-alt", name: "HACCP" },
    { icon: "fas fa-utensils", name: "FSSAI" },
    { icon: "fas fa-certificate", name: "ISO 22000" },
    { icon: "fas fa-seedling", name: "APEDA" }
  ];

  return (
    <section id="certified" style={{ backgroundColor: 'var(--color-white)', padding: '80px 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--color-emerald-dark)', marginBottom: '16px', fontFamily: '"Playfair Display", serif' }}>
          Certified for Global Trade
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--color-gray)', fontSize: '1.1rem', marginBottom: '48px' }}>
          Internationally recognized certifications that guarantee trust and safety
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
          {certifications.map((cert, index) => (
            <div key={index} style={{
              backgroundColor: 'var(--color-offwhite)',
              padding: '32px',
              borderRadius: '24px',
              border: '1px solid var(--color-mint)',
              textAlign: 'center',
              width: '200px',
              boxShadow: 'var(--shadow-soft)'
            }}>
              <i className={cert.icon} style={{ fontSize: '2.5rem', color: 'var(--color-emerald)', marginBottom: '16px' }}></i>
              <p style={{ fontWeight: 'bold', color: 'var(--color-charcoal)' }}>{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
