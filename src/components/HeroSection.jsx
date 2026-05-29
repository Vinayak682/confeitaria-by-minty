import { content } from '../data/content';
import './HeroSection.css';

export default function HeroSection() {
  const { headline, subheadline } = content.hero;
  // Get 12 images from reels/recipes for the backdrop
  const backdropImages = content.reels.slice(0, 12).map(r => r.image);

  return (
    <section className="hero-section">
      {/* Animated Reels Backdrop */}
      <div className="hero-reels-backdrop">
        <div className="backdrop-column animate-up">
          {backdropImages.slice(0, 4).map((img, idx) => (
            <img key={`col1-${idx}`} src={img} alt="" className="backdrop-img" />
          ))}
          {/* Duplicate for infinite scroll */}
          {backdropImages.slice(0, 4).map((img, idx) => (
            <img key={`col1-dup-${idx}`} src={img} alt="" className="backdrop-img" />
          ))}
        </div>
        <div className="backdrop-column animate-down">
          {backdropImages.slice(4, 8).map((img, idx) => (
            <img key={`col2-${idx}`} src={img} alt="" className="backdrop-img" />
          ))}
          {backdropImages.slice(4, 8).map((img, idx) => (
            <img key={`col2-dup-${idx}`} src={img} alt="" className="backdrop-img" />
          ))}
        </div>
        <div className="backdrop-column animate-up-slow">
          {backdropImages.slice(8, 12).map((img, idx) => (
            <img key={`col3-${idx}`} src={img} alt="" className="backdrop-img" />
          ))}
          {backdropImages.slice(8, 12).map((img, idx) => (
            <img key={`col3-dup-${idx}`} src={img} alt="" className="backdrop-img" />
          ))}
        </div>
        <div className="backdrop-column animate-down-slow">
          {backdropImages.slice(2, 6).map((img, idx) => (
            <img key={`col4-${idx}`} src={img} alt="" className="backdrop-img" />
          ))}
          {backdropImages.slice(2, 6).map((img, idx) => (
            <img key={`col4-dup-${idx}`} src={img} alt="" className="backdrop-img" />
          ))}
        </div>
        <div className="backdrop-column animate-up">
          {backdropImages.slice(6, 10).map((img, idx) => (
            <img key={`col5-${idx}`} src={img} alt="" className="backdrop-img" />
          ))}
          {backdropImages.slice(6, 10).map((img, idx) => (
            <img key={`col5-dup-${idx}`} src={img} alt="" className="backdrop-img" />
          ))}
        </div>
      </div>
      
      <div className="hero-overlay">
        <div className="container hero-content animate-fade-up">
          <div className="hero-glass-card">
            <h1>{headline}</h1>
            <p className="subtitle">{subheadline}</p>
            <div className="hero-actions">
              <a href="#menu" className="btn btn-primary">Explore Signature Menu</a>
              <a href="#reels" className="btn btn-outline">View Culinary Gallery</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
