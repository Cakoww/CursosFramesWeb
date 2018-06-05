const BillingCycle = require('./bilingCycle')
const _ = require('lodash')

//Criação dos métodos http para o billingCycle
BillingCycle.methods(['get', 'post', 'put', 'delete'])

//intercepta os métodos citados, após o chamado (after), ou seja, intercepta o response
BillingCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next){
    const bundle = res.locals.bundle

    if(bundle.errors){
        var errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    }else{
        next()
    }

}

function parseErrors(nodeRestfulErrors){
    const errors = []

    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    
    return errors
}


//método responsável por contar a quantidade de registros na base
BillingCycle.route('count', function(req, res, next){

    BillingCycle.count(function(error, value){
        
        if(error){
            res.status(500).json({errors: [error]})
        }else{
            res.json({value})
        }
    })
})
/* 
 *roda as validações no update
 *new => exibe no retorno do put no rest service
 *runValidators => roda as validações escritas no Schema
 */
BillingCycle.updateOptions({new: true, runValidators: true})
module.exports = BillingCycle