import { FaGithub, FaGlobe } from 'react-icons/fa'
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
        <a href="https://github.com/hamissiXo786" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://hamissi.co.za" target="_blank" rel="noreferrer" aria-label="Website"><FaGlobe /></a>
      </div>

      <p className="footer-copy">Copyright © {new Date().getFullYear()}. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
