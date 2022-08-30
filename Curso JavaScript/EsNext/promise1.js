let nome = new Promise(function(cumprirAlgo){
    cumprirAlgo(
        {
            nome: 'Gabriel',
            nome2: 'Lucas',
            nome3: 'Luan'
        })
})

nome.then(function(valor){
    console.log(valor)
})

let real = new Promise(function(valor){
    valor(10)
})

real.then(function(reais){
    console.log(reais)
})

let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Beatriz', 'Gabriel', 'Luan', 'Garbe'])
})

p.then(valor => valor[0]).then(valor => valor[0]).then(letra => letra.toLowerCase()).then(console.log)