# Portfolio Site

A personal portfolio built with React + Vite, styled with a neon
red/blue/pink/purple cyberpunk theme. Ships as static files for
upload to cPanel (or any static host).

## Development

```bash
npm install
npm run dev
```

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
- `src/components/About.jsx` and `Hero.jsx` — name, role, and bio text.

## Credits

Skill logos come from [Devicon](https://devicon.dev) (MIT); the logos themselves remain trademarks of their respective owners.
