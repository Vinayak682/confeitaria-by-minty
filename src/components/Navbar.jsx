import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-brand">
          <span className="script-text">Confeitaria</span>
          <span className="brand-sub">by Minty</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/recipes" className="nav-link">Recipes</Link>
          <a href="/#collaborations" className="nav-link">Collaborations</a>
        </div>
        <div className="nav-socials">
          <a href="https://instagram.com/confeitaria_by_minty" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="mailto:hello@confeitariabyminty.com" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}
