import React from 'react';

const Quality = () => {
  const ensureItems = [
    {
      icon: "fas fa-broom",
      title: "Proper cleaning & grading",
      description: "advanced sorting technology for premium export quality."
    },
    {
      icon: "fas fa-temperature-low",
      title: "Hygienic Processing",
      description: "in state-of-the-art, zero-contamination facilities."
    },
    {
      icon: "fas fa-flask",
      title: "Laboratory Testing",
      description: "for pesticide residue, aflatoxin, and nutritional profile."
    },
    {
      icon: "fas fa-tint",
      title: "Moisture Control",
      description: "& advanced drying to preserve natural aroma and shelf life."
    },
    {
      icon: "fas fa-lock",
      title: "Safe Export Packaging",
      description: "food-grade, moisture-proof, and shock-resistant for international transit."
    }
  ];

  return (
    <section id="quality" style={{ backgroundColor: 'var(--color-mint)', padding: '80px 0' }}>
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto', backgroundColor: 'var(--color-white)', borderRadius: '32px', padding: '48px', boxShadow: 'var(--shadow)' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--color-emerald-dark)', marginBottom: '32px', fontFamily: '"Playfair Display", serif' }}>
            We Ensure
          </h2>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {ensureItems.map((item, index) => (
              <li key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                padding: '20px',
                backgroundColor: 'var(--color-offwhite)',
                borderRadius: '16px',
                border: '1px solid var(--color-lightgray)'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-mint)',
                  color: 'var(--color-emerald)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  flexShrink: 0
                }}>
                  <i className={item.icon}></i>
                </div>
                <div>
                  <span style={{ fontWeight: 'bold', color: 'var(--color-charcoal)', fontSize: '1.1rem' }}>{item.title}</span> 
                  <span style={{ color: 'var(--color-gray)', marginLeft: '8px' }}>– {item.description}</span>
                </div>
              </li>
            ))}
          </ul>

          <p style={{ marginTop: '32px', textAlign: 'center', fontSize: '1.2rem', color: 'var(--color-charcoal)' }}>
            Quality Assurance is our <span style={{ fontWeight: 'bold', color: 'var(--color-emerald)' }}>Highest Priority</span> — every batch is 100% export-ready.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quality;
