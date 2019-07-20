const express       = require('express');
var bodyParser = require("body-parser");

//Init stuff
const app = express();
const port = 1337;

//Import Routes
const authRoute  = require('./api-routes/auth');
const nodeRoutes = require('./routes/node_routes');

//route mw
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', authRoute);
app.use(nodeRoutes);

app.listen(port, () => console.log("We live, boyyyyys. Port: " + port));