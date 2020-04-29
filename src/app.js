const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const path = require('path')

mongoose.connect('mongodb+srv://alexgcunha:alexcunha123@cluster0-pv31b.mongodb.net/pets?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/pets', express.static(path.resolve(__dirname, '..', 'temp')))
app.use(routes)

app.listen(3333, ()=> {
    console.log('Rodando')
})