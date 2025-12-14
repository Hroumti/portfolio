import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/projectDetails.css";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import ParticleBackground from "./ParticleBackground";

export default function Obarakat() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container"
      style={{ position: "relative" }}
    >
      <ParticleBackground />

      <div className="obarakat-content" style={{ position: "relative", zIndex: 1 }}>
        <h1 className="obarakat-title">O-Barakat ENCG</h1>
        <p className="obarakat-description">
          A collaborative project developed with my classmates to create a modern web platform for managing and sharing educational resources at the École Nationale de Commerce et de Gestion (ENCG).
        </p>

        <div className="section">
          <h2>Overview</h2>
          <p>
            O-Barakat ENCG is a comprehensive educational platform designed to simplify access to academic resources.
            It allows students to browse, preview, and download courses and tutorials (TDs), while providing administrators with advanced management tools.
          </p>
          <h3>My Role:</h3>
          <p>
            I contributed to the project by setting up the <strong>Firebase Realtime Database</strong>, implementing <strong>Firebase Authentication</strong>,
            integrating <strong>Cloudflare Turnstile</strong> for CAPTCHA, deploying the application through <strong>Cloudflare Pages</strong>,
            and linking the custom domain.
          </p>
          <h3>Key Objectives:</h3>
          <ul>
            <li>Accessibility: Intuitive and responsive interface</li>
            <li>Security: Robust authentication and data protection</li>
            <li>Performance: Fast loading and smooth user experience</li>
            <li>Management: Comprehensive admin tools</li>
          </ul>
        </div>

        <div className="section">
          <h2>Features</h2>
          <h3>For Students:</h3>
          <ul>
            <li>Free navigation: Access courses and TDs without logging in</li>
            <li>Preview: View documents before downloading</li>
            <li>Download: Access files (login required)</li>
            <li>Search: Filter by year and subject</li>
            <li>Responsive interface: Compatible with mobile and desktop</li>
          </ul>
          <h3>For Administrators:</h3>
          <ul>
            <li>User management: Create, edit, and delete users</li>
            <li>File management: Upload, organize, and delete files</li>
            <li>Statistics: Overview of data and metrics</li>
            <li>Access control: Manage permissions and statuses</li>
            <li>Dashboard: Centralized overview</li>
          </ul>
          <h3>Security (My Contributions):</h3>
          <ul>
            <li>Firebase Authentication: Secure login system</li>
            <li>Cloudflare Turnstile: Bot protection</li>
            <li>Rate limiting: Protection against brute force attacks</li>
          </ul>
        </div>

        <div className="section">
          <h2>Technologies</h2>
          <h3>Frontend:</h3>
          <ul>
            <li>React 19</li>
            <li>React Router DOM</li>
            <li>React Icons</li>
            <li>Vite</li>
            <li>CSS3</li>
          </ul>
          <h3>Backend & Services (My Contributions):</h3>
          <ul>
            <li>Firebase Authentication</li>
            <li>Firebase Realtime Database</li>
            <li>Cloudflare R2 Storage</li>
            <li>Cloudflare Workers</li>
            <li>Cloudflare Pages</li>
          </ul>
          <h3>Security & Performance:</h3>
          <ul>
            <li>Cloudflare Turnstile</li>
            <li>ESLint</li>
          </ul>
        </div>

        <div className="section">
          <h2>Challenges & Solutions</h2>
          <p>
            <strong>Challenge:</strong> Setting up a secure authentication system for user accounts.
          </p>
          <p>
            <strong>Solution:</strong> I implemented Firebase Authentication with email/password login and integrated Cloudflare Turnstile for CAPTCHA to prevent bot abuse.
          </p>
          <p>
            <strong>Challenge:</strong> Deploying the application and linking a custom domain.
          </p>
          <p>
            <strong>Solution:</strong> I used Cloudflare Pages for deployment and configured DNS settings to link the custom domain.
          </p>
        </div>

        <div className="section">
          <h2>What I Learned</h2>
          <ul>
            <li>Setting up and configuring Firebase Realtime Database for real-time data synchronization.</li>
            <li>Implementing secure authentication systems using Firebase Authentication.</li>
            <li>Integrating Cloudflare Turnstile for CAPTCHA and bot protection.</li>
            <li>Deploying applications using Cloudflare Pages and linking custom domains.</li>
            <li>Collaborating with a team to build a full-stack application.</li>
          </ul>
        </div>

        <div className="section">
          <h2>Visuals</h2>
          <div className="visuals-grid">
            <img
              src="obarakat-landing.png"
              alt="O-Barakat ENCG Homepage"
              className="visual-image"
              onClick={() => window.open("obarakat-landing.png", "_blank")}
            />
            <img
              src="obarakat-dashboard.png"
              alt="Admin Dashboard"
              className="visual-image"
              onClick={() => window.open("obarakat-dashboard.png", "_blank")}
            />
            <img
              src="obarakat-files.png"
              alt="Courses Page"
              className="visual-image"
              onClick={() => window.open("obarakat-files.png", "_blank")}
            />
            <img
              src="obarakat-login.png"
              alt="Login Page"
              className="visual-image"
              onClick={() => window.open("obarakat-login.png", "_blank")}
            />
          </div>
        </div>

        <div className="project-actions">
          <a
            href="https://obarakat-encg.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="action-button"
          >
            <FiExternalLink />
            Live Demo
          </a>
          <a
            href="https://github.com/obarakat-encg/obarakat-encg-app"
            target="_blank"
            rel="noopener noreferrer"
            className="action-button"
          >
            <FaGithub />
            GitHub Repository
          </a>
        </div>

        <div className="button-container">
          <Link to="/" className="button">
            Home
          </Link>
          <Link to="/projects" className="button">
            Projects
          </Link>
          <Link to="/about" className="button">
            About Me
          </Link>
          <Link to="/contact" className="button">
            Contact Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
