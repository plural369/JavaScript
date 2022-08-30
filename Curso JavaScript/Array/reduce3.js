Array.prototype.reduce2 = function(callback, valorInicial){
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for(let i = 1; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i)
    }   
}

const alunos = [
    {nome: "Gabriel", nota:7.3, bolsista: true},
    {nome: "Gabriel", nota:9.1, bolsista: false},
    {nome: "Gabriel", nota:9.8, bolsista: true},
    {nome: "Gabriel", nota:8.7, bolsista: false}
]
const resultado = alunos.map(a=> a.nota).reduce2(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
},15)