import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer container">
      <div className="footer-logo gradient-text">HAMISSI</div>

      <nav className="footer-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="footer-socials">
        <a href="#" aria-label="GitHub"><FaGithub /></a>
        <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="#" aria-label="Twitter"><FaTwitter /></a>
      </div>

      <p className="footer-copy">Copyright © {new Date().getFullYear()}. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
