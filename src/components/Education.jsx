import './Education.css'

const education = [
  {
    date: '2018 — 2021',
    school: 'Durban University of Technology',
    qualification: 'National Diploma in ICT: Application Development',
  },
  {
    date: '2013 — 2017',
    school: 'Burnwood Secondary School',
    qualification: 'National Senior Certificate',
  },
]

function Education() {
  return (
    <section id="education" className="section container">
      <h2 className="section-heading gradient-text">Education</h2>
      <p className="section-subheading">Where the foundations were built</p>

      <div className="grid grid-2">
        {education.map((entry) => (
          <div key={entry.school} className="education-card glow-border">
            <span className="education-date">{entry.date}</span>
            <h3>{entry.school}</h3>
            <p>{entry.qualification}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
