import { content } from '../data/content';
import { Play } from 'lucide-react';
import { useState, useEffect } from 'react';
import './ReelGallery.css';

function ReelCard({ reel, isFeatured, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [slideshowIndex, setSlideshowIndex] = useState(0);

  // Grab a slice of the featured photos to use as the transition slideshow for this specific card
  const { featuredPhotos } = content;
  
  // We'll pick 3 photos for the slideshow sequence based on the card's index to ensure variety
  const numPhotos = featuredPhotos ? featuredPhotos.length : 0;
  
  const slideshowImages = numPhotos > 0 ? [
    featuredPhotos[(index * 3) % numPhotos],
    featuredPhotos[(index * 3 + 1) % numPhotos],
    featuredPhotos[(index * 3 + 2) % numPhotos]
  ] : [
    "/confeitaria-by-minty/user-media/minty_photo_1.png",
    "/confeitaria-by-minty/user-media/minty_photo_2.png",
    "/confeitaria-by-minty/user-media/minty_photo_3.png"
  ];

  useEffect(() => {
    let interval;
    if (isHovered) {
      // Transition to a new photo every 1.5 seconds
      interval = setInterval(() => {
        setSlideshowIndex((prev) => (prev + 1) % slideshowImages.length);
      }, 1500);
    } else {
      // Reset back to first slide when not hovering
      setSlideshowIndex(0);
    }
    
    return () => clearInterval(interval);
  }, [isHovered, slideshowImages.length]);

  return (
    <a 
      href={reel.url} 
      target="_blank" 
      rel="noreferrer" 
      className={`reel-card hover-card ${isFeatured ? 'featured-reel' : 'standard-reel'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="reel-image-wrap">
        {/* Main image (from content.js reel.image) */}
        <img 
          src={reel.image} 
          alt={reel.title || "Instagram Content"} 
          loading="lazy" 
          className={`base-image ${isHovered ? 'fade-out' : ''}`}
        />
        
        {/* Slideshow images layer */}
        <div className="slideshow-layer">
          {slideshowImages.map((src, i) => (
            <img 
              key={i}
              src={src}
              alt="Transition"
              className={`slideshow-image ${isHovered && slideshowIndex === i ? 'visible' : ''}`}
            />
          ))}
        </div>
        
        {/* Play Button & Text Overlay */}
        <div className={`reel-overlay ${isHovered ? 'hide-overlay' : ''}`}>
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
}

export default function ReelGallery() {
  const { reels } = content;
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(8);
  
  const categories = ['All', 'Celebrations', 'Flavors', 'Masterclass', 'Behind the Scenes'];

  const filteredReels = activeFilter === 'All' 
    ? reels 
    : reels.filter(reel => reel.category === activeFilter);

  const handleFilterChange = (cat) => {
    setActiveFilter(cat);
    setVisibleCount(8);
  };

  return (
    <section className="reels-section section-padding" id="reels">
      <div className="container">
        <header className="text-center animate-fade-up">
          <span className="script-text vibrant-script animated-handle">@confeitaria_by_minty</span>
          <h2>The Culinary Gallery</h2>
          <div className="divider mx-auto"></div>
          <p className="subtitle" style={{marginBottom: '2rem'}}>Explore my latest techniques, behind-the-scenes, and final masterpieces.</p>
        </header>

        <div className="gallery-filters animate-fade-up">
          {categories.map(category => (
            <button 
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => handleFilterChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="editorial-reels-grid" key={activeFilter}>
          {filteredReels.slice(0, visibleCount).map((reel, index) => (
            <ReelCard 
              key={reel.id} 
              reel={reel} 
              isFeatured={index === 0} 
              index={index} 
            />
          ))}
        </div>
        
        {filteredReels.length > visibleCount ? (
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <button 
              className="btn btn-primary" 
              onClick={() => setVisibleCount(prev => prev + 8)}
            >
              Load More Reels
            </button>
          </div>
        ) : (
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <a href="https://instagram.com/confeitaria_by_minty" target="_blank" rel="noreferrer" className="btn btn-outline">
              View All on Instagram
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
