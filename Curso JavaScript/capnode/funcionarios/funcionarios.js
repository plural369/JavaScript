const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

const cidade = p => p.pais === 'China'
const sala = function(acumulador, atual){
    return acumulador.salario < atual.salario ? acumulador : atual
}
    const sexo = se => se.genero === 'F'

axios.get(url).then(response => {
    const funcionarios = response.data
    const func = funcionarios.filter(cidade).filter(sexo).reduce(sala)

    console.log(func)
})