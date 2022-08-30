let mostrar = new Promise((resolve) => {
    let caminho = __dirname + '/dados.txt'
    const fs = require('fs')

    let conteudo = fs.readFileSync(caminho,'utf8')

    resolve(conteudo)
})

mostrar.then(valor => valor).then(console.log)



