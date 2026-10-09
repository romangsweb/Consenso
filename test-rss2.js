const cheerio = require('cheerio');
fetch('https://news.google.com/rss/search?q=mexico&hl=es-419&gl=MX&ceid=MX:es-419')
  .then(res => res.text())
  .then(async xml => {
    const $xml = cheerio.load(xml, { xmlMode: true });
    const items = $xml('item').slice(0, 1).toArray();
    const url = $xml(items[0]).find('link').text();
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const text = await res.text();
    console.log("HTML:", text.substring(0, 1000));
  });
