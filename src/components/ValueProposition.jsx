import React from 'react';
import './ValueProposition.css';

const ValueProposition = () => {
  return (
    <section className="value-proposition">
      <div className="vp-container">
        <div className="vp-item">
          <div className="vp-icon">🛡️</div>
          <p>100% Traceable</p>
        </div>
        <div className="vp-item">
          <div className="vp-icon">🧑‍🌾</div>
          <p>Farm-Direct</p>
        </div>
        <div className="vp-item">
          <div className="vp-icon">🌍</div>
          <p>Global Compliance</p>
        </div>
        <div className="vp-item">
          <div className="vp-icon">✅</div>
          <p>FSSAI Certified</p>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
