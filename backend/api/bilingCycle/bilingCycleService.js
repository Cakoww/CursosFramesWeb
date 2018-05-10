const BillingCycle = require('./bilingCycle')

//Criação dos métodos http para o billingCycle
BillingCycle.methods(['get', 'post', 'put', 'delete'])

/* 
 *roda as validações no update
 *new => exibe no retorno do put no rest service
 *runValidators => roda as validações escritas no Schema
 */
BillingCycle.updateOptions({new: true, runValidators: true})

//utiliza o express
BillingCycle.route('count', function(req,res,next){
    //utiliza mongoose, a funcção captura o/os error/s que podem retornar do banco e caso exista, exibe abaixo:
    BillingCycle.count(function(error, value){

        if(error){
            res.status(500).json({errors: [error]})
        }else{
            res.json({value})
        }
    })

})


module.exports = BillingCycle