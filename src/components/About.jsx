import { services, certifications, programmingLanguages, devTools } from '../data/skills'
import './About.css'

function About() {
  return (
    <section id="about" className="section container">
      <div className="about-header">
        <h2 className="about-name"><span id="about-heading-text">Hamissi</span></h2>
        <p className="about-role">
          <span className="gradient-text">Full-Stack Developer</span> | Building Bold Digital Experiences
        </p>
      </div>

      <div className="terminal-card glow-border">
        <div className="terminal-titlebar">
          <span className="terminal-dot red" />
          <span className="terminal-dot yellow" />
          <span className="terminal-dot green" />
          <span>whoami — bash</span>
        </div>

        <div>
          <div className="whoami-info">
            <dl>
              <dt>user</dt><dd>hamissi</dd>
              <dt>role</dt><dd>Full-Stack Developer</dd>
              <dt>focus</dt><dd>Web Applications</dd>
              <dt>education</dt><dd>B.Sc. Computer Science</dd>
              <dt>location</dt><dd>Remote / Worldwide</dd>
            </dl>
          </div>

          <p className="about-bio">
            I specialize in building fast, accessible, and visually striking web
            applications from front to back. My toolkit spans modern JavaScript
            frameworks, RESTful APIs, and cloud deployment — currently exploring
            real-time collaboration tools.
          </p>

          <a href="#contact" className="btn btn-primary btn-sm">Download Resume</a>
        </div>

        <div className="whoami-badges">
          <div>
            <h4>Services</h4>
            <div className="badge-row">
              {services.map((s) => <span key={s} className="badge">{s}</span>)}
            </div>
          </div>

          <div>
            <h4>Certifications</h4>
            <div className="badge-row">
              {certifications.map((c) => <span key={c} className="badge">{c}</span>)}
            </div>
          </div>

          <div>
            <h4>Programming Languages</h4>
            <div className="badge-row">
              {programmingLanguages.map((l) => <span key={l.name} className="badge">{l.name}</span>)}
            </div>
          </div>

          <div>
            <h4>Developer Tools</h4>
            <div className="badge-row">
              {devTools.map((t) => <span key={t} className="badge">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
