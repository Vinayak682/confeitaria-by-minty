import { content } from '../data/content';
import './FlavorPalette.css';

export default function FlavorPalette() {
  const categories = [
    { name: "Cakes & Tarts", image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=400" },
    { name: "Macarons", image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=400" },
    { name: "Fudges", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=400" },
    { name: "Breads", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400" },
    { name: "Cupcakes", image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=400" },
    { name: "Savory", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400" }
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
