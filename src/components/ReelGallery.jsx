import { content } from '../data/content';
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import './ReelGallery.css';

export default function ReelGallery() {
  const { reels } = content;
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'Celebrations', 'Flavors', 'Masterclass', 'Behind the Scenes'];

  const filteredReels = activeFilter === 'All' 
    ? reels.filter(r => r.type === 'video' || r.video) 
    : reels.filter(reel => reel.category === activeFilter && (reel.type === 'video' || reel.video));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  const handleVideoEnd = () => {
    handleNext();
  };

  const handleNext = () => {
    if (filteredReels.length <= 1) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredReels.length);
      setIsTransitioning(false);
    }, 400); // 400ms transition
  };

  const handlePrev = () => {
    if (filteredReels.length <= 1) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + filteredReels.length) % filteredReels.length);
      setIsTransitioning(false);
    }, 400);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  useEffect(() => {
    if (videoRef.current && isPlaying && !isTransitioning) {
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, [currentIndex, isTransitioning, isPlaying]);

  if (filteredReels.length === 0) {
    return (
      <section className="reels-section section-padding" id="reels">
        <div className="container text-center">
          <h2>No videos in this category</h2>
          <button className="btn btn-outline mt-4" onClick={() => setActiveFilter('All')}>View All</button>
        </div>
      </section>
    );
  }

  const currentReel = filteredReels[currentIndex];
  // Note: content.js uses 'video' for the URL, and 'image' as a fallback thumbnail
  const videoSrc = currentReel.video;

  return (
    <section className="reels-section section-padding" id="reels">
      <div className="container">
        <header className="text-center animate-fade-up">
          <span className="script-text vibrant-script animated-handle">@confeitaria_by_minty</span>
          <h2>Immersive Culinary Gallery</h2>
          <div className="divider mx-auto"></div>
          <p className="subtitle" style={{marginBottom: '2rem'}}>Experience the art of pastry through full-screen reels.</p>
        </header>

        <div className="gallery-filters animate-fade-up">
          {categories.map(category => (
            <button 
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="immersive-video-container animate-fade-up">
          <div className={`video-wrapper ${isTransitioning ? 'transitioning' : ''}`}>
            <video
              ref={videoRef}
              src={videoSrc}
              poster={currentReel.image}
              className="immersive-video"
              autoPlay
              muted={isMuted}
              playsInline
              onEnded={handleVideoEnd}
            />
            
            <div className="video-overlay-ui">
              <div className="video-header">
                <h3>{currentReel.title || "Culinary Creation"}</h3>
                <span className="video-category">{currentReel.category}</span>
              </div>
              
              <div className="video-controls-bottom">
                <button onClick={togglePlay} className="control-btn play-pause-btn">
                  {isPlaying ? <Pause fill="currentColor" size={24} /> : <Play fill="currentColor" size={24} />}
                </button>
                <button onClick={toggleMute} className="control-btn mute-btn">
                  {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button className="nav-arrow left-arrow" onClick={handlePrev} aria-label="Previous Video">
              <ChevronLeft size={36} />
            </button>
            <button className="nav-arrow right-arrow" onClick={handleNext} aria-label="Next Video">
              <ChevronRight size={36} />
            </button>
            
            {/* Play indicator overlay (shows briefly when paused) */}
            {!isPlaying && (
              <div className="center-play-indicator" onClick={togglePlay}>
                <Play fill="currentColor" size={64} />
              </div>
            )}
          </div>
          
          {/* Progress Indicators */}
          <div className="video-progress-dots">
            {filteredReels.map((_, idx) => (
              <button 
                key={idx} 
                className={`progress-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  if (idx !== currentIndex) {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setCurrentIndex(idx);
                      setIsTransitioning(false);
                    }, 400);
                  }
                }}
                aria-label={`Go to video ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
