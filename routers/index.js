var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('index/index');
});

router.post('/login',function(req,res,nex){
    console.log("user id : "+req.body.uid);
});

module.exports = router;