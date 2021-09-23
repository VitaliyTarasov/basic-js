import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const reverseDomains = [];
  const obj = {};

  for (let i = 0; i < domains.length; i++) {
    reverseDomains.push(domains[i].split(".").reverse().join("."));
  }

  let dns = reverseDomains.map(function findDns(elem) {
    const d = [];
    const indexes = [];
    for (let i = 0; i < elem.length; i++) {
      if (elem[i] === ".") {
        indexes.push(i);
      }
    }

    for (let i = 0; i < indexes.length + 1; i++) {
      if (indexes[i]) {
        d.push("." + elem.slice(0, indexes[i]));
      } else {
        d.push("." + elem);
      }
    }
    return d;
  });

  for (let i = 0; i < dns.length; i++) {
    for (let j = 0; j < dns[i].length; j++) {
      if (obj[dns[i][j]]) {
        obj[dns[i][j]] += 1;
      } else {
        obj[dns[i][j]] = 1;
      }
    }
  }
  return obj;
}