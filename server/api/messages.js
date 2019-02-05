const router = require('express').Router()
const {HashedMessages} = require('../db')
const crypto = require('crypto')
module.exports = router

const checkKeyTerms = term => {
  term = term.toLowerCase()
  const clauseTerms = ['clause', 'smartclause', 'smartcontracts', 'contracts']
  if (clauseTerms.indexOf(term) > 0) {
    return 'CLAUSE'
  } else {
    return false
  }
}
const checkCatTerms = term => {
  term = term.toLowerCase()
  const catTerms = ['meow', 'kitty', 'cat', 'furball', 'kitten', 'paws', 'purr']
  if (catTerms.indexOf(term) > 0) {
    return 'CLAWS'
  } else {
    return false
  }
}

router.post('/', async (req, res, next) => {
  try {
    if (checkKeyTerms(req.body.message)) {
      const clauseMsg = {message: req.body.message, hashedValue: 'CLAUSE!'}
      console.log('messasge is in here', req.body.message)
      await HashedMessages.create(clauseMsg)

      res.json({digest: 'CLAUSE!'})
    }
    if (checkCatTerms(req.body.message)) {
      const catMsg = {message: req.body.message, hashedValue: 'CLAWS!'}
      console.log('messasge is in here', catMsg)
      await HashedMessages.create(catMsg)

      res.json({digest: 'CLAWS!'})
    } else {
      const msg = crypto
        .createHash('sha256')
        .update(req.body.message, 'binary')
        .digest('hex')

      const newMsg = {message: req.body.message, hashedValue: msg}
      console.log('messasge is in here', newMsg)
      await HashedMessages.create(newMsg)
      // res.status(201).json(msg);
      res.json({digest: msg})
    }
  } catch (err) {
    next(err)
  }
})

router.get('/:hashed', async (req, res, next) => {
  try {
    const originalReq = await HashedMessages.findOne({
      where: {hashedValue: req.params.hashed}
    })
    console.log('message is in here', originalReq)
    res.json({message: originalReq.message})
  } catch (err) {
    next(err)
  }
})
