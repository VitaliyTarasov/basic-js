import { NotImplementedError } from '../extensions/index.js';

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
export default function getMatrixElementsSum(matrix) {
  const num = [];
  let n = 0;
  let matrixLength = matrix[0].length;
  matrix.push(new Array(matrixLength).fill(0));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i + 1] === undefined) {
        break;
      }
      if (matrix[i][j] == 0 && matrix[i + 1][j]) {
        n += matrix[i + 1][j];
      } else {
        num.push(matrix[i][j]);
      }
    }
  }
  return num.reduce((i, j) => i + j, 0) - n;
}


// function getMatrixElementsSum(matrix) {
//   const num = [];
//   let n = 0;
//   let matrixLength = matrix[0].length;
//   matrix.push(new Array(matrixLength).fill(0));
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (matrix[i + 1] === undefined) {
//         break;
//       }
//       if (matrix[i][j] == 0 && matrix[i + 1][j]) {
//         n += matrix[i + 1][j];
//       } else {
//         num.push(matrix[i][j]);
//       }
//     }
//   }
//   return num.reduce((i, j) => i + j, 0) - n;
// }

// console.log(
//   getMatrixElementsSum([
//     [1, 1, 1],
//     [2, 2, 2],
//     [3, 3, 3],
//   ])
// );