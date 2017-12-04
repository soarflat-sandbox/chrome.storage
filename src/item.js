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
  const functions = [
    {
      key: 'href',
      get: Utils.getHref,
    }, {
      key: 'imageUrl',
      get: DmmDomHandler.getImageUrl,
    }, {
      key: 'title',
      get: DmmDomHandler.getTitle,
    }, {
      key: 'categories',
      get: DmmDomHandler.getCategories,
    }, {
      key: 'actress',
      get: DmmDomHandler.getActress,
    }, {
      key: 'favoriteCount',
      get: DmmDomHandler.getFavoriteCount,
    }
  ];
  const data = Utils.mergeFunctionsReturningData({ functions });
  const entity = {};
  entity.dmmItems = items.dmmItems || [];

  console.log(items.dmmItems);

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
