const tecnlogias = new Map()

tecnlogias.set('react', {framework: false})
tecnlogias.set('angular', {framework: true})

console.log(tecnlogias.react)
console.log(tecnlogias.get('react').framework)

const chavesVariadas = new Map([
    [function (){ }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(423, 'b')
console.log(chavesVariadas)