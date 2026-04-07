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
    <section id="quality">
      <div className="container">
        <div className="section-shell earth">
          <h2 className="section-title center">We Ensure</h2>

          <div className="ensure-wrapper">
            <ul className="ensure-list">
              {ensureItems.map((item, index) => (
                <li key={index}>
                  <i className={item.icon}></i>
                  <span>
                    <span className="gold-text">{item.title}</span> – {item.description}
                  </span>
                </li>
              ))}
            </ul>

            <p
              style={{
                marginTop: '24px',
                textAlign: 'center',
                fontSize: '1.08rem',
                fontWeight: 600,
              }}
            >
              Quality Assurance is our{' '}
              <span className="gold-text">Highest Priority</span> — every batch is 100% export-ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
