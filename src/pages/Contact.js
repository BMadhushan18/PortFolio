import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm open to collaborations, freelance projects, and new opportunities.
        </p>
        <form className="contact-form">
          <div className="input-group">
            <FaUser className="icon" />
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="input-group">
            <FaCommentDots className="icon" />
            <textarea name="message" placeholder="Your Message" rows="5" required />
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
