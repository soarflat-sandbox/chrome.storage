<template>
  <nav class="navbar is-transparent">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="https://bulma.io/">閲覧履歴</a>
          <a class="navbar-item" href="https://bulma.io/">閲覧履歴</a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input class="input" type="email" placeholder="search">
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
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'navBar',
    computed: {
      ...mapGetters({
        items: 'allItems',
      }),
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
