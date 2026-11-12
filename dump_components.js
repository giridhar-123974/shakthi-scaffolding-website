const fs = require('fs');

const content = fs.readFileSync('extracted_src/App.js', 'utf8');

// Clean up webpack noise:
// Remove jsxDEV wrappers or find the original JSX if possible, or print out clean text
// Actually, let's see where components start and end.
const funcs = [...content.matchAll(/function\s+([A-Za-z0-9_]+)\s*\(([^)]*)\)\s*\{/g)];
console.log('Functions found:', funcs.map(f => f[1]));

// Let's write out the entire Home function to a file
const homeStart = content.indexOf('function Home()');
const aboutStart = content.indexOf('function About()');
const homeCode = content.substring(homeStart, aboutStart !== -1 ? aboutStart : homeStart + 15000);

fs.writeFileSync('home_component_raw.js', homeCode);
console.log('Saved home_component_raw.js, length:', homeCode.length);
