const cheerio = require('cheerio');
fetch('https://news.search.yahoo.com/rss?p=mexico')
  .then(res => res.text())
  .then(async xml => {
    const $xml = cheerio.load(xml, { xmlMode: true });
    const items = $xml('item').slice(0, 1).toArray();
    if(items.length === 0) { console.log("No items"); return; }
    const url = $xml(items[0]).find('link').text();
    console.log("Fetching:", url);
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    console.log("Status:", res.status);
    const text = await res.text();
    console.log("Content length:", text.length);
  });
