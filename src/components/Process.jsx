import React from 'react';

const Process = () => {
  const steps = [
    {
      number: 1,
      title: "Farm Sourcing",
      description: "Direct partnerships with certified growers"
    },
    {
      number: 2,
      title: "Quality Check",
      description: "Multi-level lab testing & sorting"
    },
    {
      number: 3,
      title: "Packaging",
      description: "Eco-friendly, moisture-proof packs"
    },
    {
      number: 4,
      title: "Global Shipping",
      description: "End-to-end logistics & customs clearance"
    }
  ];

  return (
    <section id="process" style={{ backgroundColor: 'var(--color-white)', padding: '80px 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--color-emerald-dark)', marginBottom: '16px', fontFamily: '"Playfair Display", serif' }}>
          Transparent Export Process
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--color-gray)', fontSize: '1.1rem', marginBottom: '48px' }}>
          From Indian farms to global destinations — seamless and ethical
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
          {steps.map((step, index) => (
            <div key={index} style={{
              backgroundColor: 'var(--color-offwhite)',
              padding: '32px 24px',
              borderRadius: '24px',
              textAlign: 'center',
              boxShadow: 'var(--shadow-soft)',
              position: 'relative'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-emerald)',
                color: 'var(--color-white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                margin: '0 auto 24px',
                boxShadow: '0 10px 20px rgba(22, 163, 74, 0.2)'
              }}>
                {step.number}
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-charcoal)', marginBottom: '12px' }}>{step.title}</h3>
              <p style={{ color: 'var(--color-gray)', lineHeight: '1.5' }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
