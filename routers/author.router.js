const express=require('express');
const authorRouter=express.Router();
const authorController=require('../controllers/author.controller');

authorRouter.get('/:id',authorController.getAuthorById)
authorRouter.post('/',authorController.postAuthor)
authorRouter.get('/',authorController.getAllAuthors)

module.exports=authorRouter