import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (
    Object.prototype.toString.call(date) === "[object Date]" &&
    Object.getOwnPropertyNames(date).length < 1
  ) {
    const SEASONS = {
      summer: [5, 6, 7],
      autumn: [8, 9, 10],
      winter: [11, 0, 1],
      spring: [2, 3, 4],
    };
    for (let [key, value] of Object.entries(SEASONS)) {
      if (value.includes(date.getMonth())) {
        return key;
      }
    }
  }
  throw new Error("Invalid date!");
}

