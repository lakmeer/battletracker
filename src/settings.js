
// Require

var fs = require('fs');


// Helpers

var readJSON = function (path) {
  return JSON.parse(fs.readFileSync(path, 'utf-8'));
};


// Settings reference module

module.exports = {

  use: function (path) {

    var settings = readJSON(path);

    return settings;

  }

}

