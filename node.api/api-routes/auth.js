var express = require('express');
var router = express.Router();

    router.post('/login', (req, res)=>{
        res.send('Logged in..' + req.body.body);
    });

module.exports = router;