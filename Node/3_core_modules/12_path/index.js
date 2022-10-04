const path = require('path')

const customPath = '/relatorios/matheus/realatorio.pdf'

console.log(path.dirname(customPath))
console.log(path.basename(customPath))
console.log(path.extname(customPath))

console.log('------------------Path Absoluto---------------------')
// path absoluto

console.log(path.resolve('teste.txt'))

console.log('------------------Formar Path---------------------')
// formar path

const midFolder = 'relatórios'
const fileName = 'matheus.txt'

const finalPath = path.join('/','arquivos',midFolder, fileName)

console.log(finalPath)