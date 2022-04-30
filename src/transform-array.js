const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let countOfConstrols = 0;
  const arrOfControls = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  arr.forEach((el, index) => {
    if (arrOfControls.includes(el)) {
      countOfConstrols++
    }
  })
  if (countOfConstrols == 0) return arr

  const resultArr = arr.map((el, index) => {
    if (arr[index - 1] == '--discard-next') return undefined;
    if (arr[index + 1] == '--discard-prev') return undefined;
    if (el == '--double-next') return arr[index + 1];
    if ((el == '--double-prev') && (arr[index-2] != '--discard-next')) return arr[index - 1];
    return el
  }).filter(el => {
    if ((!arrOfControls.includes(el) && (el !== undefined))) return el 
  })

  return resultArr
}

module.exports = {
  transform
};
