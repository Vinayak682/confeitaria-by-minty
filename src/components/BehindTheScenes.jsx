import { useState, useEffect } from 'react';
import './BehindTheScenes.css';

const videos = [
  `${import.meta.env.BASE_URL}videos/bts-1.mp4`,
  `${import.meta.env.BASE_URL}videos/bts-2.mp4`,
  `${import.meta.env.BASE_URL}videos/bts-3.mp4`,
  `${import.meta.env.BASE_URL}videos/bts-4.mp4`,
  `${import.meta.env.BASE_URL}videos/bts-5.mp4`
];

export default function BehindTheScenes() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Crossfade videos every 6 seconds
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % videos.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bts-section" id="behind-the-scenes">
      <div className="bts-video-container background-blur">
        {videos.map((src, index) => (
          <video
            key={`bg-${index}`}
            src={src}
            className={`bts-video-bg ${index === activeIndex ? 'active' : ''}`}
            autoPlay
            muted
            loop
            playsInline
          />
        ))}
      </div>
      <div className="bts-video-container foreground">
        {videos.map((src, index) => (
          <video
            key={`fg-${index}`}
            src={src}
            className={`bts-video-fg ${index === activeIndex ? 'active' : ''}`}
            autoPlay
            muted
            loop
            playsInline
          />
        ))}
      </div>
      
      <div className="bts-overlay">
        <div className="bts-content animate-fade-up">
          <span className="script-text vibrant-script">Exclusive Look</span>
          <h2>Behind the Scenes</h2>
          <div className="divider mx-auto"></div>
          <p className="subtitle">Witness the craftsmanship and passion poured into every masterpiece.</p>
        </div>
      </div>
    </section>
  );
}
