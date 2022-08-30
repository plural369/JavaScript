// criar de fomar literal   

function fun1(){}
// armazenar em uma variavel 
const fun2 = function(){}

//armazenar em um array
const array = [function(a,b){return a + b},fun1, fun2]
console.log(array[0](2, 3))

// armazenar um atributo do objet 

const obj = {}
obj.falar = function(){ return 'Olá'}
console.log(obj.falar())

//passar funcao com parametros

function run (fun){
    fun()
}

run(function(){console.log('Executando...')})

//um função pode retornar/ conter uma função

function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)