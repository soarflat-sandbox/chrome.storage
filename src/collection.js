import { EventEmitter } from 'events';
import Utils from './common/Utils';
import ChromeStorage from './common/ChromeStorage';
import DmmDomHandler from './modules/DmmDomHandler';

const emitter = new EventEmitter();
const keys = 'dmmItems';

emitter.on('gotItems', (items) => {
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
  entity.dmmItems.push(data);

  ChromeStorage.set({
    items: entity,
  });
});

ChromeStorage.get({
  keys,
  callback: (items) => {
    emitter.emit('gotItems', items);
  },
});
