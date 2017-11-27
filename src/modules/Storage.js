export class Storage {
  static get({ storageArea = 'local', keys, callback = undefined }) {
    chrome.storage[storageArea].get(keys, () => {
      if (typeof callback !== 'undefined') {
        callback();
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
