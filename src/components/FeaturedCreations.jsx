import { content } from '../data/content';
import './FeaturedCreations.css';

export default function FeaturedCreations() {
  const { featuredCreations } = content;

  return (
    <section className="featured-section section-padding">
      <div className="container">
        <header className="text-center animate-fade-up">
          <span className="script-text">Signature Pastries</span>
          <h2>Featured Creations</h2>
          <div className="divider mx-auto"></div>
        </header>

        <div className="grid-2 featured-grid">
          {featuredCreations.map((item) => (
            <div key={item.id} className="featured-card hover-card">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="featured-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
