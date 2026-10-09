const cheerio = require('cheerio');
fetch('https://news.google.com/rss/search?q=mexico&hl=es-419&gl=MX&ceid=MX:es-419')
  .then(res => res.text())
  .then(xml => {
    const $xml = cheerio.load(xml, { xmlMode: true });
    const items = $xml('item').slice(0, 2).toArray();
    items.forEach(item => {
      const title = $xml(item).find('title').text();
      const descHTML = $xml(item).find('description').text();
      const descText = cheerio.load(descHTML)('body').text();
      console.log("TITLE:", title);
      console.log("DESC:", descText);
    });
  });
