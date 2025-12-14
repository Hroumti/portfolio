import {Link} from "react-router-dom"
import "../styles/projects.css"
import ParticleBackground from "./ParticleBackground"
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
    return (
        <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container"
      style={{ position: 'relative' }}>
        <ParticleBackground/>
            <div className="projects">
                <h1>Projects</h1>
                <div className="projects-container">
                    <div className="project">
                        <div className="img">
                            <img src="/obarakat-landing.png" alt="landing-page-image" />
                        </div>
                        <div className="content">
                            <div className="text-content">
                                <h2>Obarkat-ENCG</h2>
                                <p>**Obarakat-ENCG** is an all-in-one educational platform designed to simplify access to academic resources. It enables students to browse, preview, and download courses and tutorials (TDs), while providing administrators with advanced management tools.</p>
                            </div>
                            <span className="actions">
                                <Link to="/obarakat"><FiArrowRight /> View Project</Link>
                                <a href="https://github.com/obarakat-encg/obarakat-encg-app" target="_blank"><FaGithub /> Github Repository</a>
                                <a href="https://obarakat-encg.net/" target="_blank"><FiExternalLink /> Live Demo</a>
                            </span>
                        </div>
                    </div>
                    <div className="project">
                        <div className="img">
                            <img src="/3d-landing.png" alt="3D Landing Page" />
                        </div>
                        <div className="content">
                            <div className="text-content">
                                <h2>BIM app (No official name yet)</h2>
                                <p>A modern **3D objects marketplace** built with **React and Vite**. Browse, search, and download premium 3D models.</p>
                            </div>
                            <span className="actions">
                                <Link to="/bimApp"><FiArrowRight /> View Project</Link>
                                <a href="https://github.com/iMex-1/3d-hustle" target="_blank"><FaGithub /> Github Repository</a>
                                <a href="https://3d-hustle.pages.dev/" target="_blank"><FiExternalLink /> Live Demo</a>
                            </span>
                        </div>
                    </div>
                
                </div>
            </div>
            <div className="button-container">
            <Link to="/" className="button">Home</Link>
            <Link to="/about" className="button">About Me</Link>
            <Link to="/contact" className="button">Contact Me</Link>
            </div>
        </motion.div>
    )
}