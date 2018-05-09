const BillingCycle = require('./bilingCycle')

//Criação dos métodos http para o billingCycle
BillingCycle.methods(['get', 'post', 'put', 'delete'])

/* 
 *roda as validações no update
 *new => exibe no retorno do put no rest service
 *runValidators => roda as validações escritas no Schema
 *  
 */
BillingCycle.updateOptions({new: true, runValidators: true})
module.exports = BillingCycle