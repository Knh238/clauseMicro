const Sequelize = require('sequelize')
const db = require('./db')

const HashedMessages = db.define('hashedMessages s', {
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
