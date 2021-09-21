import { NotImplementedError } from '../extensions/index.js';

export default {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number') {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    position -= 1;
    if (position >= this.chain.length || position < 0) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const finishChain = [...this.chain];
    this.chain = [];
    return finishChain.join("~~").trim();
  },
};

