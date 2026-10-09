const cheerio = require('cheerio');
fetch('https://lite.duckduckgo.com/lite/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: 'q=' + encodeURIComponent('noticia "reforma judicial" hoy mexico')
})
  .then(res => res.text())
  .then(html => {
    const $ = cheerio.load(html);
    const snippets = $('.snippet').map((i, el) => $(el).text().trim()).get();
    console.log(snippets);
  });
