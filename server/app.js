var express = require('express'),
    config  = require('config/config.js'),
    app 	= new express();

app.use(express.static(__dirname+ '../app'));

app.listen(3000);
console.log(__dirname);
console.log("App is listening on port 3000");