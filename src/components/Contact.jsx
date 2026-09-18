import { useState } from 'react'
import { CONTACT_EMAIL } from '../data/config'
import './Contact.css'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', consent: false })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error' | null

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.consent) return

    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '', consent: false })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section container">
      <h2 className="section-heading gradient-text">Get in Touch</h2>
      <p className="section-subheading">
        Have questions or need assistance? I&apos;m here to help with any projects.
      </p>

      <form className="contact-form-wrapper glow-border" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name*</label>
          <input id="name" name="name" type="text" placeholder="Jane Doe" required value={form.name} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address*</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" required value={form.email} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Tell me about your project..." value={form.message} onChange={handleChange} />
        </div>

        <label className="form-consent">
          <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} required />
          I acknowledge and consent to the storage of my submitted information.
        </label>

        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Submit'}
        </button>

        {status === 'success' && <p className="form-status success">Message sent — thanks for reaching out!</p>}
        {status === 'error' && <p className="form-status error">Something went wrong. Please try again later.</p>}
      </form>
    </section>
  )
}

export default Contact
