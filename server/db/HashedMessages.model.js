const Sequelize = require('sequelize')
const db = require('./database')

const HashedMessages = db.define('hashedMessages ', {
  message: {
    type: Sequelize.STRING,
    allowNull: false
  },
  hashedValue: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = HashedMessages
