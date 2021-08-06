const express=require('express');
const bookRouter=express.Router();
const bookRouter=require('../controllers/author.controller');

bookRouter.get('/:id',bookRouter.getAuthorById)
bookRouter.delete('/:id',bookRouter.deleteAuthorById)
bookRouter.post('/',bookRouter.postAuthor)
bookRouter.get('/',bookRouter.getAllAuthors)

module.exports=bookRouter