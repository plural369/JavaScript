// ES8: objec.values/ object.entries

const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhoras na notação literal
const nome = "Carla"
const pessoa = {
    nome,
    ola() {
        return 'Oi mundo'
    }
}
console.log(pessoa.nome, pessoa.ola())
//Class
class Animal {}
class Cachorro extends Animal{
    latir(){
        return 'Au Au'
    }
}
console.log(new Cachorro().latir())