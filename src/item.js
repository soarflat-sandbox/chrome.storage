import Utils from './common/Utils';
import DmmDomHandler from './modules/DmmDomHandler';

const init = () => {
  const keys = 'dmmItems';

  chrome.storage.local.get(keys, (items) => {
    let entity = {};
    const newItem = getItemData();
    entity.dmmItems = updateItems(items, newItem);

    chrome.storage.local.set(entity);
  });
};

const getItemData = () => {
  const functions = [
    {
      key: 'id',
      get: Utils.getId,
    }, {
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
      key: 'actresses',
      get: DmmDomHandler.getActresses,
    }, {
      key: 'favoriteCount',
      get: DmmDomHandler.getFavoriteCount,
    }
  ];

  return Utils.mergeFunctionsReturningData({ functions });
};

const updateItems = (items, newItem) => {
  const dmmItems = items.dmmItems || [];
  const index = dmmItems.findIndex(obj => obj.id === newItem.id);

  if (index > -1) {
    dmmItems.splice(index, 1)
  }

  dmmItems.unshift(newItem);

  return dmmItems;
};

init();
