import { content } from '../data/content';
import './Partnerships.css';

export default function Partnerships() {
  const { services } = content;

  return (
    <section className="partnerships-section" id="partnerships">
      <div className="container">
        <div className="partnerships-grid reveal">
          <div className="partnerships-content">
            <h2>Work With Me</h2>
            <div className="divider"></div>
            <p className="intro">
              Looking for a professional pastry chef to elevate your brand? I partner with premium food brands, kitchen equipment companies, and publications.
            </p>
            
            <div className="services-list">
              {services.map((service, idx) => (
                <div key={idx} className="service-item">
                  <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <div>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="contact-card glass">
            <h3>Let's Collaborate</h3>
            <p>Send me an email to discuss your next project.</p>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Tell me about your brand..." rows="4" required></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
