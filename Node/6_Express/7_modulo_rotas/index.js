const express = require('express')
const app = express()
const port = 3000//variavel ambiente
const path = require('path')

//ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

const basePath = path.join(__dirname, 'templates')

app.get('/', (req,res) =>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})
