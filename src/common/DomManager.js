export default class DomManager {
  /**
   * セレクタから取得したテキストを文字列返す
   * @param selector
   * @returns {String}
   */
  static getText({ selector }) {
    return document.querySelectorAll(selector)[0].innerText.trim();
  }

  /**
   * セレクタから取得したテキストを配列に格納して返す
   * @param selector
   * @returns {Array}
   */
  static getTexts({ selector }) {
    const texts = document.querySelectorAll(selector);
    const tempTexts = [];

    Array.prototype.forEach.call(texts, (text) => {
      tempTexts.push(text.innerText.trim());
    });

    return tempTexts;
  }
}
