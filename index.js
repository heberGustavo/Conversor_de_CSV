const Reader = require('./Reader');
const Writer = require('./Writer');
const Processor = require('./Processor');
const Table = require('./Table');
const HtmlParser = require('./HtmlParser');
const PDFWriter = require('./PDFWriter');

var leitor = new Reader();
var escritor = new Writer();

async function main(){
    var dados = await leitor.Read('./usuarios.csv');
    var dadosProcessados = Processor.Process(dados);
    
    var tabela = new Table(dadosProcessados);
    
    var html = await HtmlParser.Parser(tabela);
    escritor.Write(Date.now() + '.html', html); //Cria arquivo HTML
    PDFWriter.WritePDF(Date.now() + '.pdf', html); //Cria arquivo PDF
    
}

main();