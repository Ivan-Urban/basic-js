const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  //throw new NotImplementedError('Not implemented');
  let n = 0;
  for (let i = 0; i < email.length; i++) {
    if (email[i] == '@') {n = i;}
  }
  return email.slice(n + 1, email.length);
}

console.log(getEmailDomain('.unusual.com@usual.com'));

module.exports = {
  getEmailDomain
};
