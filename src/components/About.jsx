import { services, languages, frameworks, tools } from '../data/skills'
import './About.css'

function About() {
  return (
    <section id="about" className="section container">
      <div className="about-header">
        <h2 className="about-name"><span id="about-heading-text">Hamissi</span></h2>
        <p className="about-role">
          <span className="gradient-text">Software Developer</span> | Lecturer &amp; Networking Enthusiast
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
          <p className="about-bio">
            I'm Muhammad Hamissi, a software developer with a problem-solving
            focus on building applications that matter — using enterprise-level
            languages and frameworks to deliver solutions with a customer-first
            approach. Alongside development, I lecture in Robotics, Python,
            Flutter, and Networking, which is where a lot of my curiosity for
            the network side of the stack comes from.
          </p>

          <div className="whoami-info">
            <dl>
              <dt>user</dt><dd>hamissi</dd>
              <dt>role</dt><dd>Software Developer</dd>
              <dt>focus</dt><dd>Enterprise Application Development</dd>
              <dt>education</dt><dd>National Diploma: ICT</dd>
              <dt>location</dt><dd>South Africa</dd>
            </dl>
          </div>

          <a href="Muhammad-Hamissi-CV.pdf" download className="btn btn-primary btn-sm">Download Resume</a>
        </div>

        <div className="whoami-badges">
          <div>
            <h4>Services</h4>
            <div className="badge-row">
              {services.map((s) => <span key={s} className="badge">{s}</span>)}
            </div>
          </div>

          <div>
            <h4>Languages</h4>
            <div className="badge-row">
              {languages.map((l) => <span key={l.name} className="badge">{l.name}</span>)}
            </div>
          </div>

          <div>
            <h4>Frameworks</h4>
            <div className="badge-row">
              {frameworks.map((f) => <span key={f.name} className="badge">{f.name}</span>)}
            </div>
          </div>

          <div>
            <h4>Tools</h4>
            <div className="badge-row">
              {tools.map((t) => <span key={t.name} className="badge">{t.name}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
