const BillingCycle = require('./bilingCycle')

//Criação dos métodos http para o billingCycle
BillingCycle.methods(['get', 'post', 'put', 'delete'])

module.exports = BillingCycle