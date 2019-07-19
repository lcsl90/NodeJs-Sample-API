module.exports = function(app, db){
    app.post('/some-post-url', (req, res)=>{
        
        res.send("Das hast du gepostet: " + req.body.body);
    });

    app.get('/get-items-by-id/:id', (req, res)=>{
        res.send("Die übertragene ID lautet: " + req.params.id);
    });
}