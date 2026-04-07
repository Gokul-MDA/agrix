import React from 'react';

const Certifications = () => {
  const certifications = [
    { icon: "fas fa-shield-alt", name: "HACCP" },
    { icon: "fas fa-utensils", name: "FSSAI" },
    { icon: "fas fa-certificate", name: "ISO 22000" },
    { icon: "fas fa-seedling", name: "APEDA" }
  ];

  return (
    <section id="certified">
      <div className="container">
        <div className="section-shell paper">
          <h2 className="section-title center" style={{ color: 'var(--deep)' }}>
            Certified for Global Trade
          </h2>

          <p className="section-sub center" style={{ color: '#5d6c66' }}>
            Internationally recognized certifications that guarantee trust and safety
          </p>

          <div className="cert-grid-cards">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <i className={cert.icon}></i>
                <p>{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
