import chrome from 'sinon-chrome';
import assert from 'assert';
import ChromeStorage from '../../src/common/ChromeStorage';

describe('ChromeStorage', () => {
  before(() => {
    global.chrome = chrome;

    // sinon-chromeをimportしているため
    // chrome.storage.local.getなどはsinon stubsに置き換わっている
    chrome.storage.local.get
      .withArgs('dmmItems')
      .yields([{
        title: 'new String() と String() の違い',
        href: 'https://qiita.com/y_ito/items/33e303877f7eb44b15ff',
      }]);
  });

  it('should returns item data', () => {
    let called = false;

    ChromeStorage.get({
      keys: 'dmmItems',
      callback: (items) => {
        const item = items[0];
        assert.equal(item.title, 'new String() と String() の違い');
        assert.equal(item.href, 'https://qiita.com/y_ito/items/33e303877f7eb44b15ff');
        called = true;
      },
    });

    assert.ok(called, 'called callback function');
  });
});
