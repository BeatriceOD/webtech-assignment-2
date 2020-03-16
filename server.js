const express = require('express')
const path  = require('path');
const app = express()

app.set('view engine','ejs')
 
app.use('/', require('./routes/studentslist'));
app.use(express.static(__dirname + '/public'));
 

const Port = 4000

app.listen(Port, ()=>{
    console.log(`Server is running on port ${Port}`)
})