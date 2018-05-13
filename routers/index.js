var express = require('express');
var router = express.Router();
var sha256 = require('sha256');

var session = require('express-session');

var userInfo = require('../models/index/user_info');

router.get('/',function(req,res,next){
    res.render('index/index');
});

router.post('/login',function(req,res,next){
    var sess = req.session;

    console.log("user id : "+req.body.uid);

    // login 성공
    userInfo.find({"userId":req.body.uid,"password":sha256.x2(req.body.pwd)},function(err, info){
        if(err){
            return res.status(500).json({"error":1});
        }
        if(info.length != 0){
            sess.username = req.body.uid;
            res.json({result:1});
        } else{
            res.json({no:1});
        }

    });

});

router.post('/signup',function(req,res,next){
    var sess = req.session;

    console.log("This is Sign Up router");
    
    userInfo.find({"userId":req.body.uid},function(err, info){
        if(err){
            return res.status(500).json({error:1});
        } 
        if(info.length == 0){
            var uinfo = new userInfo();
        
            uinfo.name = req.body.name;
            uinfo.userId = req.body.uid;
            uinfo.password = sha256.x2(req.body.pwd);
        
            uinfo.save(function(err){
                if(err){
                    console.log("There's some errors with making account");
                    res.json({result:false});
                    return;
                }
        
                sess.username = req.body.uid;
                res.json({result:true});
        
            });
        } else{
            res.json({already:true});
            return;
        }
    });
    
});

module.exports = router;