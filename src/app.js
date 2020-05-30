const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')
const routes = require('./routes')
const path = require('path')

const mongo_pas = process.env.MONGO_PAS

console.log(mongo_pas)
mongoose.connect(mongo_pas, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})



const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/file', express.static(path.resolve(__dirname, '..', 'temp')))
app.use(routes)

app.listen(3333, ()=> {
    console.log('Rodando')
})