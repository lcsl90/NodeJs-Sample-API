var express       = require('express');
var bodyParser = require("body-parser");
var apiRoutes  = require('./api-routes/api-routes');
var nodeRoutes = require('./routes/node_routes');

var dotenv = require('dotenv');
dotenv.config();

//Init stuff
var app = express();
var port = 1337;

//route mw
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRoutes);
app.use(nodeRoutes);

app.listen(port, () => console.log("We live, boyyyyys. Port: " + port));