const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancodedados = require('./bancodedados')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produto', (req, res, next) => {
    console.log('Middleware1...')
    next()
})

app.get('/produto/:id', (req, res, next) => {
    res.send(bancodedados.getProduto(req.params.id))
})

app.post('/produto', (req, res, next) => {
    const produto = bancodedados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.get('/produto', (req, res, next) =>{
    res.send({nome: 'Notebook',preco: 123.45})
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})

//app.use atende a todas urls