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
 *           type: string
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
 *         isbn: "9780747532743"
 *         title: Harry Potter and the Philosopher's Stone
 *         releaseYear: 1997
 *         numberOfPages: 223
 *         authorId: 4
 */


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


/**
 * @swagger
 * /books/{isbn}:
 *   get:
 *     summary: Get the book by isbn
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: isbn
 *         schema:
 *           type: string
 *         required: true
 *         description: The book isbn
 *     responses:
 *       200:
 *         description: The book description by isbn
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: The book was not found
 */

 /**
 * @swagger
 * /books:
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 */

 /**
 * @swagger
 * /books/{isbn}:
 *   delete:
 *     summary: Remove the book by isbn
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: isbn
 *         schema:
 *           type: string
 *         required: true
 *         description: The book isbn
 * 
 *     responses:
 *       200:
 *         description: The book was deleted
 *       404:
 *         description: The book was not found
 */


 /**
 * @swagger
 * /books/{isbn}:
 *  put:
 *    summary: Update the book by the isbn
 *    tags: [Books]
 *    parameters:
 *      - in: path
 *        name: isbn
 *        schema:
 *          type: string
 *        required: true
 *        description: The book isbn
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Book'
 *    responses:
 *      204:
 *        description: The book was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 */

bookRouter.get('/:isbn',bookController.getBookById)
bookRouter.put('/:isbn',bookController.updateBook)
bookRouter.delete('/:isbn',bookController.deleteBookById)
bookRouter.post('/',bookController.postBook)
bookRouter.get('/',bookController.getAllBooks)

module.exports=bookRouter