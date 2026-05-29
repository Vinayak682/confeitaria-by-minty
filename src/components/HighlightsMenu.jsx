import { content } from '../data/content';
import './HighlightsMenu.css';

export default function HighlightsMenu() {
  const { highlights } = content;

  return (
    <section className="highlights-section section-padding">
      <div className="container">
        <div className="highlights-container">
          {highlights.map((item, idx) => (
            <a href={item.url || "https://instagram.com/confeitaria_by_minty"} target="_blank" rel="noreferrer" key={idx} className="highlight-item hover-card" style={{ textDecoration: 'none' }}>
              <div className="highlight-image-wrap">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <span className="highlight-title">{item.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
