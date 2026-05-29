import { content } from '../data/content';
import './AboutSection.css';

export default function AboutSection() {
  const { bio, stats } = content.about;

  return (
    <section className="about-section container" id="about">
      <div className="about-grid reveal">
        <div className="about-text">
          <h2>About Minty</h2>
          <div className="divider"></div>
          <p>{bio}</p>
        </div>
        <div className="about-stats">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card glass">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
