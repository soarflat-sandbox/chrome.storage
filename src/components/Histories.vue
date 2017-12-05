<template>
  <section class="section">
    <div id="histories" class="container">
      <h1 class="title">閲覧履歴</h1>
      <div class="columns is-multiline">
        <div v-for="item in items" class="column is-one-quarter">
          <div class="card bm--card-equal-height">
            <div class="card-image">
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

                <p v-show="item.categories.length > 0" class="subtitle is-7">カテゴリ</p>
                <div class="tags">
                  <a v-for="category in item.categories" :href="category | categoryUrl" target="_blank" class="tag">{{ category }}</a>
                </div>

                <p v-show="item.actresses.length > 0" class="subtitle is-7">出演女優</p>
                <div class="tags">
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
  export default {
    name: 'histories',
    data() {
      return {
        items: [{
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
          favoriteCount: 224,
          categories: ['webpack', 'JavaScript', 'AWS', 'Android'],
          actresses: ['John Doe', 'Tom Doe']
        }, {
          title: 'new String() と String() の違い',
          imageUrl: 'http://materializecss.com/images/sample-1.jpg',
          href: 'https://qiita.com/y_ito/items/33e303877f7eb44b15ff',
          favoriteCount: 224,
          categories: ['webpack', 'JavaScript', 'AWS', 'Android', 'AWS', 'Android', 'AWS', 'Android', 'AWS', 'Android'],
          actresses: ['John Doe', 'Tom Doe']
        }, {
          title: 'new String() と String() の違い',
          imageUrl: 'http://materializecss.com/images/sample-1.jpg',
          href: 'https://qiita.com/y_ito/items/33e303877f7eb44b15ff',
          favoriteCount: 224,
          categories: [],
          actresses: ['John Doe', 'Tom Doe']
        }, {
          title: 'new String() と String() の違い',
          imageUrl: 'http://materializecss.com/images/sample-1.jpg',
          href: 'https://qiita.com/y_ito/items/33e303877f7eb44b15ff',
          favoriteCount: 224,
          categories: ['webpack', 'JavaScript', 'AWS', 'Android'],
          actresses: ['John Doe', 'Tom Doe']
        }, {
          title: 'new String() と String() の違い',
          imageUrl: 'http://materializecss.com/images/sample-1.jpg',
          href: 'https://qiita.com/y_ito/items/33e303877f7eb44b15ff',
          favoriteCount: 224,
          categories: ['webpack', 'JavaScript', 'AWS', 'Android'],
          actresses: []
        }],
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
    },
    created() {
      this.update();
    }
  }
</script>

<style scoped>
  .bm--card-equal-height {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
