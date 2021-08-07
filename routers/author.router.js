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
 *           description: The year the author was born
 *         gender:
 *           type: integer
 *           description: The author's gender ['male', 'female', 'unspecified']
 *       example:
 *         id: 4
 *         name: J.K. Rowling
 *         birthYear: 1965 
 *         gender: female
 */

 /**
 * @swagger
 * /authors:
 *   get:
 *     summary: Returns the list of all the authors
 *     tags: [Authors]
 *     responses:
 *       200:
 *         description: The list of the authors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Author'
 */


/**
 * @swagger
 * /authors/{id}:
 *   get:
 *     summary: Get the author by id
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The author id
 *     responses:
 *       200:
 *         description: The author description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Author'
 *       404:
 *         description: The author was not found
 */

 /**
 * @swagger
 * /authors:
 *   post:
 *     summary: Create a new Author
 *     tags: [Authors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Author'
 *     responses:
 *       201:
 *         description: The author was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Author'
 *       500:
 *         description: Some server error
 */

 /**
 * @swagger
 * /authors/{id}:
 *   delete:
 *     summary: Remove the author by id
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The author id
 * 
 *     responses:
 *       200:
 *         description: The author was deleted
 *       404:
 *         description: The author was not found
 */


 /**
 * @swagger
 * /authors/{id}:
 *  put:
 *    summary: Update the author by the id
 *    tags: [Authors]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The author id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Author'
 *    responses:
 *      204:
 *        description: The author was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Author'
 *      404:
 *        description: The author was not found
 *      500:
 *        description: Some error happened
 */

authorRouter.get('/:id',authorController.getAuthorById)
authorRouter.put('/:id',authorController.updateAuthor)
authorRouter.delete('/:id',authorController.deleteAuthorById)
authorRouter.post('/',authorController.postAuthor)
authorRouter.get('/',authorController.getAllAuthors)

module.exports=authorRouter