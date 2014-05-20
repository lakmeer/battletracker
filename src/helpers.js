/*
 * Helpers
 *
 * Declare helpers as variables like this so they can call each other without
 * namespacing. Then at the end, collect and export them as an object.
 *
 */


// Last
// Return last element in list; null if no elements

var last = function last(list) {
  return (list && list.length) ? list[list.length - 1] : null;
};


// Get Extension
//
// Given a string representing a file path, return the file extension.
// Return nulls in the case of not being a valid path or having no extension.

var getExtension = function getExtension(filepath) {
  var extSplitChar = '.';
  if (filepath.indexOf(extSplitChar) != -1) {
    return last(filepath.split('.'));
  }
  return null;
};


//
// Structs
//
// http://stackoverflow.com/questions/502366/structs-in-javascript
function makeStruct(names) {
  var names = names.split(' ');
  var count = names.length;

  function constructor() {
    for (var i = 0; i < count; i++) {
      this[names[i]] = arguments[i];
    }
  }
  return constructor;
};


// Escape Quotes
// Replace each instance of " in a string with \"

var escapeQuotes = function escapeQuotes (str) {
  return str.replace(/"/g, '\\"');
}


//
// Export
//

module.exports = {
  last: last,
  escapeQuotes: escapeQuotes,
  getExtension: getExtension,
  makeStruct: makeStruct
};

