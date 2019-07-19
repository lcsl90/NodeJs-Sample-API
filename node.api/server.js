const express       = require('express');
//const sqlite3       = require('sqlite3');
const bodyParser    = require('body-parser');
const nodemon       = require('nodemon');

const app = express();
const port = 1337;

app.use(bodyParser.urlencoded({extended:true}));
require('./app/routes')(app, {});

app.listen(port, () =>{
    console.log("We live, boyyyyys. Port: " + port); 
})

