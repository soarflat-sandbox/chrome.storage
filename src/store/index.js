import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      {
        id: 'cc919e21-ae5b-5e1f-d023-c40ee669520c',
        name: 'COBOL 101 vintage',
        description: 'Learn COBOL with this vintage programming book',
        price: 399,
      }, {
        id: 'bcd755a6-9a19-94e1-0a5d-426c0303454f',
        name: 'Sharp C2719 curved TV',
        description: 'Watch TV like never before with the brand new curved screen technology',
        price: 1995,
      }, {
        id: '727026b7-7f2f-c5a0-ace9-cc227e686b8e',
        name: 'Remmington X mechanical keyboard',
        description: 'Excellent for gaming and typing, this Remmington X keyboard ' +
        'features tactile, clicky switches for speed and accuracy',
        price: 595,
      },
    ],
  },

  strict: process.env.NODE_ENV !== 'production',

  getters: {
    items: state => state.items,
  },

  mutations: {
    [types.ADD_ITEM](state, { item }) {},
    [types.REMOVE](state, { index }) {},
  },

  actions: {
    addItem({ commit }, item) {
      commit(types.ADD_ITEM, {
        item,
      });
    },
    remove({ commit }, index) {
      commit(types.REMOVE, {
        index
      });
    },
  },
});
