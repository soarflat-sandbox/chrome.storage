export default class ChromeStorage {
  static get({ storageArea = 'local', keys = null, callback = undefined }) {
    chrome.storage[storageArea].get(keys, (items) => {
      if (typeof callback !== 'undefined') {
        callback(items);
      }
    });
  }

  static set({ storageArea = 'local', items, callback = undefined }) {
    chrome.storage[storageArea].set(items, () => {
      if (typeof callback !== 'undefined') {
        callback();
      }
    });
  }

  static clear({ storageArea = 'local', callback = undefined }) {
    chrome.storage[storageArea].clear(() => {
      if (typeof callback !== 'undefined') {
        callback();
      }
    });
  }
}
