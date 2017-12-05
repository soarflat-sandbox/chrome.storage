import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      {
        title: 'new String() と String() の違い',
        imageUrl: 'http://materializecss.com/images/sample-1.jpg',
        href: 'https://qiita.com/y_ito/items/33e303877f7eb44b15ff',
        favoriteCount: 224,
        categories: ['webpack', 'JavaScript'],
        actresses: ['John Doe', 'Tom Doe']
      }, {
        title: 'new String() と String() の違い',
        imageUrl: 'http://materializecss.com/images/sample-1.jpg',
        href: 'https://qiita.com/y_ito/items/33e303877f7eb44b15ff',
        favoriteCount: 244,
        categories: ['webpack', 'JavaScript', 'AWS', 'Android'],
        actresses: ['John Doe', 'Tom Doe']
      }, {
        title: 'new String() と String() の違い',
        imageUrl: 'http://materializecss.com/images/sample-1.jpg',
        href: 'https://qiita.com/y_ito/items/33e303877f7eb44b15ff',
        favoriteCount: 3324,
        categories: ['webpack', 'JavaScript', 'AWS', 'Android', 'AWS', 'Android', 'AWS', 'Android'],
        actresses: ['John Doe', 'Tom Doe']
      }, {
        title: 'new String() と String() の違い',
        imageUrl: 'http://materializecss.com/images/sample-1.jpg',
        href: 'https://qiita.com/y_ito/items/33e303877f7eb44b15ff',
        favoriteCount: 4524,
        categories: [],
        actresses: ['John Doe', 'Tom Doe']
      }, {
        title: 'new String() と String() の違い',
        imageUrl: 'http://materializecss.com/images/sample-1.jpg',
        href: 'https://qiita.com/y_ito/items/33e303877f7eb44b15ff',
        favoriteCount: 5524,
        categories: ['webpack', 'JavaScript', 'AWS', 'Android'],
        actresses: ['John Doe', 'Tom Doe']
      }, {
        title: 'new String() と String() の違い',
        imageUrl: 'http://materializecss.com/images/sample-1.jpg',
        href: 'https://qiita.com/y_ito/items/33e303877f7eb44b15ff',
        favoriteCount: 7824,
        categories: ['webpack', 'JavaScript', 'AWS', 'Android'],
        actresses: []
      },
    ],
  },

  strict: process.env.NODE_ENV !== 'production',

  // Vuexを利用するとストア内にゲッター（どのコンポーネント利用可能な算出プロパティ）を定義できる
  // ゲッターは第1引数としてstateを受け取る
  getters: {
    allItems: state => state.items,
    // getNumberOfProducts: state => (state.all) ? state.all.length : 0,
    // cartProducts: state => {
    //   return state.added.map(({ id, quantity }) => {
    //     const product = state.all.find(p => p.id === id);
    //
    //     return {
    //       name: product.name,
    //       price: product.price,
    //       quantity
    //     };
    //   });
    // },
  },

  // ミューテーションを状態を変更するための概念
  // ミューテーションをコミットすることで状態を変更できる
  // 今回はミューテーション・タイプに
  // ADD_TO_CARTとREMOVE_ALLの定数を利用している
  // 定数を設定することによって、共同で作業する人に、アプリケーション全体で
  // 何のミューテーションが可能であるかを一目見ただけで理解できるようにする
  // ミューテーションは同期的でなければならないため非同期をしたいのであれば
  // アクションを利用する
  mutations: {
    [types.REMOVE_ITEM](state, { url }) {
      const index = state.items.findIndex(item => item.href === url);

      if (index > -1) {
        state.items.splice(index, 1)
      }
    },
  },

  // アクションは、状態を変更するのではなく、ミューテーションをコミットするもの
  // そのためミューテーションが存在しなければ、状態は変更できない
  // それぞれのアクションはADD_TO_CARTとREMOVE_ALLのミューテションをコミットする
  actions: {
    removeItem({ commit }, item) {
      commit(types.REMOVE_ITEM, {
        url: item.href
      });
    },
  },
});
