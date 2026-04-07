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
    <section id="process">
      <div className="container">
        <div className="section-shell paper">
          <h2 className="section-title center" style={{ color: 'var(--deep)' }}>
            Transparent Export Process
          </h2>

          <p className="section-sub center" style={{ color: '#5d6c66' }}>
            From Indian farms to global destinations — seamless and ethical
          </p>

          <div className="process-steps">
            {steps.map((step, index) => (
              <div key={index} className="step">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
