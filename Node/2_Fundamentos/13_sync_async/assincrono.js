const fs = require('fs')

console.log('Inicio')

fs.writeFile('arquivo.txt', 'Estou testando este arquivo', function(err){
    setTimeout(() => {
        console.log('Arquivo criado!')
    }, 1000)
})

console.log('Fim')