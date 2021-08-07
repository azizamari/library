const express=require('express');
const authorRouter=express.Router();
const authorController=require('../controllers/author.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     Author:
 *       type: object
 *       required:
 *         - id
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: The author identifier
 *         name:
 *           type: string
 *           description: The author name
 *         birthYear:
 *           type: integer
 *           description: The year the book author was born
 *         gender:
 *           type: integer
 *           description: The author's gender ['male', 'female', 'unspecified']
 *       example:
 *         id: 4
 *         name: J.K. Rowling
 *         birthYear: 1965 
 *         gender: female
 */

authorRouter.get('/:id',authorController.getAuthorById)
authorRouter.put('/:id',authorController.updateAuthor)
authorRouter.delete('/:id',authorController.deleteAuthorById)
authorRouter.post('/',authorController.postAuthor)
authorRouter.get('/',authorController.getAllAuthors)

module.exports=authorRouter