const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  if (options.separator == undefined) {options.separator = '+';}
  if (options.additionSeparator == undefined) {options.additionSeparator = '|';}
  if (options.repeatTimes == undefined) {options.repeatTimes = 1;}
  if (options.additionRepeatTimes == undefined) {options.additionRepeatTimes = 1;}
  let resStr = '';
  for (let i = 0; i < options.repeatTimes; i++) {
    resStr += String(str);
    if ((options.addition != undefined)  || (String(options.addition) == 'null')) {
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        resStr += String(options.addition);
        if ((j + 1) != options.additionRepeatTimes) {
          resStr += options.additionSeparator;
        }
      }
    }
    if ((i + 1) != options.repeatTimes) {
      resStr += options.separator;
    }
  }
  return resStr;
}

module.exports = {
  repeater
};
