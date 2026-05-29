import { content } from '../data/content';
import { Play } from 'lucide-react';
import { useRef, useState } from 'react';
import './ReelGallery.css';

// Array of beautiful premium pastry/baking videos to preview on hover
const previewVideos = [
  "https://cdn.pixabay.com/video/2019/11/02/28643-370503070_large.mp4",
  "https://cdn.pixabay.com/video/2021/08/17/85375-589926861_large.mp4",
  "https://cdn.pixabay.com/video/2020/05/11/38865-420803513_large.mp4",
  "https://cdn.pixabay.com/video/2019/02/21/21535-318431114_large.mp4",
  "https://cdn.pixabay.com/video/2022/02/12/107481-676646545_large.mp4"
];

function ReelCard({ reel, isFeatured, index }) {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const videoSrc = previewVideos[index % previewVideos.length];

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && reel.type === 'video') {
      // Small timeout to prevent flicker on rapid mouse movement
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
        }
      }, 50);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current && reel.type === 'video') {
      videoRef.current.pause();
    }
  };

  return (
    <a 
      href={reel.url} 
      target="_blank" 
      rel="noreferrer" 
      className={`reel-card hover-card ${isFeatured ? 'featured-reel' : 'standard-reel'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="reel-image-wrap">
        <img 
          src={reel.image} 
          alt="Instagram Content" 
          loading="lazy" 
          className={isHovered && reel.type === 'video' ? 'fade-out' : ''}
        />
        
        {reel.type === 'video' && (
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            loop
            playsInline
            className={`hover-video ${isHovered ? 'visible' : ''}`}
          />
        )}
        
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

  return (
    <section className="reels-section section-padding" id="reels">
      <div className="container">
        <header className="text-center animate-fade-up">
          <span className="script-text vibrant-script">@confeitaria_by_minty</span>
          <h2>The Culinary Gallery</h2>
          <div className="divider mx-auto"></div>
          <p className="subtitle" style={{marginBottom: '3rem'}}>Explore my latest techniques, behind-the-scenes, and final masterpieces.</p>
        </header>

        <div className="editorial-reels-grid">
          {reels.map((reel, index) => (
            <ReelCard 
              key={reel.id} 
              reel={reel} 
              isFeatured={index === 0} 
              index={index} 
            />
          ))}
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
