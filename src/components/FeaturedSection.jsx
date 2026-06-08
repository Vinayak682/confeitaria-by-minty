import { content } from '../data/content';
import { useState, useEffect, useRef } from 'react';
import './FeaturedSection.css';

export default function FeaturedSection() {
  const { featuredPhotos } = content;
  const [visibleCount, setVisibleCount] = useState(12);
  const observer = useRef(null);

  // Hardcore UI/UX: Intersection Observer for staggered reveal animations
  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: stop observing once visible
          observer.current.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    });

    const elements = document.querySelectorAll('.masonry-item');
    elements.forEach(el => observer.current.observe(el));

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [visibleCount]); // Re-run when we load more photos

  if (!featuredPhotos || featuredPhotos.length === 0) return null;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, featuredPhotos.length));
  };

  const displayedPhotos = featuredPhotos.slice(0, visibleCount);

  return (
    <section className="featured-section section-padding">
      <div className="container">
        <header className="text-center animate-fade-up">
          <span className="script-text vibrant-script animated-handle">Sweet Indulgences</span>
          <h2>Melt-in-Your-Mouth Delights</h2>
          <div className="divider mx-auto"></div>
          <p className="subtitle" style={{marginBottom: '3rem'}}>
            A curated collection of irresistibly delicate, perfectly balanced pastry creations.
          </p>
        </header>

        <div className="masonry-grid">
          {displayedPhotos.map((photo, idx) => (
            <div 
              key={`featured-${idx}`} 
              className="masonry-item"
              // Add inline staggered transition delay based on column index approximation
              style={{ transitionDelay: `${(idx % 4) * 100}ms` }}
            >
              <div className="masonry-image-wrapper">
                <img src={photo} alt={`Minty Featured Creation ${idx + 1}`} loading="lazy" />
                <div className="masonry-overlay">
                  <div className="masonry-content">
                    <span className="masonry-icon">+</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < featuredPhotos.length && (
          <div className="text-center animate-fade-up" style={{ marginTop: '4rem' }}>
            <button className="btn btn-primary" onClick={handleLoadMore}>
              Load More Delights
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
