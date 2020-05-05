let localStorage: Storage;

export function getStorage(): Storage {
  if (localStorage) return localStorage;

  if (typeof process === 'undefined' && typeof window !== 'undefined') {
    localStorage = window.localStorage;
  } else if (typeof process !== 'undefined') {
    const LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  } else {
    throw new Error('Unsupported environment');
  }

  return localStorage;
}
