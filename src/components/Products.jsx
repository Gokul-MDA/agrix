import React from 'react';

const Products = () => {
  const productCategories = [
    {
      title: "Premium Spices",
      defaultImage: "/assets/product_spice.png",
      items: [
        { name: "Turmeric" },
        { name: "Black Pepper" },
        { name: "Green Cardamom" },
        { name: "Cumin Seeds" },
        { name: "Ginger" },
        { name: "Fennel Seeds" },
        { name: "Cloves" },
        { name: "Nutmeg" },
        { name: "Red Chili" },
        { name: "Cashew Nuts" }
      ]
    },
    {
      title: "Herbal Tea Powders",
      defaultImage: "/assets/product_herbs.png",
      items: [
        { name: "Chamomile" },
        { name: "Moringa" },
        { name: "Hibiscus" },
        { name: "Butterfly Pea" }
      ]
    },
    {
      title: "Dehydrated Powders",
      defaultImage: "/assets/product_spice.png",
      items: [
        { name: "Garlic" },
        { name: "Onion" },
        { name: "Ginger Powder" },
        { name: "Tomato Powder" }
      ]
    }
  ];

  return (
    <section id="products" style={{ backgroundColor: 'var(--color-offwhite)', padding: '40px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-charcoal)', marginBottom: '16px', fontFamily: '"Playfair Display", serif' }}>Premium Product Gallery</h2>
          <p style={{ color: 'var(--color-gray)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            India’s finest spices, dry fruits, and herbal powders — export excellence
          </p>
        </div>

        {productCategories.map((category, catIndex) => (
          <div key={catIndex} style={{ marginBottom: '64px' }}>
            <h3 style={{ fontSize: '2rem', color: 'var(--color-emerald-dark)', marginBottom: '32px', borderBottom: '2px solid var(--color-mint)', paddingBottom: '12px', fontFamily: '"Playfair Display", serif' }}>
              {category.title}
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '24px' }}>
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} style={{ 
                  backgroundColor: 'var(--color-white)', 
                  borderRadius: '16px', 
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-soft)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid var(--color-lightgray)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
                }}
                >
                  <div
                    style={{ 
                      height: '220px', 
                      backgroundImage: `url(${item.image || category.defaultImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundColor: 'var(--color-mint)'
                    }}
                  ></div>
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, textAlign: 'center' }}>
                    <h4 style={{ fontSize: '1.2rem', color: 'var(--color-charcoal)', marginBottom: '16px', fontWeight: '600' }}>{item.name}</h4>
                    <div style={{ marginTop: 'auto' }}>
                      <button className="btn-hero-primary" style={{ width: '100%', padding: '10px', fontSize: '0.95rem' }}>View Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
