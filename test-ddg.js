const cheerio = require('cheerio');
fetch('https://html.duckduckgo.com/html/?q=' + encodeURIComponent('noticias mexico'))
  .then(res => res.text())
  .then(html => {
    const $ = cheerio.load(html);
    const urls = $('.result__url').map((i, el) => $(el).attr('href')).get();
    console.log("URLs:", urls);
  });
