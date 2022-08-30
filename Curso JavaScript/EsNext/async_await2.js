function gerarNumeros(min,max, numerosProibidos){
    if(min > max){ [max,min] = [min,max]}

    return new Promise((resolver,reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)){
            reject('Número repetido!')
        } else{
        resolver(aleatorio)
        }
    })
}

async function gerarMegaSena(qtddeNumeros, tentativas = 1){
    
    try{
        const numeros = []
        for(let _ of Array(qtddeNumeros).fill()){
            numeros.push(await gerarNumeros(1, 60, numeros))
        }
        return numeros
    } catch(e){
        if(tentativas > 10)
        {
            throw "Que chato!!"
        } else{
            return gerarMegaSena(qtddeNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(15)
.then(console.log)
.catch(console.log)