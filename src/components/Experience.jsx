import './Experience.css'

const jobs = [
  {
    title: 'Network Administrator / Analyst (Level 1)',
    org: 'Datavalet',
    date: '2024 — Present',
    summary:
      'Datavalet is a managed technology services provider that designs, deploys, secures, and monitors Wi-Fi and network environments for hotels, retail, healthcare, residential, and education clients.',
    blocks: [
      {
        heading: 'Responsibilities',
        items: [
          'Help manage a variety of client network types',
          'Assist with troubleshooting end devices, modems, switches, and firewalls',
          'Monitor and manage networks using Cisco Meraki and Aruba AirWave',
          'Work with Ruckus and HPE networking devices',
        ],
      },
    ],
  },
  {
    title: 'Lecturer',
    date: '2022 — 2024',
    blocks: [
      {
        heading: 'Teaching Responsibilities',
        items: [
          'Robotics in C — lectures, labs, and grading',
          'Python Programming — coding sessions and assessment',
          'Mobile App Development with Flutter — curriculum and project supervision',
          'Networking — concepts, practical configuration labs, and evaluation',
        ],
      },
      {
        heading: 'Administrative Tasks',
        items: [
          'Curriculum development and lesson planning',
          'Student academic and career advising',
          'Departmental and institutional committee participation',
          'Attendance and grade record keeping and reporting',
        ],
      },
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="section container">
      <h2 className="section-heading gradient-text">Experience</h2>
      <p className="section-subheading">Networks, code, and the classroom</p>

      <div className="experience-list">
        {jobs.map((job) => (
          <div key={job.title} className="experience-card glow-border">
            <div className="experience-header">
              <h3>
                {job.title}
                {job.org && <span className="experience-org"> · {job.org}</span>}
              </h3>
              <span className="experience-date">{job.date}</span>
            </div>

            {job.summary && <p className="experience-summary">{job.summary}</p>}

            {job.blocks.map((block) => (
              <div key={block.heading} className="experience-block">
                <h4>{block.heading}</h4>
                <ul>
                  {block.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
