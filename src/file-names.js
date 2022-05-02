const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  //throw new NotImplementedError('Not implemented');
  const objOfRepete = {};
  for (let i = 0; i < names.length; i++) {
    for (let j = 0; j < i; j++) {
      if (names[j] == names[i]) {
        if (objOfRepete[names[i]] == undefined) {
          objOfRepete[names[i]] = 1;
        } else {
          objOfRepete[names[i]]++;
        }
        names[i] = names[i] + `(${objOfRepete[names[i]]})`;
      }
    }
  }
  return names;
}

module.exports = {
  renameFiles
};
