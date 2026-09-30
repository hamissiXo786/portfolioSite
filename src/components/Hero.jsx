import OrbitButton from './OrbitButton'
import ScrollCue from './ScrollCue'
import './Hero.css'

function Hero() {
  return (
    <section id="top" className="hero container">
      <div className="hero-grid">
        <div className="hero-text">
          <p className="hero-code-line">
            <span className="tag-num">&lt;p&gt;</span>This is<span className="tag-num">&lt;/p&gt;</span>
          </p>

          <h1 className="hero-title gradient-text">
            <span className="tag-num">&lt;h1&gt;</span>
            <span className="hero-name">Hamissi</span>
            <span className="tag-num">&lt;/h1&gt;</span>
          </h1>

          <p className="hero-code-line">
            <span className="tag-num">&lt;p&gt;</span>Network Administrator &amp; Software Developer<span className="tag-num">&lt;/p&gt;</span>
          </p>

          <div className="hero-tagline">
            <span className="badge badge-glow">NETWORK ADMIN / ANALYST</span>
            <span className="badge badge-glow">SOFTWARE DEVELOPER</span>
            <span className="badge badge-glow">MANAGED WI-FI &amp; MONITORING</span>
          </div>

          <div className="hero-actions">
            <a href="#about" className="btn btn-primary">View Profile</a>
            <a href="#projects" className="btn btn-outline">See Projects</a>
          </div>
        </div>

        <div className="hero-orbit">
          <OrbitButton />
        </div>

        <ScrollCue />
      </div>
    </section>
  )
}

export default Hero
