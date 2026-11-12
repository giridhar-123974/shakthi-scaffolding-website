async function check() {
  const r = await fetch('https://shakthi-scaffolding.preview.emergentagent.com/');
  const html = await r.text();
  const m1 = html.match(/<a[^>]*class=["']brand["'][^>]*>([\s\S]*?)<\/a>/i);
  if (m1) console.log('HEADER BRAND:', m1[0]);
  const m2 = html.match(/<[^>]*class=["']footer-brand["'][^>]*>([\s\S]*?)<\/[a-z0-9]+>/i);
  if (m2) console.log('FOOTER BRAND:', m2[0]);
}
check();
