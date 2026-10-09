const cheerio = require('cheerio');
fetch('https://news.google.com/rss/search?q=mexico&hl=es-419&gl=MX&ceid=MX:es-419')
  .then(res => res.text())
  .then(async xml => {
    const $xml = cheerio.load(xml, { xmlMode: true });
    const items = $xml('item').slice(0, 1).toArray();
    const url = $xml(items[0]).find('link').text();
    console.log("Fetching:", url);
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
    console.log("Status:", res.status);
    const text = await res.text();
    console.log("Content length:", text.length);
    console.log("Snippet:", text.substring(0, 200));
  });
