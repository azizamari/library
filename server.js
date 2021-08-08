require('dotenv').config()
const express = require('express');
const sequelize= require('./db/index')
const swaggerUI=require('swagger-ui-express');
const swaggerJsDoc=require('swagger-jsdoc')
const routers= require('./routers/index')

const PORT=process.env.PORT || 3000
const options={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Library API",
            version:"1.0.0",
            description:"Simple library rest api side project",
        },
        servers:[
            {
                url:`http://localhost:${PORT}`
            }
        ],
    },
    apis:["./routers/*.js"]
};
const sepcs=swaggerJsDoc(options)

const app=express()

app.use(express.json())
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(sepcs))


app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, OPTIONS, DELETE');
    res.setHeader('Access-Control-Allow-Headers','*');
    next()
})
app.use('/',routers)

app.listen(PORT,()=>{
    console.log(`Library running on port ${PORT}`)
})

const {book, author}=require('./db').models
sequelize.sync({force:true})
    .then(async (_)=>{
        const authorTest1=await author.create({
            id: 4,
            name: "J.K. Rowling",
            birthYear: 1965, 
            gender: "female" 
        })
        const bookTest1=await book.create({ 
            isbn: 9780747532743, 
            title: "Harry Potter and the Philosopher's Stone",
            releaseYear: 1997,
            numberOfPages: 223,
            authorId: 4 
        })
    })
    .catch(err=>console.log(err))