const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
require('./api/produto')(app,'com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(saudacao('Gabriel'))

app.use('/borabill',(req,res, next) => {
    console.log('Será que serei chamado?')
    next()
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpos', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte){
    //     corpo += parte
    // })

    // req.on('end', function(){
    //     res.send(corpo)
    // })
    res.send(req.body)
})

app.get('/clientes/:id', (req,res) => {
    res.send(`Cliente ${req.params.id} selecionado`)
})


app.get('/borabill',(req, res) => {
    res.json({
        data: [
        {id: 1, name: 'Gabriel'},
        {id: 2, name: 'Bia'},
        {id: 3, name: 'Dudu'}
    ],
    count: 30,
    skip:0,
    limit:3,
    status:200
})

app.use('/borabill',(req,res) => {
    console.log('Será que serei chamado?')

})
    // res.json({
    //     name: 'ipad 32bb',
    //     price: 1899,
    //     discount: 0.12
    // })

    //res.send('Estou bem')
})

app.listen(3000, () => {
    console.log('Backend executando2....')
})
