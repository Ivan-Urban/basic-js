const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  //throw new NotImplementedError('Not implemented');
  const resMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    resMatrix.push([]);
  }
  console.log(resMatrix);
  matrix.forEach((el, i) => {
    el.forEach((elem, index) => {
      let n = 0;
      if (i == 0) {
        if (el[index - 1] == true) n++;
        if (el[index + 1] == true) n++;
        if (matrix[i + 1][index - 1] == true) n++;
        if (matrix[i + 1][index] == true) n++;
        if (matrix[i + 1][index + 1] == true) n++;
      }
      if ((i > 0) && (i < matrix.length - 1)) {
        if (el[index - 1] == true) n++;
        if (el[index + 1] == true) n++;
        if (matrix[i + 1][index - 1] == true) n++;
        if (matrix[i + 1][index] == true) n++;
        if (matrix[i + 1][index + 1] == true) n++; 
        if (matrix[i - 1][index - 1] == true) n++;
        if (matrix[i - 1][index] == true) n++;
        if (matrix[i - 1][index + 1] == true) n++;
      }
      if (i == matrix.length - 1) {
        if (el[index - 1] == true) n++;
        if (el[index + 1] == true) n++;
        if (matrix[i - 1][index - 1] == true) n++;
        if (matrix[i - 1][index] == true) n++;
        if (matrix[i - 1][index + 1] == true) n++;
      }
      resMatrix[i][index] = n;
    });
  });
  return resMatrix;
}

module.exports = {
  minesweeper
};
