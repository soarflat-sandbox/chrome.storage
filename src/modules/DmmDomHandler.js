import DomHandler from '../common/DomHandler';

/**
 * DMMの商品ページのDOMに対する処理要求に応じるメソッドを提供するクラス
 */
export default class DmmDomHandler {
  static getTitle() {
    return document.querySelectorAll('#title')[0].innerText.trim();
  }

  static getImageUrl() {
    return document
      .getElementById('sample-video')
      .querySelectorAll('img')[0]
      .src;
  }

  static getCategories() {
    const element = document.querySelectorAll('.box-rank + table > tbody > tr')[10];
    return DomHandler.getTexts({
      element,
      selectors: 'a'
    });
  }

  static getActress() {
    const element = document.querySelectorAll('.box-rank + table > tbody > tr')[5];
    return DomHandler.getTexts({
      element,
      selectors: 'a'
    });
  }

  static getFavoriteCount() {
    return Number(document
      .querySelectorAll('.box-rank .tx-count > span')[0]
      .innerText
      .trim()
    );
  }
}
