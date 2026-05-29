import { Link } from 'react-router-dom';
import { content } from '../data/content';
import './RecipeCategories.css';

export default function RecipeCategories() {
  const { categoriesPanel } = content;

  return (
    <section className="categories-panel-section section-padding">
      <div className="container">
        <header className="text-center animate-fade-up" style={{ marginBottom: '4rem' }}>
          <span className="script-text">Explore by Category</span>
          <h2>A World of Flavors</h2>
          <div className="divider mx-auto"></div>
        </header>

        <div className="bento-grid">
          {categoriesPanel.map((cat, idx) => (
            <Link to="/recipes" key={idx} className={`bento-item bento-item-${idx + 1} hover-card`}>
              <img src={cat.image} alt={cat.title} loading="lazy" />
              <div className="bento-overlay">
                <h3>{cat.title}</h3>
                <p>{cat.count} Recipes</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
