import { securityTools, programmingLanguages, webTech } from '../data/skills'
import './Skills.css'

function SkillGrid({ title, items }) {
  const cols = items.length > 3 ? 'skills-grid' : 'grid-3'
  return (
    <div className="skills-group">
      <h3 className="skills-group-title">{title}</h3>
      <div className={`grid ${cols}`}>
        {items.map(({ name, icon: Icon }) => (
          <div key={name} className="skill-tile glow-border">
            <Icon className="skill-icon" />
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
        Tools and technologies I use to build and secure digital products
      </p>

      <SkillGrid title="Security Tools" items={securityTools} />
      <SkillGrid title="Programming Languages" items={programmingLanguages} />
      <SkillGrid title="Web Tech" items={webTech} />
    </section>
  )
}

export default Skills
