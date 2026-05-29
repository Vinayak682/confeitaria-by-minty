import { content } from '../data/content';
import './RecipeGallery.css';

export default function RecipeGallery() {
  const { recipes } = content;

  return (
    <section className="gallery-section" id="recipes">
      <div className="container">
        <div className="gallery-header reveal">
          <h2>Featured Recipes</h2>
          <div className="divider"></div>
          <p>A collection of my finest creations. Click the Instagram link to see the full reel and recipe!</p>
        </div>
        
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card reveal">
              <div className="recipe-image-wrapper">
                <img src={recipe.image} alt={recipe.title} loading="lazy" />
                <div className="recipe-overlay">
                  <a href={recipe.reelUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    Watch Reel
                  </a>
                </div>
              </div>
              <div className="recipe-content">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
