const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: false},
    {nome: 'ipad', preco: 7499, fragil: true},
    {nome: 'iphone', preco: 69, fragil: true},
    {nome: 's20', preco: 59, fragil: false}
]

console.log(produtos.filter(function(p){
    return true
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))