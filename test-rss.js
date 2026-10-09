const cheerio = require('cheerio');
fetch('https://news.google.com/rss/search?q=mexico&hl=es-419&gl=MX&ceid=MX:es-419')
  .then(res => res.text())
  .then(xml => {
    const $xml = cheerio.load(xml, { xmlMode: true });
    const items = $xml('item').slice(0, 2).toArray();
    const urls = items.map(item => $xml(item).find('link').text());
    console.log("URLs:", urls);
  });
