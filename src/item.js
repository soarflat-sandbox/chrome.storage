import { EventEmitter } from 'events';
import Utils from './common/Utils';
import ChromeStorage from './common/ChromeStorage';
import DmmDomHandler from './modules/DmmDomHandler';

const emitter = new EventEmitter();
const keys = 'dmmItems';

const init = () => {
  ChromeStorage.get({
    keys,
    callback: (items) => {
      emitter.emit('getItemsFromChromeStorage', items);
    },
  });
};

emitter.on('getItemsFromChromeStorage', (items) => {
  const options = [
    {
      key: 'href',
      get: Utils.getHref,
    }, {
      key: 'title',
      get: DmmDomHandler.getTitle,
    }, {
      key: 'categories',
      get: DmmDomHandler.getCategories,
    }, {
      key: 'favoriteCount',
      get: DmmDomHandler.getFavoriteCount,
    }
  ];
  const data = Utils.mergeFunctionReturningData({ options });
  const entity = {};
  entity.dmmItems = items.dmmItems || [];

  const index = entity.dmmItems.findIndex(obj => obj.href === data.href);
  if (index > -1) {
    entity.dmmItems.splice(index, 1)
  }
  entity.dmmItems.push(data);

  ChromeStorage.set({
    items: entity,
  });
});

init();
