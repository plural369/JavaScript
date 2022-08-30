const alunos = [
    {nome: "Gabriel", nota:7.3, bolsista: true},
    {nome: "Gabriel", nota:9.1, bolsista: false},
    {nome: "Gabriel", nota:9.8, bolsista: true},
    {nome: "Gabriel", nota:8.7, bolsista: false}
]

const bolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(bolsistas))

const algbolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algbolsistas))