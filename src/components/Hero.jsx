import './Hero.css'

function Hero() {
  return (
    <section id="top" className="hero container">
      <h1 className="hero-title gradient-text">
        WELCOME TO ALEX&apos;S PORTFOLIO
      </h1>

      <div className="hero-tagline">
        <span className="badge badge-glow">FULL-STACK DEVELOPER</span>
        <span className="badge badge-glow">UI/UX ENTHUSIAST</span>
        <span className="badge badge-glow">OPEN SOURCE CONTRIBUTOR</span>
      </div>

      <div className="hero-actions">
        <a href="#about" className="btn btn-primary">View Profile</a>
        <a href="#projects" className="btn btn-outline">See Projects</a>
      </div>
    </section>
  )
}

export default Hero
