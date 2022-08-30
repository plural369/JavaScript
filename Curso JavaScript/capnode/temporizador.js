const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 15 * * 2', function (){
    console.log('Executando Tarefa1!', new Date().getSeconds())
})
console.log(tarefa1)
setTimeout(function (){
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 15
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa2!', new Date().getSeconds)
})
console.log(tarefa2)