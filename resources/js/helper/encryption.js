import CryptoJS from 'crypto-js';
import { debounce } from 'lodash';

export const AES = {
	encrypt,
	decrypt
};

const key = '';
const iv = 'stock_management';

function encrypt(data) {
	const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
	  iv: CryptoJS.enc.Utf8.parse(iv),
	  mode: CryptoJS.mode.CBC
	});
  
	return cipher.toString();
  }
  
  function decrypt(data) {
	const cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
	  iv: CryptoJS.enc.Utf8.parse(iv),
	  mode: CryptoJS.mode.CBC
	});
  
	return CryptoJS.enc.Utf8.stringify(cipher).toString();
  }