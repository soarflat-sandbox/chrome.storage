<template>
  <nav class="navbar is-transparent is-fixed-top">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="https://bulma.io/">閲覧履歴</a>
          <a class="navbar-item" href="https://bulma.io/">閲覧履歴</a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <div class="control">
                <div class="select">
                  <select v-model="sortType">
                    <option value="history">閲覧履歴順</option>
                    <option value="date">新着順</option>
                    <option value="favoriteCount">お気に入り登録数順</option>
                  </select>
                </div>
              </div>

              <p class="control has-icons-left">
                <input v-on:input="search($event.target.value)" class="input" type="text" placeholder="search">
                <span class="icon is-small is-left">
                  <i class="fa fa-search"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import {
    mapGetters, mapActions
  } from 'vuex';
  import throttle from 'throttle-debounce/throttle';

  export default {
    name: 'navBar',
    data() {
      return {
        sortType: 'history'
      }
    },
    computed: {
      ...mapGetters({
        items: 'allItems',
      }),
    },
    methods: {
      ...mapActions(['searchItems', 'updateSort']),
      search: throttle(300, function (value) {
        this.searchItems(value);
      }),
    },
    watch: {
      sortType: function () {
        this.updateSort(this.sortType);
      },
    },
  }
</script>

<style lang="scss">
  /*.nav {*/
  /*height: auto;*/
  /*margin-bottom: 2rem;*/
  /*}*/

  /*.nav-item img {*/
  /*max-height: 3.5rem;*/
  /*}*/

  /*.active-bottom-border {*/
  /*border-bottom: 3px solid #00d1b2;*/
  /*color: #00d1b2;*/
  /*padding-bottom: calc(.75rem - 8px);*/
  /*}*/
</style>
