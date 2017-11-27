import { EventEmitter } from 'events';
import Storage from './modules/Storage';
import DmmModel from './modules/DmmModel';

const emitter = new EventEmitter();
const keys = 'dmmCollections';

emitter.on('gotItems', (items) => {
  let entity = {};

  entity.dmmCollections = items.dmmCollections || [];

  const data = DmmModel.getItemData({
    itemsToGet: ['href', 'title']
  });

  entity.dmmCollections.push(data);

  Storage.set({
    items: entity,
  });
});

Storage.get({
  keys,
  callback: (items) => {
    emitter.emit('gotItems', items);
  },
});
