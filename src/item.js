import Utils from './common/Utils';
import ChromeStorage from './common/ChromeStorage';
import DmmDomHandler from './modules/DmmDomHandler';

const keys = 'dmmItems';

const init = () => {
  ChromeStorage.get({
    keys,
    callback: (items) => {
      const newItem = getItemData();
      const updatedItems = updateItems(items, newItem);

      console.log(updatedItems);

      ChromeStorage.set({
        items: updatedItems,
      });
    },
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
