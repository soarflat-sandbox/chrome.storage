import sinon from 'sinon';
import assert from 'assert';

import Utils from '../src/common/Utils';

const keys = 'dmmItems';

describe('ChromeStorageからデータを取得後の処理', () => {
  const items = {};
  items.dmmItems = [
    {
      title: 'new String() と String() の違い',
      href: 'https://qiita.com/y_ito/items/33e303877f7eb44b15ff',
    }, {
      title: 'JavaScriptの配列の使い方まとめ。要素の追加,結合,取得,削除。',
      href: 'https://qiita.com/takeharu/items/d75f96f81ff83680013f',
    }
  ];

  const stub = sinon.stub(Utils, 'mergeFunctionReturningData');
  stub.returns({
    title: 'new String() と String() の違い',
    href: 'https://qiita.com/y_ito/items/33e303877f7eb44b15ff',
  });
  const data = Utils.mergeFunctionReturningData({ options: {} });

  describe('取得したデータとDOMから取得したデータの重複チェック', () => {
    it('データが重複していたら、古いデータを消し、新しくデータを追加', () => {
      const entity = {};
      entity.dmmItems = items.dmmItems || [];

      const index = entity.dmmItems.findIndex(obj => obj.href === data.href);
      if (index > -1) {
        entity.dmmItems.splice(index, 1)
      }

      entity.dmmItems.push(data);

      assert(entity.dmmItems[1].href === 'https://qiita.com/y_ito/items/33e303877f7eb44b15ff');
    });
  });
});
