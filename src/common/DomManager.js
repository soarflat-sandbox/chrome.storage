export default class DomManager {
  /**
   * 複数のセレクタから指定したindexのNodeListを返す
   * * @param element
   * @param selectors
   * @param index {Number} 取得したいNodeListのインデックス
   * @returns {NodeList}
   */
  static getElement({ element = document, selectors, index = 0 }) {
    return element.querySelectorAll(selectors)[index];
  }

  /**
   * セレクタから取得したテキストを文字列返す
   * @param element
   * @param selectors
   * @param index {Number} 取得したいNodeListのインデックス
   * @returns {String}
   */
  static getText({ element = document, selectors, index = 0 }) {
    return element.querySelectorAll(selectors)[index].innerText.trim();
  }

  /**
   * セレクタから取得したテキストを配列に格納して返す
   * @param element
   * @param selectors
   * @returns {Array}
   */
  static getTexts({ element = document, selectors }) {
    const texts = element.querySelectorAll(selectors);
    const tempTexts = [];

    Array.prototype.forEach.call(texts, (text) => {
      tempTexts.push(text.innerText.trim());
    });

    return tempTexts;
  }
}
