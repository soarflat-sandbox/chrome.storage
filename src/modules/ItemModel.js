import DomManager from '../common/DomManager';

export default class ItemModel {
  static get({ itemKeysToGet }) {
    const itemData = {};

    itemKeysToGet.forEach((itemKeyToGet) => {
      itemData[itemKeyToGet] = this[itemKeyToGet]();
    });

    return itemData;
  }

  static href() {
    return location.href;
  }

  static title() {
    return DomManager.getText({ selector: '.ArticleMainHeader__title' });
  }

  static categories() {
    return DomManager.getTexts({ selector: '' });
  }

  static actoress() {

  }

  static favoriteCount() {
    return Number(DomManager.getText({ selector: '.box-rank .tx-count > span' }));
  }
}
