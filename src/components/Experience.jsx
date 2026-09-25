import './Experience.css'

function Experience() {
  return (
    <section id="experience" className="section container">
      <h2 className="section-heading gradient-text">Experience</h2>
      <p className="section-subheading">Teaching and building, side by side</p>

      <div className="experience-card glow-border">
        <div className="experience-header">
          <h3>Lecturer</h3>
          <span className="experience-date">2022 — Present</span>
        </div>

        <div className="experience-block">
          <h4>Teaching Responsibilities</h4>
          <ul>
            <li>Robotics in C — lectures, labs, and grading</li>
            <li>Python Programming — coding sessions and assessment</li>
            <li>Mobile App Development with Flutter — curriculum and project supervision</li>
            <li>Networking — concepts, practical configuration labs, and evaluation</li>
          </ul>
        </div>

        <div className="experience-block">
          <h4>Administrative Tasks</h4>
          <ul>
            <li>Curriculum development and lesson planning</li>
            <li>Student academic and career advising</li>
            <li>Departmental and institutional committee participation</li>
            <li>Attendance and grade record keeping and reporting</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience
