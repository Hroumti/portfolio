import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/projectDetails.css";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import ParticleBackground from "./ParticleBackground";

export default function BIMApp() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container"
      style={{ position: 'relative' }}
    >
      <ParticleBackground />

      <div className="obarakat-content" style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="obarakat-title">BIM App</h1>
        <p className="obarakat-description">
          A collaborative project developed with my classmates to create a modern 3D objects marketplace built with React and Vite, designed for browsing, searching, and downloading premium 3D models.
        </p>

        <div className="section">
          <h2>Overview</h2>
          <p>
            BIM App is a sleek and intuitive marketplace for 3D models, tailored for architects, designers, and developers.
            It allows users to explore, preview, and download high-quality 3D models, with a focus on performance, usability, and seamless integration.
          </p>
          <h3>My Role:</h3>
          <p>
            I contributed to the project by implementing <strong>Google Authentication</strong> for user accounts and designing the <strong>data structure</strong> for storing 3D model metadata in the database.
          </p>
          <h3>Key Objectives:</h3>
          <ul>
            <li>User Experience: Intuitive and responsive interface for browsing and downloading 3D models</li>
            <li>Performance: Fast loading and smooth 3D previews</li>
            <li>Searchability: Advanced search and filtering options</li>
            <li>Accessibility: Easy access to premium 3D assets</li>
          </ul>
        </div>

        <div className="section">
          <h2>Features</h2>
          <h3>For Users:</h3>
          <ul>
            <li>Browse and search 3D models by category, tags, or keywords</li>
            <li>Preview 3D models in real-time before downloading</li>
            <li>Download high-quality 3D models</li>
            <li>User accounts for saving favorite models</li>
            <li>Responsive design for seamless use on all devices</li>
          </ul>
          <h3>For Administrators:</h3>
          <ul>
            <li>Upload and manage 3D models</li>
            <li>Organize models into categories and collections</li>
            <li>Monitor user activity and downloads</li>
            <li>Manage user accounts and permissions</li>
          </ul>
          <h3>Security & Performance (My Contributions):</h3>
          <ul>
            <li>Google Authentication: Secure login system using Google Accounts</li>
          </ul>
        </div>

        <div className="section">
          <h2>Technologies</h2>
          <h3>Frontend:</h3>
          <ul>
            <li>React 18</li>
            <li>Vite</li>
            <li>Three.js (for 3D previews)</li>
            <li>React Router DOM</li>
            <li>Tailwind CSS</li>
          </ul>
          <h3>Backend & Services (My Contributions):</h3>
          <ul>
            <li>Google Authentication</li>
            <li>Firebase Realtime Database (data structure and metadata storage)</li>
          </ul>
          <h3>Other Technologies:</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>Cloudinary (for storing 3D model files, set up by a teammate)</li>
            <li>Cloudflare Workers (API and deployment, set up by a teammate)</li>
            <li>JWT Authentication</li>
          </ul>
        </div>

        <div className="section">
          <h2>Challenges & Solutions</h2>
          <p>
            <strong>Challenge:</strong> Implementing a secure and user-friendly authentication system.
          </p>
          <p>
            <strong>Solution:</strong> I integrated Google Authentication to allow users to log in with their Google Accounts, simplifying the registration and login process.
          </p>
          <p>
            <strong>Challenge:</strong> Designing an efficient data structure for storing 3D model metadata.
          </p>
          <p>
            <strong>Solution:</strong> I created a structured schema in MongoDB to store metadata for 3D models, ensuring easy retrieval and organization.
          </p>
        </div>

        <div className="section">
          <h2>What I Learned</h2>
          <ul>
            <li>Implementing Google Authentication for secure and user-friendly login.</li>
            <li>Designing efficient data structures for RTDB to store and retrieve 3D model metadata.</li>
            <li>Collaborating with a team to build a complex marketplace application.</li>
            <li>Understanding the integration of 3D model storage and delivery systems (handled by teammates).</li>
          </ul>
        </div>

        <div className="section">
          <h2>Visuals</h2>
          <div className="visuals-grid">
            <img
              src="3d-landing.png"
              alt="BIM App Homepage"
              className="visual-image"
              onClick={() => window.open("3d-landing.png", "_blank")}
            />
            <img
              src="bimApp-models.png"
              alt="3D Models Marketplace"
              className="visual-image"
              onClick={() => window.open("bimApp-models.png", "_blank")}
            />
            <img
              src="bimApp-admin.png"
              alt="Admin Dashboard"
              className="visual-image"
              onClick={() => window.open("bimApp-admin.png", "_blank")}
            />
          </div>
        </div>

        <div className="project-actions">
          <a
            href="https://3d-hustle.pages.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="action-button"
          >
            <FiExternalLink />
            Live Demo
          </a>
          <a
            href="https://github.com/iMex-1/3d-hustle"
            target="_blank"
            rel="noopener noreferrer"
            className="action-button"
          >
            <FaGithub />
            GitHub Repository
          </a>
        </div>

        <div className="button-container">
          <Link to="/" className="button">Home</Link>
          <Link to="/projects" className="button">Projects</Link>
          <Link to="/about" className="button">About Me</Link>
          <Link to="/contact" className="button">Contact Me</Link>
        </div>
      </div>
    </motion.div>
  );
}
