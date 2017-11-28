import chrome from 'sinon-chrome';
import assert from 'assert';
import ChromeStorage from '../../src/common/ChromeStorage';

describe('ChromeStorage', () => {
  before(() => {
    global.chrome = chrome;
    chrome.storage.local.get.yields([{
      title: 'new String() と String() の違い',
      href: 'https://qiita.com/y_ito/items/33e303877f7eb44b15ff',
    }]);
  });

  it('should returns item data', () => {
    ChromeStorage.get({
      keys: 'dmmCollections',
      callback: (items) => {
        const item = items[0];
        assert.equal(item.title, 'new String() と String() の違い');
        assert.equal(item.href, 'https://qiita.com/y_ito/items/33e303877f7eb44b15ff');
      },
    });
  });
});
