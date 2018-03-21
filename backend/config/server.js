//arquivo de configuração de servidor
const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

server.listen(port, function(){
    console.log(`servidor rodando na porta: ${port}.`)
})

//expoe instancia do servidor
module.exports = server