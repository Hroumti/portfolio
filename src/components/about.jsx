import "../styles/about.css"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ParticleBackground from './ParticleBackground';

const About = () => {
  

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="about-container"
      style={{ position: 'relative' }}
    >
      <ParticleBackground />
      
      <div className="about-content" style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="about-title">About Me</h1>
        <p className="about-text">
          Hi, I’m Omar! I’m an aspiring full stack developer with a passion for building dynamic, user-friendly web applications. Currently, I’m studying and working on projects to expand my skills in React, Node.js, and modern web technologies.
        </p>

        <h2>Skills & Technologies</h2>
        <div className="skills-container">
            <div className="skill-div">
                <h3>Front-end</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Redux</li>
                </ul>
            </div>
            <div className="skill-div">
                <h3>Back-end</h3>
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>Firebase RTDB</li>
                    <li>RESTful API</li>
                </ul>
            </div>
            <div className="skill-div">
                <h3>Tools</h3>
                <ul>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>VS Code</li>
                    <li>Postman</li>
                    <li>Heroku</li>
                </ul>
            </div>
        </div>

        <div className="button-container">
            <Link to="/" className="about-button">Home</Link>
            <Link to="/projects" className="about-button">Projects</Link>
            <Link to="/contact" className="about-button">Contact Me</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
