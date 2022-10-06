//modulos externos
import inquirer from 'inquirer'
import chalk from 'chalk'

//modulos internos 
import fs from 'fs'
import { get } from 'http'
import { stringify } from 'querystring'

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
    ]).then((answer) => {
        const action = answer['action']

        if(action === 'Criar Conta'){
            createAccount()
        }
        else if(action === 'Consultar Saldo'){
            consult()
        }
        else if(action === 'Depositar'){
            deposit()
        }
        else if(action === 'Sacar'){
            draw()
        }
        else if(action === 'Sair'){
            console.log(chalk.bgBlue.black('Obrigado por usar o Accounts'))
            process.exit()
        }


    }).catch((err) => console.log(err))
}

//Create an account 

function createAccount(){
    console.log(chalk.bgGreen.black('Parabéns por escolher nosso banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))
    buildAccount()
}

function buildAccount(){
    inquirer.prompt([{
        name: 'accountName',
        message: 'Digite um nome para sua conta'
    }]).then(answer => {
        const accountName = answer['accountName']
        console.info(accountName)

        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome'))
            buildAccount()
            return
        }

        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', function(err){console.log(err)})

        console.log(chalk.green('Parabéns, a sua conta foi criada!'))
        operation()
    }).catch((err) => console.log(err))
}

// add an amount to user account

function deposit(){
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual conta você deseja depositar?'
    }]).then((answer) => {
        const accountName = answer['accountName']

        if(!verifcation(accountName)){
            return deposit()
        }

        inquirer.prompt([{
            name: 'amount',
            message: 'Qual o valor que deseja depositar:'
        }]).then((answer) => {
            
            const amount = answer['amount']

            //add an amount
            addAmount(accountName, amount)
            operation()
        }).catch((err) => {console.log(err)})

    })
    .catch((err) => console.log(err))
}
// function para sacar
function draw(){
    inquirer.prompt([{
        name: 'accountName',
        message:'Qual a conta que deseja sacar?'
    }]).then((answer) => {
        const accountName = answer['accountName']
        if(!verifcation(accountName)){
            console.log('Esta conta não existe, escolha outro nome!')
            return draw()
        }
        
        inquirer.prompt([{
            name: 'amount',
            message: 'Qual o valor que deseja sacar?'
        }]).then((answer) => {
            const amount = answer['amount']
            removeAmount(accountName, amount)
            operation()
        }).catch((err) => console.log(err))
    }).catch((err) => console.log(err))
}

function consult(){
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual conta você deseja consultar?'
    }]).then((answer) => {
        const accountName = answer['accountName']

        if(!verifcation(accountName)){
            console.log('Esta conta não existe, escolha outro nome!')
            return consult()
        }
        const account = getAccount(accountName)
        fs.readFileSync(`accounts/${accountName}.json`, console.log(chalk.bgGreen.black(`Saldo:R$${JSON.stringify(account.balance)}`)), function(err){console.log(err)})
        operation()
    }).catch((err) => console.log(err))
}

//function of verifcation if account exist
function verifcation(accountName){
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed('Esta conta não existe, escolha outro nome!'))
        return false
    }

    return true
}

function addAmount(accountName, amount){
    const account = getAccount(accountName)

    if(!amount){
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde'))
        return deposit()
    }
    
    account.balance = parseFloat(amount) + parseFloat(account.balance)

    fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(account), function(err){console.log(err)})
    console.log(chalk.green(`Foi depositado o valor de R$${amount} da sua conta`))
}

function removeAmount(accountName, amount){
    const account = getAccount(accountName)

    if(!amount){
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde'))
        return draw()
    }

    account.balance = parseFloat(account.balance) - parseFloat(amount)

    fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(account), function(err){console.log(err)})
    console.log(chalk.red(`Foi sacado o valor de R$${amount} da sua conta`))
}

function getAccount(accountName){
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`,{
        encoding:'utf8',
        flag:'r'
    })
    return JSON.parse(accountJSON)
}