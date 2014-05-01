
// Require

var fs   = require('fs'),
    path = require('path');

var Browserify = require('browserify');


// Helpers

var _ = require('./helpers');


// ClientJS
//
// Intercept requests for js code and serve compiled browserified code from
// cache transparently. Middleware handler will examine incoming requests, and
// if corresponding compiled version does not exist, compile one and save it
// for next time.
//
// TODO: Monitor filesystem for changes to previously requested files

module.exports = {

  // Initialiser - takes base directory to find less stylesheets in

  use: function (basedir, config) {

    var basedir = path.resolve(basedir),
        cache   = {},
        config  = config || {};


    // Once instantiated with base directory to work with, return object
    // containing relevant methods

    return {

      // Middleware handler - obeys Connect function signature

      middleware: function (req, res, next) {

        var ext = _.getExtension(req.url);

        // Pass on this request if not for script file
        if (ext !== 'js') {
          return next();
        }

        // Does cached version already exist
        if (cache[ req.url ]) {
          console.log('ClientJS::Middleware - serving', req.url, 'from cache');
          res.set('Content-Type', 'application/javascript');
          return res.end( cache[ req.url ] );
        }

        // Compute expected path of corresponding less source
        var targetFilename = path.resolve(basedir + req.url);

        console.log("ClientJS::Middleware - seeking source file:", targetFilename);

        // Try to find matching less file
        if ( fs.existsSync(targetFilename) ) {

          // Now that we've confirmed that some file exists to be compiled, we
          // can construct a Browserify instance that is bound to that file.

          // Time compilation
          var startTime = Date.now();

          // Instantiate browserify for this file
          var compiler = Browserify([ targetFilename ], {

            // Set base path for relative require paths
            basedir: basedir,

            // Allow discovery of JSX files when walking dependencies
            extensions: [ '.jsx' ],

            // Don't look for builtins by default
            insertGlobals: true

          });

          // Compile
          compiler.bundle({}, function (err, data) {

            // If we got to here, we're definitely gonna send some script
            res.set('Content-Type', 'application/javascript');

            // If an error occurs, propagate it out to the browser's console so
            // we can see it on the inspector, instead of having to switch to
            // the terminal to see why our shit stopped working

            if (err !== null) {

              // Format the error message slightly
              var message= err.message.replace(/:/, "\\n");

              // Report the error on the inspector console
              res.end( 'console.error("' + _.escapeQuotes(message) + '");');

            } else {

              cache[ req.url ] = data;
              res.end( data );

              console.log("ClientJS::Middleware - compiled", req.url, '-',
                data.length, 'bytes,',
                (Date.now() - startTime), 'ms');

            }

          });

        } else {

          console.log('ClientJS::Middleware - no such file:', targetFilename);
          next();

        }
      }
    }
  }
}

