const fs = require('fs');
for (const file of ['App.css', 'index.css']) {
  const css = fs.readFileSync('extracted_src/' + file, 'utf8');
  for (const match of css.matchAll(/(\.[^{]+brand[^{]*\{[^}]+\})/gi)) {
    console.log(file, '-->', match[0]);
  }
}
