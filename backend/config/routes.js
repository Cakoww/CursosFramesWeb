//responsável por orquestrar as rotas do sistema
const express = require('express')

module.exports = function(server){

    //API rooutes

    const router =express.Router()

    //todas as rotas serão iniciadas para a URL api.
    server.use('/api', router)

    //rotas da API
    const billingCycleService = require('../api/bilingCycle/bilingCycleService')
    billingCycleService.register(router, '/billingCycles')

    const billingCycleSummaryService = require ('../api/billingSummary/billingSummary')
    router.route('/billingSummary').get(billingCycleSummaryService.getSummary)
}