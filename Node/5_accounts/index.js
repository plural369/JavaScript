//modulos externos
import inquirer from 'inquirer'
import chalk from 'chalk'

//modulos internos 
import fs from 'fs'

console.log('Iniciamos o accounts')

operation()

function operation(){
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que você deseja?',
        choices:[
            'Criar Conta',
            'Consultar Saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ]
    },
    ]).then().catch((err) => console.log(err))
}