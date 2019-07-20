var dotenv = require('dotenv');

function Validate(req, res, next){
    //Get Key from Headerr
    console.log('Authenticating api key...');
    var keyToTest = req.header('API_KEY');
    //is header filled?
    if(!keyToTest){
        console.log('An api key was missing. Access denied');
        res.statusCode = 403;
        res.send('Access denied.');
    }else{
        //is the api key from the header equal to our dotenv api key variable?
        if(keyToTest === process.env.API_KEY){
            console.log('Access granted')
            next();
        }else{
            res.statusCode = 403;
            res.send('Access denied. Api-Key is wrong.');
        }
    }
}
module.exports = Validate;
