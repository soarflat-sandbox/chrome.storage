export default class DomManager {
  static getText({ selector }) {
    return document.querySelectorAll(selector)[0].innerText.trim();
  }
}
