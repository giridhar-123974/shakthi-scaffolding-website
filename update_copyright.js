const fs = require('fs');

const files = [
  'index.html',
  'about.html',
  'services.html',
  'projects.html',
  'safety.html',
  'gallery.html',
  'contact.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('2025')) {
    content = content.replace(/&copy;\s*2025\s+Shakthi\s+Scaffolding/g, '&copy; 2026 Shakthi Scaffolding');
    content = content.replace(/©\s*2025\s+Shakthi\s+Scaffolding/g, '© 2026 Shakthi Scaffolding');
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file} to 2026`);
  } else {
    console.log(`No 2025 found in ${file}`);
  }
}
