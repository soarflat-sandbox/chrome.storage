import Vue from 'vue';
import Router from 'vue-router';
import store from './store/index.js';
import Settings from './Settings.vue';
import Histories from './components/Histories.vue'

// プラグインをインストール
Vue.use(Router);

// ルートを定義する
const routes = [
  { path: '/', component: Histories },
];

// ルーターを登録する
const router = new Router({
  routes
});

new Vue({
  el: '#settings',
  render: h => h(Settings),
  router,
  store,
});

// import ChromeStorage from './common/ChromeStorage';
//
// const keys = 'dmmItems';
//
// ChromeStorage.get({
//   keys,
//   callback: (items) => {
//     console.log(items);
//   },
// });
