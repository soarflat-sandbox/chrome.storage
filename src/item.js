import Utils from './common/Utils';
import DmmDomHandler from './modules/DmmDomHandler';

const init = () => {
  const keys = 'dmmItems';

  chrome.storage.local.get(keys, (items) => {
    const newItem = getItemData();
    const updatedItems = updateItems(items, newItem);

    console.log(updatedItems);

    chrome.storage.local.set(updatedItems);
  });
};

const getItemData = () => {
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

  return Utils.mergeFunctionsReturningData({ functions });
};

const updateItems = (items, newItem) => {
  const entity = {};
  entity.dmmItems = items.dmmItems || [];
  const index = entity.dmmItems.findIndex(obj => obj.href === newItem.href);

  if (index > -1) {
    entity.dmmItems.splice(index, 1)
  }

  return entity.dmmItems.push(data);
};

init();
