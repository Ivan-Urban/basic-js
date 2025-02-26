const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  //throw new NotImplementedError('Not implemented');
  let sum = 0;
  matrix.forEach((el, i) => {
    el.forEach((elem, index) => {
      if ((i == 0) || matrix[i-1][index] != 0){
        sum += elem;
      }
    });
  });
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
