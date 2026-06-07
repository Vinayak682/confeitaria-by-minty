import { content } from '../data/content';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './HeroSection.css';

const bgVideos = [
  "/confeitaria-by-minty/user-media/minty_full_vid_1.mp4",
  "/confeitaria-by-minty/user-media/minty_full_vid_2.mp4",
  "/confeitaria-by-minty/user-media/minty_full_vid_3.mp4",
  "/confeitaria-by-minty/user-media/minty_full_vid_4.mp4",
  "/confeitaria-by-minty/user-media/minty_full_vid_5.mp4",
  "/confeitaria-by-minty/user-media/minty_full_vid_6.mp4",
  "/confeitaria-by-minty/user-media/minty_full_vid_7.mp4"
];

export default function HeroSection() {
  const { headline, subheadline } = content.hero;
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    // Crossfade to the next video every 8 seconds
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % bgVideos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      {/* Cinematic Video Background */}
      <div className="hero-video-backdrop">
        {bgVideos.map((videoSrc, idx) => (
          <video
            key={idx}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className={`hero-bg-video ${idx === currentVideoIndex ? 'visible' : ''}`}
          />
        ))}
      </div>
      
      {/* Elegant Dark Overlay */}
      <div className="hero-overlay">
        <div className="container hero-content animate-fade-up">
          <div className="hero-glass-card premium-dark-card">
            <h1>{headline}</h1>
            <p className="subtitle">{subheadline}</p>
            <div className="hero-actions">
              <Link to="/portfolio" className="btn btn-primary">View My Portfolio</Link>
              <a href="#reels" className="btn btn-outline light-outline">View Culinary Gallery</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
