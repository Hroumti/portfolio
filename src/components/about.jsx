import "../styles/about.css"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ParticleBackground from './ParticleBackground';

const About = () => {
  

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
      className="about-container"
      style={{ position: 'relative' }}
    >
      <ParticleBackground />
      
      <div className="about-content" style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="about-title">About Me</h1>
        <p className="about-text">
I’m Omar, a full stack developer-in-progress with a focus on creating practical, well-crafted web applications. When I’m not coding, I’m likely exploring new tools, learning new languages, or diving into the details of how things work under the hood.        </p>

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
                    <li>MongoDB</li>
                </ul>
            </div>
            <div className="skill-div">
                <h3>Tools</h3>
                <ul>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>GitLab</li>
                    <li>VS Code</li>
                    <li>Docker</li>
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
