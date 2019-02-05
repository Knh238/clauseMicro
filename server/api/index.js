const router = require('express').Router()
const {HashedMessages} = require('../db')
router.use('/', require('./messages'))

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
