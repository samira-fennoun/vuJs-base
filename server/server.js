const express=require('express')

const bodyParser= require('body-parser')
 const cors=require('cors')
 const app= express()
 const corsOption={
    origin: 'http://localhost:8081',
    credentials: true
 }

 app.use(cors(corsOption))

 app.use(bodyParser.json())

 app.use(bodyParser.urlencoded({extented:true}))

 app.get('/',(req,res)=>{
    res.json({message:'Welcome'})
 })

 // models

 const db=require('./app/models')
 db.connex.sync()

//ROUTER

require('./app/rootes/product.route.js')(app)

const PORT=8080
 app.listen(PORT,()=>{
    console.log(`Server is runnning on port ${PORT}`)
 })