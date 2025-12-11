import '../styles/hero.css'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

export default function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container"
      style={{ position: 'relative' }}>
      
      <ParticleBackground />
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="main-title">OMAR HRROUMTI: Full Stack Web Developer</h1>
        <h3 className="subtitle">Building and deploying robust, client-facing applications from concept to cloud.</h3>
        <div className="button-container">
          <Link to="/projects" className="button">View My Work</Link>
          <Link to="/about" className="button">About Me</Link>
          <Link to="/contact" className="button">Contact Me</Link>
        </div>
      </div>
        
    </motion.div>
  );
}