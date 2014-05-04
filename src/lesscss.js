
// Require

var fs   = require('fs'),
    path = require('path');

var Less = require('less');

var _ = require('./helpers');


// Local helpers

var generateErrorCss = function generateErrorCss (message) {
  return "/* Compilation error: " + err.message + " */\n" +
    "html { background: darkred; color: white; }";
};


// LessCSS
//
// Intercept css stylesheet requests and serve dynamically cached and compiled
// less stylesheets transparently. Middleware handler will examine incoming
// requests, and if corresponding compiled version does not exist, compile one
// and save it for next time.
//
// TODO: Monitor filesystem for changes to previously requested files
//
// Options:
//
//   force (false) -
//     Don't cache, just compile fresh every time. Use for iterating on styles.
//

module.exports = {

  // Initialiser - takes base directory to find less stylesheets in

  use: function (basedir, options) {

    var basedir = path.resolve(basedir),
        opts    = options || { force: false },
        cache   = {};

    // Once instantiated with base directory to work with, return object
    // containing relevant methods

    return {

      // Middleware handler - obeys Connect function signature

      middleware: function (req, res, next) {

        var ext = _.getExtension(req.url);

        // Pass on this request if not for a stylesheet
        if (ext !== 'css') {
          return next();
        }

        // Does cached version already exist
        if (cache[ req.url ] && !opts.force) {
          console.log('LessCSS::Middleware - serving', req.url, 'from cache');
          res.set('Content-Type', 'text/css');
          return res.end( cache[ req.url ] );
        }

        // Compute expected path of corresponding less source
        var targetLessFile = path.resolve(basedir + req.url.replace(/css$/, 'less'));

        console.log("LessCSS::Middleware - seeking source file:", targetLessFile);

        // Try to find matching less file
        if ( fs.existsSync(targetLessFile) ) {

          // Less's render function insists on being asynchronous for some
          // reason, even though it's perfectly reasonable to sync here. I
          // don't think they quite get the point of node. At any rate, since
          // we can't straight-up return a value here, we can just call res.end
          // when we want. As long as we don't call next() (or need any later
          // middleware) it doesn't matter. At least it'll be sync from cache.

          var includePath = path.join(basedir, path.dirname(req.url));
          var lessSource  = fs.readFileSync( targetLessFile, 'utf-8' )

          Less.render( lessSource, { paths: [ includePath ] }, function (err, css) {

            res.set('Content-Type', 'text/css');

            if (err) {
              console.error('LessCSS::Middleware - compilation error:');
              console.error(err.message);
              res.end( generateErrorCss( err.message ));
            } else {
              console.log('LessCSS::Middleware - compiled', req.url, '-', css.length, 'bytes');
              cache[ req.url ] = css;
              res.end( css );
            }
          });

        } else {

          console.log('LessCSS::Middleware - no such file:', targetLessFile);
          next();

        }
      }
    }
  }
}



