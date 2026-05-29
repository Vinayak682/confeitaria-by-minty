import './FlavorPalette.css';

export default function FlavorPalette() {
  const categories = [
    { name: "Ganache", url: "https://www.instagram.com/stories/highlights/17870237648716017/", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400" },
    { name: "Cookies", url: "https://www.instagram.com/stories/highlights/17892186299583653/", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=400" },
    { name: "Cupcakes", url: "https://www.instagram.com/stories/highlights/17963885065835910/", image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=400" },
    { name: "Custom Gifts", url: "https://instagram.com/confeitaria_by_minty", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=400" },
    { name: "Cheesecake", url: "https://www.instagram.com/stories/highlights/17978624317617920/", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=400" },
    { name: "Reviews", url: "https://www.instagram.com/stories/highlights/17989205623495270/", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <section className="flavor-palette-section section-padding">
      <div className="container">
        <header className="text-center animate-fade-up">
          <span className="script-text">Highlights</span>
          <h2>Stories & Creations</h2>
          <div className="divider mx-auto"></div>
          <p className="subtitle" style={{marginBottom: '3rem'}}>Explore my process, behind the scenes, and client love.</p>
        </header>

        <div className="palette-container">
          {categories.map((cat, idx) => (
            <a key={idx} href={cat.url} target="_blank" rel="noreferrer" className="palette-swatch-wrapper" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="palette-swatch">
                <img src={cat.image} alt={cat.name} loading="lazy" className="palette-image" />
                <div className="swatch-inner-ring"></div>
              </div>
              <span className="palette-name">{cat.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
