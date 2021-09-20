import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(arr) {
  if (arr) { 
    const s = [];
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "string" && arr[i].length > 0 && arr[i].trim()) {
        s.push(arr[i].trim()[0]);
      }
    }
    console.log(s);
    return s
      .map((i) => i.toUpperCase())
      .sort()
      .join("");
  }
  return false;
}
