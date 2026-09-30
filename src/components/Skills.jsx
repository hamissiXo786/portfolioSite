import { networking, languages, frameworks, tools } from '../data/skills'
import './Skills.css'

function SkillGrid({ title, items }) {
  const cols = items.length > 3 ? 'skills-grid' : 'grid-3'
  return (
    <div className="skills-group">
      <h3 className="skills-group-title">{title}</h3>
      <div className={`grid ${cols}`}>
        {items.map(({ name, logo }) => (
          <div key={name} className="skill-tile glow-border">
            <img src={logo} alt="" className="skill-logo" />
            <div className="skill-name">{name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="section container">
      <h2 className="section-heading gradient-text">My Core Skills</h2>
      <p className="section-subheading">
        Network platforms, languages, frameworks, and tools I work with
      </p>

      <SkillGrid title="Networking" items={networking} />
      <SkillGrid title="Languages" items={languages} />
      <SkillGrid title="Frameworks" items={frameworks} />
      <SkillGrid title="Tools" items={tools} />
    </section>
  )
}

export default Skills
