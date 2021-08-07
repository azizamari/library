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

app.use('/',routers)

app.listen(PORT,()=>{
    console.log(`Library running on port ${PORT}`)
})

sequelize.sync()
    .catch(err=>console.log(err))