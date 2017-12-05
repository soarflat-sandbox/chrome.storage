import DomHandler from '../common/DomHandler';

/**
 * DMMの商品ページのDOMに対する処理要求に応じるメソッドを提供するクラス
 */
export default class DmmDomHandler {

  /**
   * 商品タイトルを取得
   * @return {string}
   */
  static getTitle() {
    return document.querySelectorAll('#title')[0].innerText.trim();
  }

  /**
   * 商品画像のURLを取得
   * @return {string}
   */
  static getImageUrl() {
    return document
      .getElementById('sample-video')
      .querySelectorAll('img')[0]
      .src;
  }

  /**
   * 商品のカテゴリを取得
   * @return {array}
   */
  static getCategories() {
    const element = document.querySelectorAll('.box-rank + table > tbody > tr')[10];
    return DomHandler.getTexts({
      element,
      selectors: 'a'
    });
  }

  /**
   * 出演女優を取得
   * @return {array}
   */
  static getActress() {
    const element = document.querySelectorAll('.box-rank + table > tbody > tr')[5];
    return DomHandler.getTexts({
      element,
      selectors: 'a'
    });
  }

  /**
   * 商品のお気に入り数を取得
   * @return {number}
   */
  static getFavoriteCount() {
    return Number(document
      .querySelectorAll('.box-rank .tx-count > span')[0]
      .innerText
      .trim()
    );
  }
}
