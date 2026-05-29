import { content } from '../data/content';
import { Award, Medal, Star } from 'lucide-react';
import './AboutChef.css';

export default function AboutChef() {
  const { bio, certifications, image } = content.about;

  // Array of icons to cycle through for the certifications
  const certIcons = [Award, Medal, Star];

  return (
    <section className="about-section section-padding" id="about">
      <div className="container grid-2 align-center">
        <div className="about-image-wrap">
          <img src={image} alt="Chef Minty Bhadani" loading="lazy" />
          <div className="experience-badge">
            <span className="years">10+</span>
            <span className="text">Years of<br/>Excellence</span>
          </div>
        </div>
        <div className="about-content">
          <span className="script-text vibrant-script">Meet the Chef</span>
          <h2 className="vibrant-heading">Minty Bhadani</h2>
          <p className="bio-text">{bio}</p>
          
          <div className="certifications-showcase">
            <h3 className="cert-title vibrant-subtitle">Professional Credentials</h3>
            <div className="cert-grid">
              {certifications.map((cert, index) => {
                const Icon = certIcons[index % certIcons.length];
                return (
                  <div key={index} className="cert-badge hover-glow">
                    <div className="cert-icon-wrap">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <span className="vibrant-badge-text">{cert}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
