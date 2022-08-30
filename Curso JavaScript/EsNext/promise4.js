function gerarNumeros(min,max){
    if(min > max){
        [max,min] = [min,max]
    }

    return new Promise(resolve => {
        setTimeout(function(){
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)}, 2000)
    })
}

function gerarVariosNumeros(){
    return Promise.all([
    gerarNumeros(1, 60, 4000),
    gerarNumeros(1, 60, 1000),
    gerarNumeros(1, 60, 500),
    gerarNumeros(1, 60, 3000),
    gerarNumeros(1, 60, 2000),
    ])
}
console.time('promise')
gerarVariosNumeros().then(numeros => console.log(numeros))
.then(() => {    
    console.timeLog('promise')
    console.timeEnd('promise')
})
