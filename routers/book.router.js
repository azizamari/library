const express=require('express');
const bookRouter=express.Router();
const bookController=require('../controllers/book.controller');

bookRouter.get('/:isbn',bookController.getBookById)
bookRouter.delete('/:isbn',bookController.deleteBookById)
bookRouter.post('/',bookController.postBook)
bookRouter.get('/',bookController.getAllBooks)

module.exports=bookRouter