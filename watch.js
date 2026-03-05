/**
 * watch.js — Auto-rebuild on file changes + local server.
 * Usage:  node watch.js   (or: npm run watch)
 */
const { execSync, exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'src');

console.log('Initial build...');
execSync('node build.js', { stdio: 'inherit' });

console.log('\nServing on http://localhost:3000\n');
const server = exec('npx serve dist -l 3000');
server.stdout.pipe(process.stdout);
server.stderr.pipe(process.stderr);

let debounce = null;
fs.watch(SRC, { recursive: true }, (_, filename) => {
    if (debounce) clearTimeout(debounce);
    debounce = setTimeout(() => {
        console.log(`\n  Changed: ${filename} — rebuilding...`);
        try {
            execSync('node build.js', { stdio: 'inherit' });
            console.log('  Reload browser to see changes.\n');
        } catch (e) {
            console.error('  Build failed:', e.message);
        }
    }, 200);
});

console.log('Watching src/ for changes... (Ctrl+C to stop)\n');
