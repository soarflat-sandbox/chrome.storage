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
