const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {

    const items = ['item a', 'item b', 'item c']
    res.render('dashboard', {items})
})

app.get('/post', (req, res) => {
    const blog = {
        title: 'Bolo',
        category: 'Confeitaria',
        body: 'Este é um site de como criar um bolo'
    }

    res.render('post', {blog})
})

app.get('/', (req, res) => {

    const user = {
        name:"Matheus",
        surname:"Batista"
    }

    const auth = true

    res.render('home', {user:user, auth})
})

app.listen(3000, () => {
    console.log('App funcionando!')
})