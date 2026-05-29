import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="script-text">Confeitaria by Minty</h3>
            <p>Elegant Bakes, Thoughtfully Crafted.</p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Navigation</h4>
              <Link to="/">Home</Link>
              <Link to="/recipes">Recipe Blog</Link>
              <a href="/#collaborations">Collaborations</a>
            </div>
            
            <div className="link-group">
              <h4>Connect</h4>
              <a href="https://instagram.com/confeitaria_by_minty" target="_blank" rel="noreferrer" className="social-link">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg> Instagram
              </a>
              <a href="mailto:hello@confeitariabyminty.com" className="social-link">
                <Mail size={16} /> Email
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Confeitaria by Minty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
