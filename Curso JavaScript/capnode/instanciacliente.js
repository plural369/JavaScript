const contadorA = require('./instanciaunica')
const contadorB = require('./instanciaunica')

const contadorC = require('./novainstancia')
const contadorD = require('./novainstancia')

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)


