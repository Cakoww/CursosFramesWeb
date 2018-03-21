//responsável por orquestrar as rotas do sistema
const express = require('express')

module.exports = function(server){

    //API rooutes

    const router =express.Router()

    server.use('/api', router)

    //rotas da API
    const billingCycleService = require('../api/bilingCycle/bilingCycleService')
    billingCycleService.register(router, '/billingCycles')

}