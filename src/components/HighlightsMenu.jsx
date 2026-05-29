import { content } from '../data/content';
import './HighlightsMenu.css';

export default function HighlightsMenu() {
  const { highlights } = content;

  return (
    <section className="highlights-section section-padding">
      <div className="container">
        <div className="highlights-container">
          {highlights.map((item, idx) => (
            <div key={idx} className="highlight-item hover-card">
              <div className="highlight-image-wrap">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <span className="highlight-title">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
