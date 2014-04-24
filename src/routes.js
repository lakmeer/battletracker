
// Require

var path     = require('path'),
    settings = require('./settings');


/*
 * Path security
 *
 * path.resolve is necessary as Express considers serving files from relative
 * paths unsafe. The resolve method creates an absolute path from the running
 * program's root directory (as opposed to the directory of this literal file)
 */


// Export collection of route functions

/*
 * Here is also where you'd usually do processing for a template engine. The
 * defacto template engine for node projects is Jade, similar to how HAML is
 * the defacto engine for Rails. However, because all our rendering has to be
 * done by the client anyway, why bother? Just serve the initial empty markup
 * structure and have the client rendering engine kick in when available.
 */

module.exports = {


  // Root page

  index: function (req, res) {
    res.sendfile(path.resolve("views/index.html"));
  },


  // DM's view - TODO: Add authentication

  dm: function (req, res) {
    res.sendfile(path.resolve("views/dm.html"));
  },


  // Party view

  party: function (req, res) {
    res.sendfile(path.resolve("views/party.html"));
  }

};

