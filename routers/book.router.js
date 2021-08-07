const express=require('express');
const bookRouter=express.Router();
const bookController=require('../controllers/book.controller');


/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - isbn
 *         - title
 *         - authorId
 *       properties:
 *         isbn:
 *           type: integer
 *           description: The International Standard Book Number
 *         title:
 *           type: string
 *           description: The book title
 *         releaseYear:
 *           type: integer
 *           description: The year the book was published
 *         numberOfPages:
 *           type: integer
 *           description: The year the book was published
 *         authorId:
 *           type: integer
 *           description: Foreign key for the author id
 *       example:
 *         isbn: 9780747532743
 *         title: Harry Potter and the Philosopher's Stone
 *         releaseYear: 1997
 *         numberOfPages: 223
 *         authorId: 4
 */

bookRouter.get('/:isbn',bookController.getBookById)
bookRouter.put('/:isbn',bookController.updateBook)
bookRouter.delete('/:isbn',bookController.deleteBookById)
bookRouter.post('/',bookController.postBook)

 /**
 * @swagger
 * /books:
 *   get:
 *     summary: Returns the list of all the books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
bookRouter.get('/',bookController.getAllBooks)

module.exports=bookRouter