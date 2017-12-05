<template>
  <section class="section">
    <div id="histories" class="container">
      <div class="columns is-multiline">

        <div v-for="item in items" class="column is-one-quarter">
          <div class="card card-equal-height">
            <div class="card-image card-relative">
              <button @click="removeItem(item)" class="delete is-medium card-delete-button"></button>
              <figure class="image">
                <a :href="item.href" target="_blank">
                  <img :src="item.imageUrl">
                </a>
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-size-6"><a :href="item.href" target="_blank">{{ item.title }} </a></p>
              <div class="content">
                <p>
                  <i class="fa fa-heart has-text-danger" aria-hidden="true"></i>
                  <span>{{ item.favoriteCount }}</span>
                </p>
                <p v-show="item.categories.length > 0" class="subtitle is-7 has-text-weight-semibold">カテゴリ</p>
                <div v-show="item.categories.length > 0" class="tags">
                  <a v-for="category in item.categories" :href="category | categoryUrl" target="_blank" class="tag">{{ category }}</a>
                </div>
                <p v-show="item.actresses.length > 0" class="subtitle is-7 has-text-weight-semibold">出演女優</p>
                <div v-show="item.actresses.length > 0" class="tags">
                  <a v-for="actress in item.actresses" :href="actress | categoryUrl" target="_blank" class="tag">{{ actress }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'histories',
    computed: {
      ...mapGetters(['allItems', 'searchedItems']),
      items() {
        return (this.searchedItems.length > 0)
          ? this.searchedItems
          : this.allItems;
      }
    },
    filters: {
      categoryUrl(category) {
        return `https://qiita.com/tags/${category}`;
      },
    },
    methods: {
      update() {
//        chrome.storage.local.get('dmmItems', (items) => {
//          this.items = items.dmmItems;
//        });
      },
      ...mapActions(['removeItem']),
    },
    created() {
      this.update();
    }
  }
</script>

<style lang="scss" scoped>
  .card-equal-height {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .card-relative {
    position: relative;
  }

  .card-delete-button {
    position: absolute;
    z-index: 2;
    top: -10px;
    right: -10px;
    background: rgba(255, 56, 96, 1);
    transition: all 300ms;
    &:hover {
      background: rgba(255, 56, 96, .8);
    }
  }
</style>
