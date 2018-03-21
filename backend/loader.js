//responsável pela iniciação do servidor.

//captura instancia do server definido em server.js
const server = require('./config/server')

require('./config/database')
//chama o método definido no routes.js passando como parâmetro a instância do server
require('./config/routes')(server)

