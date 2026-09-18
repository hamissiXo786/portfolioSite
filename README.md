# Portfolio Site

A personal portfolio built with React + Vite, styled with a neon
red/blue/pink/purple cyberpunk theme. Ships as static files for
upload to cPanel (or any static host).

## Development

```bash
npm install
npm run dev
```

## Contact Form

The contact form (`src/components/Contact.jsx`) submits to
[Formspree](https://formspree.io):

1. Create a free form at https://formspree.io and copy its form ID
   (the part after `/f/` in the endpoint URL it gives you).
2. Copy `.env.example` to `.env` and set:
   ```
   VITE_FORMSPREE_ID=your_form_id
   ```
3. Restart `npm run dev` after adding the env var.

If `VITE_FORMSPREE_ID` is left unset, submitting the form instead opens
a pre-filled `mailto:` link to the address in `src/data/config.js`
(`CONTACT_EMAIL`) — update that with your real email.

## Building for Production

```bash
npm run build
```

This outputs static files to `dist/`. `vite.config.js` sets
`base: './'` so the build works whether it's uploaded to your cPanel
account's `public_html/` root or a subdirectory.

## Deploying to cPanel

1. Run `npm run build`.
2. Upload everything **inside** `dist/` (not the `dist` folder itself)
   into `public_html/` (or a subfolder, e.g. `public_html/portfolio/`)
   via cPanel's File Manager or FTP.
3. Visit your domain to confirm it loads correctly.

## Customizing Content

- `src/data/skills.js` — security tools, programming languages, web tech, certifications, services, dev tools.
- `src/data/projects.js` — project cards (title, description, tech stack, links).
- `src/data/config.js` — fallback contact email.
- `src/components/About.jsx` and `Hero.jsx` — name, role, and bio text.
