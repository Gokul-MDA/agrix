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
    <section id="why">
      <div className="container">
        <div className="section-shell paper">
          <h2 className="section-title center" style={{ color: 'var(--deep)' }}>
            Why Choose AgriX Global
          </h2>

          <div className="why-grid">
            {reasons.map((reason, index) => (
              <div key={index} className="why-card">
                <i className={reason.icon}></i>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
