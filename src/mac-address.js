const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  //throw new NotImplementedError('Not implemented');
  let checkStr = '0123456789ABCDEF';
  let checked = true;
  n.split('-').forEach(el => {
    for (let i = 0; i < 2; i++) {
      if (!checkStr.includes(el[i])) {checked = false;}
    }
  });
  return checked;
}

module.exports = {
  isMAC48Address
};
