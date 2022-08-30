let numrandom = Math.floor(Math.random() * 100)
let num = -1
console.log('---------Bem vindo ao jogo de advinhação!!-----------')
let tentativas = prompt('Digite o numero de tentativas que deseja:')

while(numrandom != num || tentativas != 0 ){
    let num = prompt('Informe seu palpite:')
    
    if(num === numrandom){
        console.log(`Você acertou o numero era: ${numrandom}`)
    }
    else if(num > numrandom){
        console.log(`Que pena você errou, ainda resta: ${tentativas} tentativas`)
        console.log('O numero que você informou é maior do que o correto!')
        tentativas--
    }
    else if(num < numrandom){
        console.log(`Que pena você errou, ainda resta: ${tentativas} tentativas`)
        console.log('O numero que você informou é menor do que o correto!')
        tentativas--
    }
    else{
        console.log('Digite sómente numeros')
    }
}