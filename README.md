# PMP Website — Project Management at Purdue

## Project Structure

```
pmp-website/
│
├── build.js                  ← Build script: stitches src/ into dist/
├── watch.js                  ← Dev mode: auto-rebuild + local server
├── package.json
│
├── dist/                     ← BUILT OUTPUT (deploy this folder)
│   └── index.html
│
├── src/
│   ├── layouts/
│   │   └── base.html         ← HTML shell with {{STYLES}}, {{CONTENT}}, {{SCRIPTS}}
│   │
│   ├── styles/
│   │   └── base/             ← Global styles shared across all components
│   │       ├── variables.css ← Design tokens (colors, shadows, spacing)
│   │       ├── reset.css     ← Browser reset & body defaults
│   │       └── utilities.css ← Shared classes (buttons, forms, animations, section layout)
│   │
│   ├── components/           ← One folder per section — HTML + CSS co-located
│   │   ├── nav/
│   │   │   ├── nav.html
│   │   │   └── nav.css
│   │   ├── hero/
│   │   │   ├── hero.html
│   │   │   └── hero.css
│   │   ├── about/
│   │   │   ├── about.html
│   │   │   └── about.css
│   │   ├── projects/
│   │   │   ├── projects.html
│   │   │   └── projects.css
│   │   ├── recruitment/
│   │   │   ├── recruitment.html
│   │   │   └── recruitment.css
│   │   ├── contact/
│   │   │   ├── contact.html
│   │   │   └── contact.css
│   │   └── footer/
│   │       ├── footer.html
│   │       └── footer.css
│   │
│   └── scripts/
│       └── main.js           ← All site JavaScript
│
├── images/                   ← Put project photos, team photos here
│
├── docs/
│   └── MAINTENANCE.md        ← Step-by-step guide for content updates
│
└── README.md
```

## Quick Start

```bash
node build.js        # Build dist/index.html
npm run watch        # Build + serve on localhost:3000 + auto-rebuild
```

## How It Works

`build.js` reads the layout shell and replaces three placeholders:

| Placeholder    | Filled with                                            |
|----------------|--------------------------------------------------------|
| `{{STYLES}}`   | `styles/base/*.css` + each `components/<name>/<name>.css` |
| `{{CONTENT}}`  | Each `components/<name>/<name>.html` in order           |
| `{{SCRIPTS}}`  | `scripts/main.js`                                       |

Output is a single `dist/index.html` ready to deploy anywhere.

## Adding a New Section

1. Create `src/components/newsection/newsection.html`
2. Create `src/components/newsection/newsection.css`
3. Add `'newsection'` to the `COMPONENTS` array in `build.js` (position = order on page)
4. Run `node build.js`

## Where to Edit

| Task                        | File                                      |
|-----------------------------|-------------------------------------------|
| Application links           | `src/components/recruitment/recruitment.html` |
| Open/close recruitment      | `src/components/recruitment/recruitment.html` |
| Project cards & photos      | `src/components/projects/projects.html`       |
| Mission statement           | `src/components/hero/hero.html`               |
| Social media links          | `src/components/contact/contact.html` + `footer/footer.html` |
| Company partner tags        | `src/components/projects/projects.html`       |
| Nav links                   | `src/components/nav/nav.html`                 |
| Colors & design tokens      | `src/styles/base/variables.css`               |

See `docs/MAINTENANCE.md` for detailed step-by-step instructions.
