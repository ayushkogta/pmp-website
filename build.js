/**
 * build.js — Assembles the PMP website from modular source files.
 *
 * Usage:   node build.js
 * Output:  dist/index.html
 *
 * Structure:
 *   src/layouts/base.html          → outer HTML shell
 *   src/styles/base/*.css          → variables, reset, shared utilities
 *   src/components/<name>/<name>.css → per-component styles
 *   src/components/<name>/<name>.html→ per-component markup
 *   src/scripts/main.js            → all JS
 *
 * The build concatenates everything and injects it into the layout
 * via {{STYLES}}, {{CONTENT}}, and {{SCRIPTS}} placeholders.
 */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SRC  = path.join(ROOT, 'src');
const DIST = path.join(ROOT, 'dist');

// ─────────────────────────────────────────
// ORDER MATTERS — this controls the sequence
// ─────────────────────────────────────────

const BASE_STYLES = [
    'src/styles/base/variables.css',
    'src/styles/base/reset.css',
    'src/styles/base/utilities.css',
];

const COMPONENTS = [
    'nav',
    'hero',
    'about',
    'projects',
    'recruitment',
    'contact',
    'footer',
];

// ─────────────────────────────────────────

function read(relPath) {
    const full = path.join(ROOT, relPath);
    if (!fs.existsSync(full)) {
        console.warn(`  ⚠  Missing: ${relPath} — skipping`);
        return '';
    }
    return fs.readFileSync(full, 'utf-8');
}

console.log('Building PMP website...\n');

// 1. Base styles
const baseCSS = BASE_STYLES.map(f => read(f)).join('\n\n');

// 2. Component styles (each component's .css)
const componentCSS = COMPONENTS
    .map(name => read(`src/components/${name}/${name}.css`))
    .join('\n\n');

// 3. Component HTML (each component's .html)
const componentHTML = COMPONENTS
    .map(name => read(`src/components/${name}/${name}.html`))
    .join('\n\n');

// 4. Scripts
const scripts = read('src/scripts/main.js');

// 5. Layout
const layout = read('src/layouts/base.html');

console.log(`  ✓  ${BASE_STYLES.length} base style files`);
console.log(`  ✓  ${COMPONENTS.length} components (html + css each)`);
console.log(`  ✓  scripts/main.js`);

// 6. Assemble
const output = layout
    .replace('{{STYLES}}', baseCSS + '\n\n' + componentCSS)
    .replace('{{CONTENT}}', componentHTML)
    .replace('{{SCRIPTS}}', scripts);

if (!fs.existsSync(DIST)) fs.mkdirSync(DIST, { recursive: true });
fs.writeFileSync(path.join(DIST, 'index.html'), output, 'utf-8');

console.log(`\n  ✓  dist/index.html (${(output.length / 1024).toFixed(1)} KB)`);
console.log('\nDone. Open dist/index.html or run: npm run dev');
