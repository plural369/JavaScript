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
    try{
        if(!Number.isInteger(resp.idade)){
            throw new Error('O valor da idade não pode ser uma string')
        }
        if(resp.name === Number){
            throw new Error('O valor do nome não pode ser um inteiro')
        }
    }catch(err){ console.log(err)}
})
