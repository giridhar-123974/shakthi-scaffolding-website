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
  if (content.includes('<b>SHAKTHI</b>')) {
    content = content.replace(/<b>SHAKTHI<\/b>/g, '<span class="brand-title">SHAKTHI</span>');
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Replaced <b> in ${file}`);
  }
}
