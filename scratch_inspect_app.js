const fs = require('fs');
const content = fs.readFileSync('extracted_src/App.js', 'utf8');
const brandIdx = content.indexOf('"brand"');
if (brandIdx !== -1) {
  console.log('--- BRAND ---');
  console.log(content.substring(brandIdx, brandIdx + 1500));
}
