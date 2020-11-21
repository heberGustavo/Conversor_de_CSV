// Necessario instalar a biblioteca EJS

const ejs = require('ejs');

class HtmlParser{
    static async Parser(table){
        return await ejs.renderFile('./table.ejs', { header: table.header, rows: table.body})
    }
}

module.exports = HtmlParser;