const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  let resStr = '';
  let n = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      n++;
    } else {
      if (n > 1) {
        resStr += String(n);
        resStr += str[i];
      } else {
        resStr += str[i];
      }
      n = 1;
    }
  }

  return resStr;
}

module.exports = {
  encodeLine
};
