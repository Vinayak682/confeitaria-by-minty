import './Collaborations.css';

export default function Collaborations() {
  return (
    <section className="collab-section section-padding" id="collaborations">
      <div className="container">
        <div className="grid-2 align-center">
          <div className="collab-text">
            <span className="script-text">Let's Work Together</span>
            <h2>Collaborations & Partnerships</h2>
            <div className="divider"></div>
            <p className="collab-desc">
              Looking for a professional pastry chef to elevate your brand? I partner with premium food brands, kitchen equipment companies, and publications for recipe development, sponsored content, and media inquiries.
            </p>
            <p className="collab-contact">
              <strong>Email:</strong> hello@confeitariabyminty.com
            </p>
          </div>
          
          <div className="collab-form-wrap">
            <form className="contact-form" onSubmit={e => e.preventDefault()}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your name or brand" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="hello@example.com" required />
              </div>
              <div className="form-group">
                <label>Inquiry Type</label>
                <select required>
                  <option value="">Select an option</option>
                  <option value="partnership">Brand Partnership</option>
                  <option value="recipe">Recipe Development</option>
                  <option value="media">Media Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="Tell me about your project..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">Send Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
