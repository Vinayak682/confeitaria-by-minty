import { content } from '../data/content';
import { Play } from 'lucide-react';
import './ReelGallery.css';

export default function ReelGallery() {
  const { reels } = content;

  return (
    <section className="reels-section section-padding" id="reels">
      <div className="container">
        <header className="text-center animate-fade-up">
          <span className="script-text">@confeitaria_by_minty</span>
          <h2>The Culinary Gallery</h2>
          <div className="divider mx-auto"></div>
          <p className="subtitle" style={{marginBottom: '3rem'}}>Explore my latest techniques, behind-the-scenes, and final masterpieces.</p>
        </header>

        {/* We use an editorial asymmetrical grid layout */}
        <div className="editorial-reels-grid">
          {reels.map((reel, index) => {
            // Make the first item a large featured reel
            const isFeatured = index === 0;
            return (
              <a 
                key={reel.id} 
                href={reel.url} 
                target="_blank" 
                rel="noreferrer" 
                className={`reel-card hover-card ${isFeatured ? 'featured-reel' : 'standard-reel'}`}
              >
                <div className="reel-image-wrap">
                  <img src={reel.image} alt="Instagram Content" loading="lazy" />
                  <div className="reel-overlay">
                    <div className="play-btn">
                      <Play fill="currentColor" size={isFeatured ? 32 : 24} />
                    </div>
                    {isFeatured && (
                      <div className="featured-text">
                        <h3>Trending Now</h3>
                        <span className="view-text">Watch Reel</span>
                      </div>
                    )}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        
        <div className="text-center" style={{ marginTop: '4rem' }}>
          <a href="https://instagram.com/confeitaria_by_minty" target="_blank" rel="noreferrer" className="btn btn-primary">
            View All on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
