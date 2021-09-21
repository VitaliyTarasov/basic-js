import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = 2 ** disksNumber - 1;
  const percent = (turns * 100) / turnsSpeed;
  const seconds = Math.floor(((60 * percent) / 100) * 60);
  const obj = { turns: turns, seconds: seconds };
  return obj;
}

// function calculateHanoi(disksNumber, turnsSpeed) {
//   const turns = 2 ** disksNumber - 1;
//   const percent = (turns * 100) / turnsSpeed;
//   const seconds = Math.floor(((60 * percent) / 100) * 60);
//   const obj = { 'turns': turns, 'seconds': seconds };
//   return obj;
// }