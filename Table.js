class Table{
    constructor(dados){
        //Armazena o cabeçalho e remove a primeira linha
        this.header = dados[0];
        dados.shift(); 

        this.body = dados;
    }

    get RowCount(){
        return this.body.length;
    }

    get ColumnCount(){
        return this.header.length;
    }
}

module.exports = Table;