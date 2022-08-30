const escola = [
    {nome: 'Turma M1',
     alunos: [{
        nome: "Gabriel",
        nota: 9.5
    },
    {
        nome: "Luan",
        nota: 8.5
    }]
    },
    {nome: 'Turma M2',
     alunos: [{
        nome: "Bia",
        nota: 10
    },
    {
        nome: "Eduardo",
        nota: 9.5
    }]
    }
]

const getNotaDoAluno = a => a.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaDaTurma)

console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)