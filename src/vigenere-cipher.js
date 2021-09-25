import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct;
  }
  encrypt(text, key) {
    if (!text || !key) {
      throw Error("Incorrect arguments!");
    }
    let encrypted = "";
    let j = 0;
    for (let i = 0; i < text.length; i++) {
      let currentLetter = text[i];
      const A = 65;
      const a = 97;

      if (currentLetter.charCodeAt() > 64 && currentLetter.charCodeAt() < 91) {
        let Pi = currentLetter.charCodeAt(0) - A;
        let Ki = key[j % key.length].toUpperCase().charCodeAt() - A;
        let upperLetter = (Pi + (Ki % 26) + 26) % 26;

        encrypted += String.fromCharCode(upperLetter + A);

        j++;
      } else if (
        currentLetter.charCodeAt() > 96 &&
        currentLetter.charCodeAt() < 123
      ) {
        let Pi = currentLetter.charCodeAt() - a;
        let Ki = key[j % key.length].toLowerCase().charCodeAt() - a;
        let lowerLetter = (Pi + (Ki % 26) + 26) % 26;

        encrypted += String.fromCharCode(lowerLetter + a);

        j++;
      } else {
        encrypted += currentLetter;
      }
    }
    if (this.direct !== false) {
      return encrypted.toUpperCase();
    } else {
      return encrypted.toUpperCase().split("").reverse().join("");
    }
  }
  decrypt(encrypted, key) {
    if (!encrypted || !key) {
      throw Error("Incorrect arguments!");
    }
    let decrypted = "";
    let j = 0;
    for (let i = 0; i < encrypted.length; i++) {
      let currentLetter = encrypted[i];
      const A = 65;
      const a = 97;

      if (currentLetter.charCodeAt() > 64 && currentLetter.charCodeAt() < 91) {
        let Ci = currentLetter.charCodeAt(0) - A;
        let Ki = key[j % key.length].toUpperCase().charCodeAt() - A;
        let upperLetter = (Ci - Ki + 26) % 26;

        decrypted += String.fromCharCode(upperLetter + A);

        j++;
      } else if (
        currentLetter.charCodeAt() > 96 &&
        currentLetter.charCodeAt() < 123
      ) {
        let Ci = currentLetter.charCodeAt(0) - a;
        let Ki = key[j % key.length].toLowerCase().charCodeAt() - a;
        let lowerLetter = (Ci - Ki + 26) % 26;

        decrypted += String.fromCharCode(lowerLetter + a);

        j++;
      } else {
        decrypted += currentLetter;
      }
    }
    if (this.direct !== false) {
      return decrypted.toUpperCase();
    } else {
      return decrypted.toUpperCase().split("").reverse().join("");
    }
  }
}