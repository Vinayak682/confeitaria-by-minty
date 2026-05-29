import { useState } from 'react';
import './SignatureMenu.css';

const menuItems = {
  "Event Cakes": [
    { name: "The Classic Vanilla Bean", description: "Madagascar vanilla sponge, whipped vanilla buttercream, fresh berry compote", price: "from $85" },
    { name: "Dark Chocolate Truffle", description: "Valrhona chocolate cake, dark chocolate ganache, cocoa nib crunch", price: "from $95" },
    { name: "Lemon & Elderflower", description: "Zesty lemon sponge, elderflower syrup, lemon curd, swiss meringue", price: "from $90" },
    { name: "Pistachio & Rose", description: "Pistachio sponge, delicate rosewater buttercream, crushed Iranian pistachios", price: "from $105" }
  ],
  "Signature Pastries": [
    { name: "Pistachio Raspberry Choux", description: "Crisp choux pastry, pistachio praline mousseline, fresh raspberries", price: "$45 / dz" },
    { name: "Salted Caramel Macarons", description: "Almond shells, whipped caramel ganache, fleur de sel", price: "$35 / dz" },
    { name: "Gourmet Brownie Box", description: "Assorted fudgy brownies including hazelnut, espresso, and classic", price: "$40" },
    { name: "Mini Fruit Tarts", description: "Vanilla tart shells, rich pastry cream, seasonal fresh fruit glaze", price: "$50 / dz" }
  ]
};

export default function SignatureMenu() {
  const [activeTab, setActiveTab] = useState("Event Cakes");

  return (
    <section className="signature-menu-section section-padding">
      <div className="container">
        <header className="text-center animate-fade-up">
          <span className="script-text vibrant-script">Bespoke Offerings</span>
          <h2>The Signature Menu</h2>
          <div className="divider mx-auto"></div>
          <p className="subtitle" style={{marginBottom: '3rem'}}>Handcrafted creations for your most special moments.</p>
        </header>

        <div className="menu-tabs animate-fade-up">
          {Object.keys(menuItems).map(tab => (
            <button 
              key={tab}
              className={`menu-tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="menu-content" key={activeTab}>
          {menuItems[activeTab].map((item, idx) => (
            <div key={idx} className="menu-item">
              <div className="menu-item-header">
                <h3>{item.name}</h3>
                <span className="menu-price">{item.price}</span>
              </div>
              <p className="menu-description">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-up" style={{ marginTop: '4rem' }}>
          <button className="btn btn-primary" onClick={() => window.location.href='/services'}>Request Custom Order</button>
        </div>
      </div>
    </section>
  );
}
