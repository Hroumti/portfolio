import { motion } from "framer-motion";
import { useState } from 'react';
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';
import "../styles/contact.css";
import ParticleBackground from "./ParticleBackground";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent successfully!');
          setIsSubmitting(false);
          e.target.reset();
        },
        (error) => {
          setStateMessage('Failed to send message. Please try again later.');
          setIsSubmitting(false);
        }
      );
  };

  return (
      <>

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container"
      style={{ position: 'relative' }}
    >
        <ParticleBackground />
      
      <div className="contact-content" style={{ position: 'relative', zIndex: 1 }}>
        <span>
            <h1 className="contact-title">Contact Me</h1>
        <p className="contact-description">
          Let's connect! I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and development.
        </p>
        </span>

        <form onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="form-textarea"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="submit-button"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {stateMessage && <p className="message-status">{stateMessage}</p>}
        </form>
        <div className="button-container">
          <Link to="/" className="button">Home</Link>
          <Link to="/projects" className="button">Projects</Link>
          <Link to="/about" className="button">About Me</Link>
        </div>
        
      </div>
      
    </motion.div>
      </>
  );
};

export default Contact;
