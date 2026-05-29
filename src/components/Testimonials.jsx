import { content } from '../data/content';
import './Testimonials.css';

export default function Testimonials() {
  const { testimonials } = content;

  return (
    <section className="testimonials-section section-padding">
      <div className="container text-center">
        <span className="script-text">Kind Words</span>
        <h2>Client Love</h2>
        <div className="divider mx-auto"></div>
        
        <div className="testimonials-grid">
          {testimonials.map(t => (
            <div key={t.id} className="testimonial-card">
              <p className="quote">"{t.quote}"</p>
              <h4 className="author">{t.author}</h4>
              <span className="role">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
