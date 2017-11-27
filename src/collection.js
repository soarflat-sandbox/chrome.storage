import { EventEmitter } from 'events';
import ChromeStorage from './common/ChromeStorage';
import DmmModel from './modules/DmmModel';

const emitter = new EventEmitter();
const keys = 'dmmCollections';

emitter.on('gotItems', (items) => {
  let entity = {};

  entity.dmmCollections = items.dmmCollections || [];

  const data = DmmModel.getItemData({
    itemKeysToGet: ['href', 'title']
  });

  entity.dmmCollections.push(data);

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
