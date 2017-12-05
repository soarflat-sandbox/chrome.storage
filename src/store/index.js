import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation-types';
import Utils from '../common/Utils';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      {
        title: 'new String() と String() の違い',
        imageUrl: 'https://dummyimage.com/300/09f/fff.png',
        href: 'https://qiita.com/y_ito/items/33e303877f7eb44b15ff',
        favoriteCount: 224,
        categories: ['webpack', 'JavaScript'],
        actresses: ['John Doe', 'Tom Doe']
      }, {
        title: 'Macに別れを告げて、クラウド中心の開発生活を始めるまで',
        imageUrl: 'https://dummyimage.com/300/09f/fff.png',
        href: 'https://qiita.com/cognitom/items/c489991a05f9abac748f',
        favoriteCount: 244,
        categories: ['webpack', 'JavaScript', 'AWS', 'Android'],
        actresses: ['John Doe', 'Tom Doe']
      }, {
        title: '一つ上のチームメンバーのそだてかた',
        imageUrl: 'https://dummyimage.com/300/09f/fff.png',
        href: 'https://qiita.com/hondaYoshitaka/items/273f5e674fe3c1663a38',
        favoriteCount: 3324,
        categories: ['webpack', 'JavaScript', 'AWS', 'Android', 'AWS', 'Android', 'AWS', 'Android'],
        actresses: ['John Doe', 'Tom Doe']
      }, {
        title: 'Google Homeに話しかけて娘のおむつ交換を記録する',
        imageUrl: 'https://dummyimage.com/300/09f/fff.png',
        href: 'https://qiita.com/rechiba3/items/ef163b0fc21b37e869ef',
        favoriteCount: 4524,
        categories: [],
        actresses: ['John Doe', 'Tom Doe']
      }, {
        title: 'Android のコンパイル済み Layout Xml を Web 経由で差し込めるようにした話',
        imageUrl: 'https://dummyimage.com/300/09f/fff.png',
        href: 'https://qiita.com/YutaSakata/items/7f6c92746695c9808181',
        favoriteCount: 5524,
        categories: ['webpack', 'JavaScript', 'AWS', 'Android'],
        actresses: ['John Doe', 'Tom Doe']
      }, {
        title: 'ReactにするかVue.jsにするか、jQueryだけ触っていたエンジニアがサンプル作って比較してみた',
        imageUrl: 'https://dummyimage.com/300/09f/fff.png',
        href: 'https://qiita.com/ykyk1218/items/a252b04c4859446c3fc1',
        favoriteCount: 7824,
        categories: ['webpack', 'JavaScript', 'AWS', 'Android'],
        actresses: []
      },
    ],
    searchedItems: [],
  },

  strict: process.env.NODE_ENV !== 'production',

  // Vuexを利用するとストア内にゲッター（どのコンポーネント利用可能な算出プロパティ）を定義できる
  // ゲッターは第1引数としてstateを受け取る
  getters: {
    allItems: state => state.items,
    searchedItems: state => state.searchedItems,
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
    [types.SEARCH_ITEMS](state, { keywords }) {
      if (keywords === '') {
        state.searchedItems = [];
      } else {
        state.searchedItems = state.items.filter((item) => {
          return (
            Utils.matchKeywords({
              keywords: keywords.split(' '),
              text: item.title
            })
          );
        });
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
    searchItems({ commit }, keywords) {
      commit(types.SEARCH_ITEMS, {
        keywords
      });
    },
  },
});
