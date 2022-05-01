const { NotImplementedError } = require('../extensions/index.js');

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
class VigenereCipheringMachine { 
  constructor(cheked) {
    if (cheked == undefined) {cheked = true;}
    this.cheked = cheked;
  }
  encrypt(message, key) {
    //throw new NotImplementedError('Not implemented');
    if ((message == undefined) || (key == undefined)) {
      throw new Error('Incorrect arguments!');
    }

    let strAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    message = message.toUpperCase();
    key = key.toUpperCase();

    while (message.length > key.length) {
      key += key;
    }

    for (let i = 0; i < message.length; i++) {
      if (!strAlpha.includes(message[i])) {
        key = key.slice(0, i) + message[i] + key.slice(i, message.length);
      }
    }
    
    key = key.slice(0, message.length);

    let resStr = '';

    for (let i = 0; i < message.length; i++) {
      if (strAlpha.includes(message[i])) {
        resStr += strAlpha[(strAlpha.indexOf(message[i]) + strAlpha.indexOf(key[i])) % 26]
      } else {
        resStr += message[i]
      }
    }

    if (this.cheked == true) {
      return resStr
    } else {
      return resStr.split('').reverse().join('')
    }
  }
  decrypt(encryptedMessage, key) {
    //throw new NotImplementedError('Not implemented');
    if ((encryptedMessage == undefined) || (key == undefined)) {
      throw new Error('Incorrect arguments!');
    }

    let strAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    while (encryptedMessage.length > key.length) {
      key += key;
    }

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (!strAlpha.includes(encryptedMessage[i])) {
        key = key.slice(0, i) + encryptedMessage[i] + key.slice(i, encryptedMessage.length);
      }
    }
    
    key = key.slice(0, encryptedMessage.length);

    let resStr = '';

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (strAlpha.includes(encryptedMessage[i])) {
        if (strAlpha.indexOf(encryptedMessage[i]) < strAlpha.indexOf(key[i])) {
          resStr += strAlpha[strAlpha.indexOf(encryptedMessage[i]) + 26 - strAlpha.indexOf(key[i])]  
        } else {
          resStr += strAlpha[strAlpha.indexOf(encryptedMessage[i]) - strAlpha.indexOf(key[i])]
        }
      } else {
        resStr += encryptedMessage[i]
      }
    }

    if (this.cheked == true) {
      return resStr
    } else {
      return resStr.split('').reverse().join('')
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
