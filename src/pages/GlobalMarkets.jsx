import React from 'react';
import GlobalMap from '../components/GlobalMap';

const GlobalMarkets = () => {
  const regions = [
    {
      title: "Europe Countries",
      countries: ["Germany", "Netherlands", "France", "Italy"]
    },
    {
      title: "Middle-East Countries",
      countries: ["UAE"]
    },
    {
      title: "Asia-Pacific Countries",
      countries: ["Singapore", "Malaysia", "Sri Lanka"]
    }
  ];

  return (
    <div style={{ paddingTop: '40px', paddingBottom: '80px', backgroundColor: 'var(--color-white)', minHeight: '100vh' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h1 style={{ fontSize: '3rem', color: 'var(--color-emerald-dark)', marginBottom: '16px', fontFamily: '"Playfair Display", serif' }}>Global Markets</h1>
          <p style={{ color: 'var(--color-gray)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Bridging trusted farms in India with quality-focused importers and distributors throughout the European Union, Middle East, and Asia-Pacific.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center' }}>
          
          {/* Map Container */}
          <div style={{ width: '100%', maxWidth: '1000px', height: '500px', boxShadow: 'var(--shadow)', borderRadius: '24px' }}>
            <GlobalMap />
          </div>

          {/* Destinations List */}
          <div style={{ width: '100%', maxWidth: '1000px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {regions.map((region, idx) => (
              <div key={idx} style={{ 
                backgroundColor: 'var(--color-offwhite)', 
                padding: '32px', 
                borderRadius: '24px', 
                border: '1px solid var(--color-mint)'
              }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-charcoal)', marginBottom: '24px', borderBottom: '2px solid var(--color-emerald)', paddingBottom: '8px', display: 'inline-block' }}>
                  {region.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {region.countries.map((country, cIdx) => (
                    <li key={cIdx} style={{ fontSize: '1.1rem', color: 'var(--color-gray)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--color-emerald)', fontSize: '0.8rem' }}>●</span> {country}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default GlobalMarkets;
