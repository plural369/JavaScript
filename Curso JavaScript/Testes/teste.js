function maior(numero, numero2){
    if(numero > numero2){
        console.log('O numero 1 é o maior: ',numero)
    }

    else if(numero2 > numero){
        console.log('O numero 2 é o maior: ', numero2)
    }

    else{
        console.log('Os dois são iguais: ',numero)
        console.log('Os dois são iguais: ',numero2)
    }
}

maior(10,10)


// fizzbuzz
//Divisivel por 3 => Fizz
//Divisivel por 5=> Buzz
//Divisivel por 3 e 5=> FizzBuzz
//Não divisivel por 3 ou 5
// Não é um numero => Não é um numero.

function fizzBuzz(entrada){
    if(typeof entrada !== 'number'){
        return 'Não é um número';
    }
    if(entrada % 3 === 0 && entrada % 5 ===0){
        return 'FizzBuzz';
    }
    if(entrada % 3 === 0){
        return 'Fizz';
    }
    if(entrada % 5 === 0){
        return 'Buzz';
    }
    return entrada;

}

//obejto

function compPc(processador,memoria,fonte,placa_mae,gabinete){
    return{
        processador,
        memoria,
        fonte,
        placa_mae,
        gabinete
    }
}

const equipamentos = compPc('intel','8gb','corsair','asus','gamer');

console.log(equipamentos);

//construtores

function Pc(processador, memoria, fonte, placa_mae, gabinete){
    this.processador = processador,
    this.memoria = memoria,
    this.fonte = fonte,
    this.placa_mae = placa_mae,
    this.gabinete = gabinete
}

const ep = new Pc('amd','8gb','corsair','asus','gamer')

console.log(ep)

// natureza dinâmica do objeto
//adc dados no objeto
ep.dados = 1000;

//copiando obj

const novoep = Object.assign({
    placa_de_video:'RTX 3060'
},ep);

const novoep2 = {...ep};

console.log(novoep2)
console.log(novoep)

//Template Literal

const mensagem = 'Olá, seja bem vindo.'

const outra = `Oi, seja bem cindo 
ao glpi`
