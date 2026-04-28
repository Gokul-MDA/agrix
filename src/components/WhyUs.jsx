import React from 'react';

const WhyUs = () => {
  const reasons = [
    {
      icon: "fas fa-chart-line",
      title: "100% Traceability",
      description: "Blockchain-enabled tracking from farm to shelf."
    },
    {
      icon: "fas fa-hand-holding-heart",
      title: "Farm-Direct Sourcing",
      description: "No middlemen, fair prices, consistent quality."
    },
    {
      icon: "fas fa-clipboard-check",
      title: "Global Compliance",
      description: "Strict food safety & international quality standards."
    }
  ];

  return (
    <section id="why" style={{ backgroundColor: 'var(--color-offwhite)', padding: '80px 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--color-emerald-dark)', marginBottom: '48px', fontFamily: '"Playfair Display", serif' }}>
          Why Choose AgriX Global
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {reasons.map((reason, index) => (
            <div key={index} style={{
              backgroundColor: 'var(--color-white)',
              padding: '40px 32px',
              borderRadius: '24px',
              boxShadow: 'var(--shadow-soft)',
              textAlign: 'center',
              border: '1px solid var(--color-mint)'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-mint)',
                color: 'var(--color-emerald)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                margin: '0 auto 24px'
              }}>
                <i className={reason.icon}></i>
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-charcoal)', marginBottom: '16px' }}>{reason.title}</h3>
              <p style={{ color: 'var(--color-gray)', lineHeight: '1.6' }}>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
