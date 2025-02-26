const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    //throw new NotImplementedError('Not implemented');
    let n = 1;
    let depth = 1;
    arr.forEach(el => {
      if (Array.isArray(el)) {
        n += this.calculateDepth(el);
        if (n > depth) {depth = n;}
        n = 1;
      }
    });
    return depth;
  }
}

module.exports = {
  DepthCalculator
};
