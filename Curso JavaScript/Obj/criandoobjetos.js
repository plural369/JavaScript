//usando a notação literal
const obj = {}
console.log(obj)

//object em js 

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções contrutoras
function Produto(nome, preco, desc){ 
    this.nome = nome // atributo publico está visivel
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta',7.99, 0.15)

console.log(p1.getPrecoComDesconto())

// função factory

function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}