import inquirer from "inquirer"
import chalk from "chalk"

inquirer.prompt([
    {
        name: 'nome',
        message: 'Digite o seu nome:',
    },
    {
        name: 'idade',
        message: 'Digite a sua idade:',
    }  
]).then((resp) => {
        if(!resp.nome || !resp.idade){
            throw new Error('O valor da idade não pode ser vazio')
        }

        const dados = `Nome: ${resp.nome}, Idade: ${resp.idade}`
        console.log(chalk.bgYellow.black(dados))
}).catch((err) => console.log(err))
