
console.log( "Testing browserify pipeline: Party's Screen" );

console.log( "Test requiring code from a user-defined module in /src/client" );

var common = require('./common');
console.log( "  Should return 'OK':", common.method() );

console.log( "Test requiring code from project-wide module in /src" );

var _ = require('../helpers');
console.log( "  Should return 5:", _.last([ 1, 2, 3, 4, 5 ]) );

