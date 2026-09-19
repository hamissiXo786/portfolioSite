import './OrbitButton.css'

const OUTER_DOTS = [0, 100, 200]
const INNER_DOTS = [40, 160, 280]

function OrbitButton() {
  return (
    <a href="#contact" className="orbit-button" aria-label="Download CV">
      <span className="orbit-ring orbit-ring-outer">
        {OUTER_DOTS.map((deg) => (
          <span key={deg} className="orbit-dot" style={{ transform: `rotate(${deg}deg) translateX(90px)` }} />
        ))}
      </span>
      <span className="orbit-ring orbit-ring-inner">
        {INNER_DOTS.map((deg) => (
          <span key={deg} className="orbit-dot" style={{ transform: `rotate(${deg}deg) translateX(64px)` }} />
        ))}
      </span>
      <span className="orbit-center">
        <span className="tag-num">&lt;</span>Download CV<span className="tag-num">/&gt;</span>
      </span>
    </a>
  )
}

export default OrbitButton
