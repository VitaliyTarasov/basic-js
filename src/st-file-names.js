import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  const obj = {};
  const d = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i] in obj) {
      obj[names[i]] += 1;
      d.push(names[i] + `(${obj[names[i]]})`);
    } else {
      if (d.includes(names[i])) {
        d.push(names[i] + `(1)`);
      } else {
        d.push(names[i]);
      }
      obj[names[i]] = 0;
    }
  }
  return d;
}


// function renameFiles(names) {
//   const obj = {};
//   const d = [];
//   for (let i = 0; i < names.length; i++) {
//     if (names[i] in obj) {
//       obj[names[i]] += 1;
//       d.push(a[i] + `(${obj[names[i]]})`);
//     } else {
//       if (d.includes(names[i])) {
//         d.push(names[i] + `(1)`);
//       } else {
//         d.push(names[i]);
//       }
//       obj[names[i]] = 0;
//     }
//   }
//   return d;
// }

// let a = ["file", "file", "image", "file(1)", "file"];
// console.log(renameFiles(a));
// let obj = {};
// let d = [];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] in obj) {
//     console.log(obj[a[i]])
//     obj[a[i]] += 1;
//     d.push(a[i]+`(${obj[a[i]]})`)
//   } else {
//     if (d.includes(a[i])) {
//       d.push(a[i]+`(1)`)
//     } else {
//       d.push(a[i]);
//     }
//     obj[a[i]] = 0;
//   }
// }

// console.log(obj)
// console.log(d)