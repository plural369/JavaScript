//não aceita repetição//nãoindexado

const time = new Set()

time.add('Corinthians')
time.add('Palmeiras')
time.add('São Paulo')
time.add('Corinthians')

console.log(time)
console.log(time.size)
console.log(time.has('corinthians'))
console.log(time.has('Corinthians'))
time.delete('Palmeiras')
console.log(time.has('Palmeiras'))

const nomes = ['Luan', 'Garbe', 'Tiagão', 'Gabriel', 'Luan']
const nomesSet = new Set(nomes)

console.log(nomesSet)