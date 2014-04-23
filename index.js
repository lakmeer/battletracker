
// Require 3rd party modules

var express = require('express');


// Require local modules

var routes = require('./src/routes');


// Instantiate new Express app

var app = express();


// Establish middleware




// Configure routes

app.get('/',       routes.index);
app.get('/dm',     routes.dm);
app.get('/party',  routes.party);



// Start HTTP server


