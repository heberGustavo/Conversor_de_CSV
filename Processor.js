class Processor{
    static Process(dados){
        var a = dados.split("\r\n");
        var row = [];
        
        a.forEach(item => {    
            var x = item.split(';');
            row.push(x);            
        }); 

        return row;
    }
}

module.exports = Processor;