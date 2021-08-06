const express=require('express');
const authorRouter=express.Router();
const authorController=require('../controllers/book.controller');

authorRouter.get('/:id',authorController.getAuthorById)
authorRouter.delete('/:id',authorController.deleteAuthorById)
authorRouter.post('/',authorController.postAuthor)
authorRouter.get('/',authorController.getAllAuthors)

module.exports=authorRouter