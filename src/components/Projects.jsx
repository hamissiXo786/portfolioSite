import { projects } from '../data/projects'
import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="section container">
      <h2 className="section-heading gradient-text">Projects</h2>
      <p className="section-subheading">Check out some of my recent work</p>

      <div className="grid grid-3">
        {projects.map((project) => (
          <div key={project.title} className="project-card glow-border">
            <div className="project-thumb" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <p className="project-tech">{project.tech}</p>
            <div className="project-actions">
              <a href={project.codeUrl} className="btn btn-outline btn-sm">Code</a>
              <a href={project.demoUrl} className="btn btn-primary btn-sm">Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
