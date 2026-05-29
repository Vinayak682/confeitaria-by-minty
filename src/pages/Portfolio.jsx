import './Portfolio.css';
import { Download, Award, ChevronRight } from 'lucide-react';

export default function Portfolio() {
  const skills = [
    { name: "Advanced Lamination", description: "Mastery of classic and modern croissant doughs, bi-color lamination, and structural integrity." },
    { name: "Chocolate Artistry", description: "Expert tempering, hand-painted bonbons, and large-scale chocolate showpieces." },
    { name: "Sugar Work", description: "Pulled and blown sugar techniques for delicate floral decorations and artistic garnishes." },
    { name: "Recipe Development", description: "Creating balanced, scalable recipes for high-volume cafe production without compromising quality." }
  ];

  return (
    <div className="portfolio-page">
      <header className="page-header text-center animate-fade-up">
        <span className="script-text vibrant-script">My Journey</span>
        <h1>Professional Portfolio</h1>
        <div className="divider mx-auto"></div>
        <p className="subtitle">A closer look at my culinary philosophy, techniques, and career highlights.</p>
      </header>

      <div className="container">
        {/* Philosophy Section */}
        <section className="philosophy-section animate-fade-up">
          <div className="philosophy-grid">
            <div className="philosophy-content">
              <h2>Culinary Philosophy</h2>
              <p>I believe that true pastry art is the perfect balance between scientific precision and creative intuition. Every dessert should tell a story through its textures, flavor profiles, and visual presentation.</p>
              <p>My approach is rooted in classical French techniques, elevated by modern aesthetics and local, seasonal ingredients. Whether developing a menu for a boutique cafe or crafting a bespoke wedding cake, my goal is always to deliver an unforgettable sensory experience.</p>
              
              <a href="#" className="btn btn-primary resume-btn" onClick={(e) => { e.preventDefault(); alert("In a live app, this would download your PDF Resume!"); }}>
                <Download size={18} />
                Download Full Resume
              </a>
            </div>
            <div className="philosophy-image hover-card">
              <img src="https://images.unsplash.com/photo-1556206079-a1b72e987c2c?auto=format&fit=crop&q=80&w=1000" alt="Chef working" />
            </div>
          </div>
        </section>

        {/* Technical Expertise */}
        <section className="expertise-section section-padding">
          <div className="text-center mb-5">
            <h2 className="mb-4">Technical Expertise</h2>
            <div className="divider mx-auto"></div>
          </div>
          
          <div className="skills-grid">
            {skills.map((skill, idx) => (
               <div key={idx} className="skill-card hover-card animate-fade-up" style={{animationDelay: `${idx * 0.1}s`}}>
                 <div className="skill-icon">
                   <Award size={24} color="var(--color-primary)" />
                 </div>
                 <h3>{skill.name}</h3>
                 <p>{skill.description}</p>
               </div>
            ))}
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="case-study-section animate-fade-up">
          <div className="case-study-card">
            <div className="case-study-image">
              <img src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=1200" alt="Case Study" />
            </div>
            <div className="case-study-content">
              <span className="category-tag">Case Study</span>
              <h2>Menu Revamp for Local Artisan Cafe</h2>
              <p>Led a complete overhaul of a prominent Auckland cafe's pastry cabinet. Developed 12 new scalable recipes, trained a staff of 5 bakers, and reduced food waste by 20% through smart cross-utilization of ingredients.</p>
              <ul className="case-study-highlights">
                <li><ChevronRight size={16} /> 40% increase in pastry sales</li>
                <li><ChevronRight size={16} /> Implementation of modern vegan options</li>
                <li><ChevronRight size={16} /> Streamlined morning prep schedule</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
