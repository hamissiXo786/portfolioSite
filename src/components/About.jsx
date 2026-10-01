import { services, networking, languages, frameworks, tools } from '../data/skills'
import './About.css'

function About() {
  return (
    <section id="about" className="section container">
      <div className="about-header">
        <h2 className="about-name"><span id="about-heading-text">Hamissi</span></h2>
        <p className="about-role">
          <span className="gradient-text">Network Administrator / Analyst (L1)</span> | Software Developer
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
            I'm Muhammad Hamissi, a <strong className="hl">Level 1 Network Administrator / Analyst</strong> at{' '}
            <strong className="hl">Datavalet</strong>, a managed technology services provider that designs,
            deploys, and monitors Wi-Fi and network environments for hotels,
            retail, healthcare, residential, and education clients. For the past
            two years I've helped manage a range of networks and troubleshoot end
            devices, modems, switches, and firewalls, working day to day with{' '}
            <strong className="hl">Cisco Meraki</strong>, <strong className="hl">Aruba AirWave</strong>, <strong className="hl">Ruckus</strong>, and <strong className="hl">HPE</strong> networking gear.
            Alongside the network work I'm a software developer with a
            problem-solving focus, using enterprise-level languages and
            frameworks to deliver customer-first solutions, and I've lectured
            Networking, Python, Flutter, and Robotics.
          </p>

          <div className="whoami-info">
            <dl>
              <dt>user</dt><dd>hamissi</dd>
              <dt>role</dt><dd>Network Administrator / Analyst (L1)</dd>
              <dt>focus</dt><dd>Network Management &amp; Troubleshooting</dd>
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
            <h4>Networking</h4>
            <div className="badge-row">
              {networking.map((n) => <span key={n.name} className="badge">{n.name}</span>)}
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
