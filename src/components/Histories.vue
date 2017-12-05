<template>
  <section class="section">
    <div id="histories" class="container">
      <div class="columns is-multiline">

        <div v-for="item in items" class="column is-one-third">
          <div class="card card-equal-height">
            <div class="card-image">
              <button @click="removeItem(item)" class="delete is-medium card-delete-button"></button>
              <figure class="image">
                <a :href="item.href" target="_blank">
                  <img :src="item.imageUrl | imageUrl">
                </a>
              </figure>
            </div>
            <div class="card-content">
              <p class="title">
                <a :href="item.href" target="_blank">{{ item.title }} </a>
              </p>
              <div class="content">
                <p>
                  <i class="fa fa-heart has-text-danger"></i>
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
  import {
    mapGetters, mapActions
  } from 'vuex';
  import orderBy from 'lodash.orderby';

  export default {
    name: 'histories',
    computed: {
      ...mapGetters(['allItems', 'searchedItems', 'sort']),
      items() {
        let items = (this.searchedItems.length > 0)
          ? this.searchedItems
          : this.allItems;

        if (this.sort.favoriteCount) {
          return orderBy(items, ['favoriteCount'], ['desc']);
        }

        return items;
      }
    },
    filters: {
      categoryUrl(category) {
        return `http://www.dmm.co.jp/search/=/searchstr=${category}/analyze=V1EBDlcEUQQ_/limit=120/n1=FgRCTw9VBA4GAVhfWkIHWw__/n2=Aw1fVhQKX1ZRAlhMUlo5QQgBU1lR/sort=ranking/`;
      },
      imageUrl(imageUrl) {
        return imageUrl.replace(/ps.jpg$/g, 'pl.jpg');
      }
    },
    methods: {
      update() {
        chrome.storage.local.get('dmmItems', (items) => {
          this.setItems(items.dmmItems);
        });
      },
      ...mapActions(['removeItem', 'setItems']),
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

  .card-content {
    padding: 15px;

    .title {
      font-size: 13px;
      line-height: 1.3rem;
    }
  }

  .card-image {
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
