export default class Utils {
  static getHref() {
    return location.href;
  }

  static mergeFunctionsReturningData({ functions }) {
    const data = {};

    functions.forEach((fn) => {
      data[fn.key] = fn.get();
    });

    return data;
  }
}
