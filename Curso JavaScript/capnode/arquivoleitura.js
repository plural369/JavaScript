const fs = require('fs')

// sincrono
let caminho = __dirname + '/arquivo.json'

let conteudo = fs.readFileSync(caminho,'utf8')
console.log(conteudo)

//assincrono...
fs.readFile(caminho,'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host} ${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config)

fs.readdir(__dirname, (err,arquivos) =>{
    console.log('Conteudo da pasta')
    console.log(arquivos)
})