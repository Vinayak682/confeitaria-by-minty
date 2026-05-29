import { Link } from 'react-router-dom';
import { content } from '../data/content';
import './Pages.css';

export default function RecipeList() {
  const { recipes } = content;

  return (
    <div className="page-container">
      <div className="container">
        <header className="page-header text-center animate-fade-up">
          <h1 className="script-text">Recipe Journal</h1>
          <h2 className="title">Latest Creations</h2>
          <div className="divider mx-auto"></div>
          <p className="subtitle">Detailed step-by-step guides to my favorite pastries.</p>
        </header>

        <div className="grid-2">
          {recipes.map(recipe => (
            <article key={recipe.id} className="recipe-list-card hover-card">
              <div className="recipe-image-wrap">
                <img src={recipe.image} alt={recipe.title} loading="lazy" />
                <span className="category-badge">{recipe.category}</span>
              </div>
              <div className="recipe-list-content">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <div className="recipe-meta">
                  <span>Prep: {recipe.prepTime}</span>
                  <span>Cook: {recipe.cookTime}</span>
                </div>
                <Link to={`/recipes/${recipe.id}`} className="btn btn-primary mt-auto">Read Full Recipe</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
