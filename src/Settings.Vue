<template>
  <div id="settings">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue';

  export default {
    name: 'settings',
    components: {
      NavBar
    },
    data() {
      return {}
    }
  }
</script>
