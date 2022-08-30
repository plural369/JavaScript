const fs = require('fs')

const produto = {
    nome: "Notebook",
    preco: 2500.00,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'Arquivos salvo!')
})