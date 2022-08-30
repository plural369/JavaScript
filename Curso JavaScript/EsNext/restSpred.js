// operador ... rest(juntar)/ spread(espalahar)
//usar rest com parâmetro de função


//usar spreed com objeto
const funcionario = {nome: 'Gabriel', idade: 20}
const clone = {ativo: true, id: 0, ...funcionario}
console.log(clone)

//usar spred em array 

const nomes = ['Luan', 'Lucas', 'Tiagão']
const clone2 = ['Paulo', ...nomes, 'Lucas A']
console.log(clone2)