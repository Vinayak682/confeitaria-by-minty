import { useState } from 'react';
import './Services.css';
import { Mail, CheckCircle } from 'lucide-react';

export default function Services() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'custom-cake',
    date: '',
    details: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send an email or save to a database.
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', service: 'custom-cake', date: '', details: '' });
    }, 5000);
  };

  const services = [
    {
      title: "Bespoke Event Cakes",
      price: "Starting at $150",
      description: "Custom-designed, multi-tiered cakes for weddings, anniversaries, and milestones. Featuring signature flavor pairings and exquisite sugar-paste artistry.",
      image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Cafe Menu Consulting",
      price: "Retainer or Project Based",
      description: "Comprehensive pastry menu development for cafes and restaurants. Includes recipe creation, staff training, and cost-efficiency analysis.",
      image: "https://images.unsplash.com/photo-1556206079-a1b72e987c2c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Private Masterclasses",
      price: "Starting at $300/session",
      description: "1-on-1 or small group intensive pastry workshops. Master the art of macarons, laminated doughs, or advanced chocolate tempering.",
      image: "https://images.unsplash.com/photo-1621236378699-8597faf6a176?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="services-page">
      <header className="page-header text-center animate-fade-up">
        <span className="script-text vibrant-script">Work With Me</span>
        <h1>Services & Inquiries</h1>
        <div className="divider mx-auto"></div>
        <p className="subtitle">From custom creations to professional consulting.</p>
      </header>

      <div className="container">
        {/* Services Offerings */}
        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-card hover-card animate-fade-up" style={{animationDelay: `${idx * 0.1}s`}}>
              <div className="service-img-wrap">
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <span className="service-price">{service.price}</span>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Form Section */}
        <section className="booking-section animate-fade-up" style={{animationDelay: '0.4s'}}>
          <div className="booking-container">
            <div className="booking-info">
              <h2>Request a Quote</h2>
              <p>Ready to collaborate? Fill out the form to discuss your event, consulting needs, or class availability. I aim to respond to all inquiries within 48 hours.</p>
              <div className="contact-direct">
                <Mail size={20} />
                <span>hello@confeitariabyminty.com</span>
              </div>
            </div>

            <div className="booking-form-wrapper">
              {submitted ? (
                <div className="success-message">
                  <CheckCircle size={48} color="var(--color-primary)" />
                  <h3>Request Received!</h3>
                  <p>Thank you for reaching out. I will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="booking-form">
                  <div className="form-group">
                    <label>Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Service Type</label>
                    <select 
                      value={formData.service}
                      onChange={e => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="custom-cake">Custom Cake Order</option>
                      <option value="consulting">Menu Consulting</option>
                      <option value="masterclass">Masterclass</option>
                      <option value="other">Other Collaboration</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Event Date (If applicable)</label>
                    <input 
                      type="date" 
                      value={formData.date}
                      onChange={e => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Project Details</label>
                    <textarea 
                      rows="4" 
                      required
                      placeholder="Tell me about your vision, guest count, or consulting needs..."
                      value={formData.details}
                      onChange={e => setFormData({...formData, details: e.target.value})}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary submit-btn">Submit Inquiry</button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
