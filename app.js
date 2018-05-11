var express = require('express');
var app = express();

var jade = require('jade');

var index = require('./routers/index.js');

app.set('port',process.env.PORT || 3000);

app.set('view engine',"jade");
app.set('views','./views');

app.use('/',index);

app.listen(app.get('port'),function(){
    console.log("Running On : localhost:"+app.get('port'));
}); 