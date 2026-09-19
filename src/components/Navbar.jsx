import { useEffect, useState } from 'react'
import './Navbar.css'

const links = [
  { id: 'about', href: '#about', label: 'About', num: '01' },
  { id: 'skills', href: '#skills', label: 'Skills', num: '02' },
  { id: 'projects', href: '#projects', label: 'Projects', num: '03' },
  { id: 'contact', href: '#contact', label: 'Contact', num: '04' },
]

function NavTag({ link, active, onClick }) {
  return (
    <a
      href={link.href}
      className={`nav-tag ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      <span className="tag-num">//{link.num}.</span>{' '}
      <span className="tag-code">&lt;{link.label}/&gt;</span>
    </a>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <div className="navbar-col navbar-col-left">
          {links.slice(0, 2).map((link) => (
            <NavTag key={link.id} link={link} active={activeId === link.id} />
          ))}
        </div>

        <a href="#top" className="navbar-logo">H</a>

        <div className="navbar-col navbar-col-right">
          {links.slice(2).map((link) => (
            <NavTag key={link.id} link={link} active={activeId === link.id} />
          ))}
        </div>

        <button
          type="button"
          className="navbar-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      <nav className={`navbar-mobile-links ${open ? 'open' : ''}`}>
        {links.map((link) => (
          <NavTag
            key={link.id}
            link={link}
            active={activeId === link.id}
            onClick={closeMenu}
          />
        ))}
      </nav>
    </header>
  )
}

export default Navbar
