
// Require

var fs   = require('fs'),
    path = require('path');


// Settings reference module

module.exports = {

  use: function (filepath) {

    console.log('Reading settings:', path.resolve(filepath));

    return JSON.parse(fs.readFileSync(path.resolve(filepath), 'utf-8'));

  }

}

