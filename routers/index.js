const express = require('express')
const authorRouter=require('./author.router');
const bookRouter=require('./book.router');
const router = express.Router()

router.use('/authors',authorRouter)
router.use('/books',bookRouter)
module.exports = router