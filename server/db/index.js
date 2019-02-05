const db = require('./database')
const Sequelize = require('sequelize')
const HashedMessages = require('./HashedMessages.model')

module.exports = {
  db,
  HashedMessages
}
