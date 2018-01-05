const fs = require('fs');
const cheerio = require('cheerio');
const moment = require('moment');
const indexFilePath = 'dist/index.html';

fs.readFile(indexFilePath, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    const $ = cheerio.load(data, {decodeEntities: false});
    const releaseDate = moment().format('YYYY-MM-DD HH:mm');
    $('meta').last().append(`<meta name="releaseDate" content="${releaseDate}"/>`);
    // now write that file back
    fs.writeFile(indexFilePath, $.html(), function (err) {
        if (err) return console.log(err);
        console.log('Successfully rewrote index html');
    });
});