const express = require('express')
const authorRouter=require('./author.router');
const router = express.Router()

router.use('/authors',authorRouter)
module.exports = router