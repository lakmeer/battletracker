
// Require 3rd party modules

var Express  = require('express');
var SocketIO = require('socket.io');


// Require local modules

var routes   = require('./src/routes'),
    settings = require('./src/settings').use('config/settings.json'),
    clientjs = require('./src/clientjs').use('src/client'),
    lesscss  = require('./src/lesscss').use('public', { force: true });


// Instantiate new Express app

var app = Express();


// Establish middleware cascade

app.use( lesscss.middleware );
app.use( clientjs.middleware );
app.use( Express.static(__dirname + '/public') );


// Configure routes

app.get('/',       routes.index);
app.get('/dm',     routes.dm);
app.get('/party',  routes.party);


// Start HTTP server

var httpServer = app.listen(settings.httpPort, function () {
  console.log('HTTP Server started on port', httpServer.address().port);
});


// Start Socket server

// TODO: Real implementation of socket server module

