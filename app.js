var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

var jade = require('jade');

var index = require('./routers/index.js');

app.set('port',process.env.PORT || 3000);
app.use(express.static(__dirname+"/static"));

app.set('view engine',"jade");
app.set('views',__dirname+'/views');

app.use('/',index);

app.listen(app.get('port'),function(){
    console.log("Running On : localhost:"+app.get('port'));
}); 