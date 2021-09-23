import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let runLengthEncoding = function (str) {
    if (str) {
      const arr = [];
      const lastArr = [];

      let s = "";
      let s1 = "";
      let temp = str[0];
      let temp1 = str[str.length - 1];

      for (let i = str.length - 1; i > 0; i--) {
        if (temp1 == str[i]) {
          s1 += temp1;
        } else {
          lastArr.push([s1.length, temp1]);
          temp1 = str[i];
          s1 = temp1;
        }
      }

      for (let i = 0; i < str.length; i++) {
        if (temp == str[i]) {
          s += temp;
        } else {
          arr.push([s.length, temp]);
          temp = str[i];
          s = temp;
        }
      }

      arr.push(lastArr[0]);
      return arr;
    }

    return [];
  };

  let countArr = runLengthEncoding(str);
  let s = '';

  for (let i = 0; i < countArr.length; i++) {
    if (countArr[i][0] > 1) {
      s += countArr[i][0] + countArr[i][1];
    } else {
      s += countArr[i][1];
    }
  }
  
  return s;
}


