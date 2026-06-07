import './FlavorPalette.css';

export default function FlavorPalette() {
  const categories = [
    { name: "Cakes & Tarts", image: "/confeitaria-by-minty/user-media/minty_photo_19.png" },
    { name: "Macarons", image: "/confeitaria-by-minty/user-media/minty_photo_20.png" },
    { name: "Fudges", image: "/confeitaria-by-minty/user-media/minty_photo_21.png" },
    { name: "Breads", image: "/confeitaria-by-minty/user-media/minty_photo_22.png" },
    { name: "Cupcakes", image: "/confeitaria-by-minty/user-media/minty_photo_23.png" },
    { name: "Savory", image: "/confeitaria-by-minty/user-media/minty_photo_24.png" }
  ];

  return (
    <section className="flavor-palette-section section-padding">
      <div className="container">
        <header className="text-center animate-fade-up">
          <span className="script-text">Curated Selection</span>
          <h2>The Tasting Palette</h2>
          <div className="divider mx-auto"></div>
          <p className="subtitle" style={{marginBottom: '3rem'}}>A symphony of flavors, tailored to your cravings.</p>
        </header>

        <div className="palette-container">
          {categories.map((cat, idx) => (
            <div key={idx} className="palette-swatch-wrapper">
              <div className="palette-swatch">
                <img src={cat.image} alt={cat.name} loading="lazy" className="palette-image" />
                <div className="swatch-inner-ring"></div>
              </div>
              <span className="palette-name">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
