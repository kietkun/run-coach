# RunCoach Pro

Restructured from a single-file HTML + Babel SPA into a standard **Vite + React 18 + Tailwind** project.

## Run

```bash
cd runcoach-clean
npm install
npm run dev
```

Open http://localhost:5173

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Dev server (port 5173)   |
| `npm run build`| Production build → `dist/` |
| `npm run preview` | Preview production build |

## Layout

```
runcoach-clean/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx      # entry
    ├── App.jsx       # full app (ported from original SPA)
    └── index.css     # Tailwind + global styles
```

No backend. Data stays in `localStorage` (athletes, plans, Gemini key) as in the original.
