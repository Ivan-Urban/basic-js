const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  const objOfDom = {};
  
  domains.forEach(el => {
    let arrOfDom = el.split('.').reverse().map(el => {
      return '.' + el;
    });
    for (let i = 0; i < arrOfDom.length; i++) {
      let keyName = '';
      for (let j = 0; j <= i; j++) {
        keyName +=arrOfDom[j];
      }
      if (objOfDom[keyName] == undefined) {
        objOfDom[keyName] = 0;
      }
    }
  });

  for (let key in objOfDom) {
    let str = '';
    if (key.split('.').length == 2) {
      str = key;
    } else {
      str = key.split('.').reverse().join('.').slice(0, key.split('.').reverse().join('.').length-1);
    }
    domains.forEach(el => {
      if (el.includes(str)) {
        objOfDom[key]++;
      }
    });
  }

  return objOfDom;
}

module.exports = {
  getDNSStats
};
