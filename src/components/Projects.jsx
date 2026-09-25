import { projects, moreProjects } from '../data/projects'
import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="section container">
      <h2 className="section-heading gradient-text">Projects</h2>
      <p className="section-subheading">Check out some of my recent work</p>

      <div className="grid grid-2">
        {projects.map((project) => (
          <div key={project.title} className="project-card glow-border">
            <div className="project-thumb" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-actions">
              <a href={project.url} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Visit Site</a>
            </div>
          </div>
        ))}
      </div>

      <div className="more-projects">
        <h3 className="more-projects-title">More Projects</h3>
        <div className="more-projects-row">
          {moreProjects.map((item) => (
            <a key={item.url} href={item.url} target="_blank" rel="noreferrer" className="badge more-projects-link">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
