export default class Utils {
  static getHref() {
    return location.href;
  }

  static mergeFunctionReturningData({ options }) {
    const data = {};

    options.forEach((option) => {
      data[option.key] = option.get();
    });

    return data;
  }
}
