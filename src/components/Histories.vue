<template>
  <div id="histories" class="container">
    <h1>Histories</h1>

    <ul v-for="item in items">
      <li>
        <a :href="item.href" target="_blank">
          <p>{{item.title}}</p>
          <p>
            <img :src="item.imageUrl" :alt="item.title">
          </p>
          <p>{{item.favoriteCount}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'histories',
    data() {
      return {
        items: [],
      }
    },
    methods: {
      update() {
        chrome.storage.local.get('dmmItems', (items) => {
          this.items = items.dmmItems;
        });
      },
    },
    created() {
      this.update();
    }
  }
</script>
