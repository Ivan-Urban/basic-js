const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    //throw new NotImplementedError('Not implemented');
    return this.arr.length;
  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    if ((value == undefined) && (value !== null)) {
      this.arr.push(`~( )~`);
    } else {
      this.arr.push(`~( ${String(value)} )~`);  
    }
    return this;
  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    if ((typeof(position) != 'number') || (position <= 0) || (position > this.getLength())) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(position - 1, 1);
    return this; 
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    this.arr.reverse();
    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    let len = this.arr.join('').length;
    let resStr = this.arr.join('').slice(1, len-1);
    this.arr = [];
    return resStr;
  }
};

module.exports = {
  chainMaker
};