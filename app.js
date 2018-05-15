var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');

var db = mongoose.connection;

db.on('error',function(){
    console.log("Error on DB connection");
});

db.once('open',function(){
    console.log("Connected to mongod server");
});

mongoose.connect("mongodb://localhost/calerm");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(session({
    secret:"#*2580",
    resave:false,
    saveUninitialized: true
}));

var jade = require('jade');

var index = require('./routers/index');
var main = require('./routers/main');

app.set('port',process.env.PORT || 3000);
app.use(express.static(__dirname+"/static"));

app.set('view engine',"jade");
app.set('views',__dirname+'/views');

app.use('/',index);
app.use('/main',main);

app.listen(app.get('port'),function(){
    console.log("Running On : localhost:"+app.get('port'));
}); 