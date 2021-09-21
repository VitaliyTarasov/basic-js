import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  if (!str) {
    String(str);
  }
  if (!options["additionSeparator"]) {
    options["additionSeparator"] = "|";
  }
  if (!options["separator"]) {
    options["separator"] = "+";
  }
  let s = [];
  const additionString = [];
  if (
    options["additionRepeatTimes"] > 0 &&
    options["addition"] !== undefined
  ) {
    for (let i = 0; i < options["additionRepeatTimes"]; i++) {
      additionString.push(String(options["addition"]));
    }
  } else if (options["addition"] !== undefined) {
    additionString.push(String(options["addition"]));
  }
  if (options["repeatTimes"] > 0) {
    for (let i = 0; i < options["repeatTimes"]; i++) {
      s.push(str);
    }
  } else {
    s.push(str);
  }
  for (let i = 0; i < s.length; i++) {
    s[i] += additionString.join(options["additionSeparator"]);
  }
  return s.join(options["separator"]);
}
