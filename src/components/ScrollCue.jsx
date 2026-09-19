import './ScrollCue.css'

const PATH = 'M10 4 V64 Q10 84 30 84 H168'

function handleClick(e) {
  e.preventDefault()
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
}

function ScrollCue() {
  return (
    <a href="#about" className="scroll-cue" onClick={handleClick} aria-label="Scroll to the About section">
      <svg viewBox="0 0 200 100" className="scroll-cue-svg" aria-hidden="true">
        <path d={PATH} className="scroll-cue-path" />
      </svg>
      <span className="scroll-cue-node" />
      <span className="scroll-cue-pulse" style={{ offsetPath: `path('${PATH}')` }} />
      <span className="scroll-cue-icon">&lt;/&gt;</span>
    </a>
  )
}

export default ScrollCue
