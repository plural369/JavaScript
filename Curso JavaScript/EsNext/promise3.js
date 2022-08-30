function gerarNumeros(min,max){
    if(min > max){
        [max,min] = [min,max]
    }

    return new Promise(resolver => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolver(aleatorio)
    })
}

gerarNumeros(10,60).then(num => num * 10).then(numx10 => `O numero gerado foi ${numx10}`).then(console.log)