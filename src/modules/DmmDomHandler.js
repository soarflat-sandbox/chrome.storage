import DomHandler from '../common/DomHandler';

/**
 * DMMの商品ページのDOMに対する処理要求に応じるメソッドを提供するクラス
 */
export default class DmmDomHandler {
  static getTitle() {
    return DomHandler.getText({ selectors: '#title' });
  }

  static getCategories() {
    const element = document.querySelectorAll('.box-rank + table > tbody > tr')[10];
    return DomHandler.getTexts({
      element,
      selectors: 'a'
    });
  }

  static getActoress() {
  }

  static getFavoriteCount() {
    return Number(DomHandler.getText({ selectors: '.box-rank .tx-count > span' }));
  }
}
