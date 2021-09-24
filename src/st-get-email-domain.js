import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  const indexes = [];
  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      indexes.push(i);
    }
  }
  return email.slice(indexes[indexes.length - 1] + 1);
}