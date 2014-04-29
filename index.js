
// Require 3rd party modules

var Express  = require('express'),
    SocketIO = require('socket.io');


// Require local modules

var routes   = require('./src/routes'),
    settings = require('./src/settings').use('config/settings.json'),
    clientjs = require('./src/clientjs').use('src/client'),
    lesscss  = require('./src/lesscss').use('public');


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


// Start socket servers (port config nased on express HTTP server)

var connections = {
  dm    : [],
  party : []
};

var socketServer = SocketIO.listen(httpServer);

// Collect connections of each type as they come in
socketServer.of('/dm').on('connection', function (socket) { connections.dm.push(socket); });
socketServer.of('/party').on('connection', function (socket) { connections.party.push(socket); });

// Send keepalive pulse to all connected screens
setInterval(function () {
  connections.dm.forEach(function (it) { it.emit('pulse', 'blip!'); });
  connections.party.forEach(function (it) { it.emit('pulse', 'bleep!'); });
}, 500);


