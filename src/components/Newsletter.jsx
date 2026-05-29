import { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 4000);
  };

  return (
    <section className="newsletter-section section-padding">
      <div className="container">
        <div className="newsletter-box hover-card">
          <div className="newsletter-content">
            <span className="script-text vibrant-script">Join the Inner Circle</span>
            <h2>Get My Sweetest Secrets</h2>
            <p>Subscribe to be the first to know about upcoming masterclasses, seasonal recipe drops, and when I officially open my order books.</p>
            
            {submitted ? (
              <div className="newsletter-success">
                <p>✨ You're on the list! Welcome to the inner circle.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email address..." 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
