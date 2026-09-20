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
            <span className="tag-num">&lt;p&gt;</span>Full-Stack Developer &amp; Security Enthusiast<span className="tag-num">&lt;/p&gt;</span>
          </p>

          <div className="hero-tagline">
            <span className="badge badge-glow">FULL-STACK DEVELOPER</span>
            <span className="badge badge-glow">UI/UX ENTHUSIAST</span>
            <span className="badge badge-glow">OPEN SOURCE CONTRIBUTOR</span>
          </div>

          <div className="hero-actions">
            <a href="#about" className="btn btn-primary">View Profile</a>
            <a href="#projects" className="btn btn-outline">See Projects</a>
          </div>

          <ScrollCue />
        </div>

        <div className="hero-orbit">
          <OrbitButton />
        </div>
      </div>
    </section>
  )
}

export default Hero
