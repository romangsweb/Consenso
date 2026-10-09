const cheerio = require('cheerio');
fetch('https://html.duckduckgo.com/html/?q=' + encodeURIComponent('noticias reforma judicial'))
  .then(res => res.text())
  .then(html => {
    const $ = cheerio.load(html);
    const results = $('.result').map((i, el) => {
      return {
         title: $(el).find('.result__title').text().trim(),
         snippet: $(el).find('.result__snippet').text().trim()
      }
    }).get();
    console.log(results.slice(0, 3));
  });
