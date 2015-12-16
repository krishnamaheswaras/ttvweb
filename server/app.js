var express = require('express'),
    config  = require('./config/config.js'),
    app 	= new express();

app.use(express.static(config.application.root_path+ '/app'));

app.listen(config.application.http_port);

console.log("App is listening on port "+config.application.http_port);
