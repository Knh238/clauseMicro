// const db = require('./db')

// require('./models')
// module.exports = db

const db = require('./database')
const Sequelize = require('sequelize')
const HashedMessages = require('./HashedMessages.model')

module.exports = {
  db,
  HashedMessages
}
