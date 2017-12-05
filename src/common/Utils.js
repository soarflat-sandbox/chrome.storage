export default class Utils {
  static getHref() {
    return location.href;
  }

  static getId() {
    return location.href.match(/cid=(\d|[a-z])+/g)[0].replace('cid=', '');
  }

  static mergeFunctionsReturningData({ functions }) {
    const data = {};

    functions.forEach((fn) => {
      data[fn.key] = fn.get();
    });

    return data;
  }

  static matchKeywords({ keywords, text }) {
    let matches = [];

    for (let i = 0; i < keywords.length; i += 1) {
      if (text.indexOf(keywords[i]) !== -1) {
        matches.push(keywords[i])
      } else {
        break;
      }
    }

    return matches.length === keywords.length;
  }
}
