import { useParams, Link } from 'react-router-dom';
import { content } from '../data/content';
import { ArrowLeft } from 'lucide-react';
import './Pages.css';

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = content.recipes.find(r => r.id === id);

  if (!recipe) return <div className="container page-container"><h2>Recipe not found</h2></div>;

  return (
    <div className="page-container detail-page">
      <div className="container">
        <Link to="/recipes" className="back-link"><ArrowLeft size={16} /> Back to recipes</Link>
        
        <header className="recipe-detail-header text-center animate-fade-up">
          <span className="category-badge detail-badge">{recipe.category}</span>
          <h1>{recipe.title}</h1>
          <p className="detail-desc">{recipe.description}</p>
          <div className="recipe-meta detail-meta">
            <span>Prep: {recipe.prepTime}</span>
            <span>Cook: {recipe.cookTime}</span>
          </div>
        </header>

        <img src={recipe.image} alt={recipe.title} className="detail-hero-image" />

        <div className="detail-content grid-2">
          <div className="ingredients-section">
            <h3 className="script-text">Ingredients</h3>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
          </div>
          
          <div className="steps-section">
            <h3 className="script-text">Instructions</h3>
            <div className="steps-list">
              {recipe.steps.map((step, i) => (
                <div key={i} className="step-item">
                  <div className="step-number">{i + 1}</div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
            
            {recipe.tips && (
              <div className="tips-box">
                <h4>Chef's Tip</h4>
                <p>{recipe.tips}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
