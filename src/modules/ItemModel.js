import DomManager from '../common/DomManager';

export default class ItemModel {
  static get({ itemKeys }) {
    const itemData = {};

    itemKeys.forEach((itemKey) => {
      itemData[itemKey] = this[itemKey]();
    });

    return itemData;
  }

  static href() {
    return location.href;
  }

  static title() {
    return DomManager.getText({ selectors: '#title' });
  }

  static categories() {
    const trElement = DomManager.getElement({
      selectors: '.box-rank + table > tbody > tr',
      index: 10
    });
    return DomManager.getTexts({
      element: trElement,
      selectors: 'a'
    });
  }

  static actoress() {
  }

  static favoriteCount() {
    return Number(DomManager.getText({ selectors: '.box-rank .tx-count > span' }));
  }
}
