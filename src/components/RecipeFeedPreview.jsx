import { Link } from 'react-router-dom';
import { content } from '../data/content';

export default function RecipeFeedPreview() {
  const { recipes } = content;
  // Just show the first 2 recipes
  const previewRecipes = recipes.slice(0, 2);

  return (
    <section className="recipe-preview-section section-padding" style={{ backgroundColor: 'var(--color-nude)' }}>
      <div className="container">
        <header className="text-center animate-fade-up">
          <span className="script-text">From the Kitchen</span>
          <h2>Latest Recipes</h2>
          <div className="divider mx-auto"></div>
        </header>

        <div className="grid-2">
          {previewRecipes.map(recipe => (
            <article key={recipe.id} className="recipe-list-card hover-card">
              <div className="recipe-image-wrap">
                <img src={recipe.image} alt={recipe.title} loading="lazy" />
                <span className="category-badge">{recipe.category}</span>
              </div>
              <div className="recipe-list-content">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <Link to={`/recipes/${recipe.id}`} className="btn btn-outline mt-auto">Read Full Recipe</Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center" style={{ marginTop: '4rem' }}>
          <Link to="/recipes" className="btn btn-primary">View All Recipes</Link>
        </div>
      </div>
    </section>
  );
}
