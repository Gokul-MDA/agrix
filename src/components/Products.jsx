import React from 'react';

const Products = () => {
  const productCategories = [
    {
      title: "Premium Spices",
      image: "/assets/spices.jpeg",
      items: ["Cardamom", "Pepper", "Cloves", "Turmeric"]
    },
    {
      title: "Dry Fruits",
      image: "/assets/dry-fruits.jpeg",
      items: ["Almonds", "Cashews", "Raisins", "Dates"]
    },
    {
      title: "Herbal Tea Powders",
      image: "/assets/herbal-tea.jpeg",
      items: ["Chamomile", "Moringa", "Hibiscus", "Butterfly Pea"]
    },
    {
      title: "Dehydrated Powders",
      image: "/assets/dehydrated.jpeg",
      items: ["Garlic", "Onion", "Ginger", "Tomato"]
    }
  ];

  return (
    <section id="products">
      <div className="container">
        <div className="section-shell deep">
          <h2 className="section-title center">Premium Product Gallery</h2>
          <p className="section-sub center">
            India’s finest spices, dry fruits, and herbal powders — export excellence
          </p>

          <div className="product-grid">
            {productCategories.map((category, index) => (
              <div key={index} className="product-card">
                <div
                  className="product-img"
                  style={{ backgroundImage: `url(${category.image})` }}
                ></div>
                <h3>{category.title}</h3>
                <div className="product-list">
                  {category.items.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
