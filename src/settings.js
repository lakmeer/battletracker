
// Require

var fs   = require('fs'),
    path = require('path');


// Settings reference module

module.exports = {

  use: function (filepath) {
    var resolvedPath = path.resolve(filepath);
    return JSON.parse(fs.readFileSync(resolvedPath, 'utf-8'));
  }

}
