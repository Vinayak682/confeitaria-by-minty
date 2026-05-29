import { content } from '../data/content';
import './FeaturedCreations.css';

export default function FeaturedCreations() {
  const { featuredCreations } = content;

  return (
    <section className="featured-section section-padding" id="creations">
      <div className="container">
        <div className="section-header text-center">
          <span className="script-text vibrant-script">Signature Pastries</span>
          <h2>Featured Creations</h2>
        </div>

        <div className="showcase-grid">
          {featuredCreations.map((creation) => (
            <div key={creation.id} className="showcase-card">
              {creation.video ? (
                <video 
                  src={creation.video} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="showcase-video"
                  poster={creation.image}
                />
              ) : (
                <img src={creation.image} alt={creation.title} className="showcase-img" loading="lazy" />
              )}
              <div className="showcase-overlay">
                <div className="showcase-info">
                  <span className="category-tag">{creation.category}</span>
                  <h3>{creation.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
