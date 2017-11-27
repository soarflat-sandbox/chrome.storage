import DomManager from '../common/DomManager';

export default class DmmModel {
  static getItemData({ itemKeysToGet }) {
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
}
