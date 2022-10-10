const express = require('express')
const app = express()
const port = 3000//variavel ambiente

app.get('/', (req,res) =>{
    res.send('Hello world')
})

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})