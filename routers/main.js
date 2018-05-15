var express = require('express');
var router = express.Router();

var session = require('express-session');
var ObjectId = require('mongodb').ObjectId;

var userInfo = require('../models/index/user_info');

router.get('/',function(req,res,next){
    var sess = req.session;
    var user;

    userInfo.findOne({"_id":ObjectId(sess._id)},function(err,info){
        if(err){
            res.end("Error in main/index router");
            return;
        }
        
        res.render("main/index",info);
    });
});

module.exports = router;