function criarProduto(nome,produto){
    return{
        nome,
        produto,
        desconto: 0.1
    }
}
console.log(criarProduto('Gabriel', 1000))

function calculadora(tipo, a, b){
        if(tipo === 'soma'){
            return a + b
        }

        else if(tipo === 'mult'){
            return a * b 
        }

        else if(tipo === 'sub'){
            return a - b 
        }

        else if(tipo === 'div'){
            return a / b 
        }
}

console.log(calculadora('soma', 10, 15))
console.log(calculadora('mult', 10, 15))
console.log(calculadora('div', 10, 15))
console.log(calculadora('sub', 10, 15))
