import { NotImplementedError } from '../extensions/index.js';

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
export default function transform(arr) {
  if (!(arr instanceof Array)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }
  const a = [...arr];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "--double-next") {
      if (a[i + 1] === undefined) {
        a.splice(i, 1);
      } else {
        a[i] = a[i + 1];
      }
    }
    if (a[i] === "--double-prev") {
      if (a[i - 1] === undefined) {
        a.splice(i, 1);
      } else {
        a[i] = a[i - 1];
      }
    }
    if (a[i] === "--discard-next") {
      if (a[i + 1] === undefined) {
        a.splice(i, 1);
      } else if (typeof a[i + 2] === "string") {
        a.splice(i, 3);
      }
      else {
        a.splice(i, 2);
      }
    }
    if (a[i] === "--discard-prev") {
      if (a[i - 1] === undefined) {
        a.splice(i, 1);
      } else if (typeof a[i - 2] === "string") {
        a.splice(i - 2, 3);
      }
      else {
        a.splice(i - 1, 2);
      }
    }
  }
  return a;
}
