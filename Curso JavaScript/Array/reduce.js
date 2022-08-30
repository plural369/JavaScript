const alunos = [
    {nome: "Gabriel", nota:7.3, bolsista: false},
    {nome: "Gabriel", nota:9.1, bolsista: true},
    {nome: "Gabriel", nota:9.8, bolsista: false},
    {nome: "Gabriel", nota:8.7, bolsista: true}
]

const resultado = alunos.map(a=> a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
},0)

console.log(resultado)