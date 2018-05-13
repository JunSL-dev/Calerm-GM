var express = require('express');
var router = express.Router();

var session = require('express-session');

router.get('/',function(req,res,next){
    var sess = req.session;

    res.send("hey"+"<h1>"+sess.username+"</h1>");
});

module.exports = router;