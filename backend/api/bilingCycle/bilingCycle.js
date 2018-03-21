const restful = require('node-restful')
const mongoose = restful.mongoose


//mapeamento das entidades do sistema
const creditSchema = new mongoose.Schema({

    name:{type: String, required:true},
    value: {type:Number, min: 0, required:true}
})

const debtSchema = new mongoose.Schema({

    name:{type: String, required: true},
    value: {type: Number, min: 0, required: true},
    status: {type: String, required: false, uppercase: true, enum: ['PAGO', 'PENDENTE', 'AGENDADO']}
})

//nesse exemplo temos um array[] de cada um Schema acima de modo a aninhar os modelos.
const billingCycleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    month: {type: Number, min: 1, max: 12, required: true},
    year: {type: Number, min: 1970, max: 2150, required: true},
    credits: [creditSchema],
    debts: [debtSchema]
})

//Exportação do Schema, passivel de ser carregadi atraves do require.
module.exports = restful.model('BillingCycle', billingCycleSchema)
