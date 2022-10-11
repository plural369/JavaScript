const express = require('express')
const router = express.Router()

router.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})

const basePath = path.join(__dirname, 'templates')

router.post('/users/save', (req, res) =>{
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos`)

    res.sendFile(`${basePath}/userform.html`)
})

router.get('/users/:id' , (req, res) => {
    const id = req.params.id

    //leitura da tabela users, resgatar um usuário do banco
    console.log(`Estamos buscando pelo usuário: ${id}`)

    res.sendFile(`${basePath}/users.html`)
})

module.exports = router