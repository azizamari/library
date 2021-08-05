require('dotenv').config()
const express = require('express');
const sequelize= require('./db/index')
const routers= require('./routers/index')
const app=express()


app.use(express.json())
app.use('/',routers)

const PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Library running on port ${PORT}`)
})

sequelize.sync({force:true})
    .catch(err=>console.log(err))