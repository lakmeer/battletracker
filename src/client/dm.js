
console.log( "Testing browserify pipeline: DM's Screen" );

console.log( "Test requiring code from a user-defined module in /src/client" );
var common = require('./common');
console.log( "  Should return 'OK':", common.method() );

console.log( "Test requiring code from project-wide module in /src" );
var _ = require('../helpers');
console.log( "  Should return 5:", _.last([ 1, 2, 3, 4, 5 ]) );

console.log( "Testing Socket connection back to server:" );

var socket = require('socket.io-client').connect('http://localhost/dm');

socket.on('connect', function () {
  document.getElementById('status').innerHTML = 'connected';
});

socket.on('disconnect', function () {
  document.getElementById('status').innerHTML = 'not connected';
});

socket.on('pulse', function (text) {
  document.getElementById('pulse').innerHTML = text;
  setTimeout(function () {
    document.getElementById('pulse').innerHTML = '';
  }, 100);
});

