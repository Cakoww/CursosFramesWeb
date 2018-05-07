const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/db_finance')
// Exemplo conexao com autenticacao: module.exports = mongoose.connect('mongodb://usuario:senha@localhost:porta/db_finance')


//Define que todas as mensagens referentes a campos requeridos seguirá esse padrão:
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."

