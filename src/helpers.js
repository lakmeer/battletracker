
/*
 * Helpers
 *
 * Declare helpers as variables like this so they can call each other without
 * namespacing. Then at the end, collect and export them as an object.
 *
 */


// Last
// Return last element in list; null if no elements

var last = function last (list) {
    if ( list != null ) {
        return list.length ? list[list.length - 1] : null;
    }
    return null;
};


// Get Extension
//
// Given a string representing a file path, return the file extension.
// Return nulls in the case of not being a valid path or having no extension.

var getExtension = function getExtension (filepath) {
    var extSplitChar = '.';
    if ( filepath.indexOf(extSplitChar) != -1 )
    {
        return last( filepath.split('.') );
    }
    return null;
};


//
// Export
//

module.exports = {
  last: last,
  getExtension: getExtension
};

