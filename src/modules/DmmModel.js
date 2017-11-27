import DomManager from '../common/DomManager';

export default class DmmModel {
  static getItemData({ itemsToGet }) {
    const itemData = {};

    itemsToGet.forEach((itemToGet) => {
      itemData[itemToGet] = this[itemToGet]();
    });

    return itemData;
  }

  static href() {
    return location.href;
  }

  static title() {
    return DomManager.getText({ selector: '.ArticleMainHeader__title' });
  }
}
