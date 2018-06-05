const _ = require('lodash')
const BillingCycle = require('../bilingCycle/bilingCycle')

//mais uma função middleware
function getSummary(req, res){
    //checar a documentação do mongo
    BillingCycle.aggregate([{

        //para cada documento, soma todos os creditos e debitos nessa estrutura {credit: x, debt: x}
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
    },
        //agrupa os resultados anteriores em um novo objeto que 
        //terá a soma de todos os debitos e creditos de todos os registors
        {$group: {_id: null, credit:{$sum: "$credit"}, debt:{$sum: "$debt"}}
    }, {
        //projete apenas o credit e o debt (1 = true, podemos utilizar os dois), ignore o _id
        $project: {_id: 0, credit: 1, debt: 1}
    }], function(error, result){
        if(error){
            res.status(500).json({errors: [error]})
        }else{
            /*utilizando o lodash, de o resultado vier undefined ou vazio,
             é retornado um objeto padrão com credit: 0 e debt: 0*/
            res.json(_.defaults(result[0], {credit: 0, debt: 0}))
        }
    
        
    })
    

}

//exporta a function
module.exports = {getSummary}

