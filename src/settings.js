import ChromeStorage from './common/ChromeStorage';

const keys = 'dmmItems';

ChromeStorage.get({
  keys,
  callback: (items) => {
    console.log(items);
  },
});
