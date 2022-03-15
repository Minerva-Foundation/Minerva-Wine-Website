<template>
  <div class="clubWrapper">
    <aside class="clubHeader">
      <div class="headerContent">
        <h2 class="customh2">Welcome to</h2>
        <h1 class="customh1">Minerva Club</h1>
      </div>
    </aside>
    <ul
      class="linkWrapper"
      :style="{
        'grid-template-columns':
          'repeat(auto-fill, minmax(max(610px, 100%/' +
          articleCount +
          '), 1fr))',
      }"
    >
      <NuxtLink
        v-for="article in articles"
        :key="article._id"
        :to="`/club/${article.slug.current}`"
      >
        <ArticleCard :article="article" />
      </NuxtLink>
      <div class="borderhiderR"></div>
      <div class="borderhiderB"></div>
      <div class="borderhiderL"></div>
      <div class="borderhiderT"></div>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as defTypes from '~/assets/ts/defaultTypes';
import { getBaseArticleInfo } from '~/assets/ts/apiFuctions';

export default Vue.extend({
  name: 'ClubsArticles',
  components: {},
  async asyncData({ app: { $sanity } }) {
    const articles: defTypes.Article[] = await getBaseArticleInfo($sanity);
    return { articles };
  },
  data: () => ({
    articles: [] as defTypes.Article[],
  }),
  head() {
    return {
      title: 'Minerva Club',
    };
  },
  computed: {
    articleCount() {
      return this.articles.length;
    },
  },
  // mounted() {
  //   this.$accessor.SET_ARTICLES(this.articles);
  // },
});
</script>

<style lang="scss" scoped>
.webp .clubHeader {
  background-image: url('~static/images/cork.webp'); /* fallback */
  background-image: linear-gradient(
      68.77deg,
      rgba(0, 0, 0, 0.553) 18.51%,
      rgba(196, 196, 196, 0) 63.79%
    ),
    url('~static/images/cork.webp');
}

.no-webp .clubHeader {
  background-image: url('~static/images/cork.jpg'); /* fallback */
  background-image: linear-gradient(
      68.77deg,
      rgba(0, 0, 0, 0.553) 18.51%,
      rgba(196, 196, 196, 0) 63.79%
    ),
    url('~static/images/cork.jpg');
}

.clubHeader {
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 622px;
  min-height: 400px;
  height: 40vh;
  display: flex;
  align-items: center;

  .headerContent {
    margin-left: 3vw;
    margin-top: 50px;
  }
}

.linkWrapper {
  background-color: white;
  list-style: none;
  padding: 0;
  position: relative;
  display: grid;
  overflow-x: hidden;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 670px;
    border-right: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
  }

  .borderhiderR {
    width: 1px;
    height: 100%;
    position: absolute;
    background-color: white;
    right: 0;
    top: 0;
  }
  .borderhiderT {
    height: 1px;
    width: 100%;
    position: absolute;
    background-color: white;
    left: 0;
    top: 0;
  }
  .borderhiderB {
    height: 1px;
    width: 100%;
    position: absolute;
    background-color: white;
    left: 0;
    bottom: 0;
  }
  .borderhiderL {
    width: 1px;
    height: 100%;
    position: absolute;
    background-color: white;
    left: 0;
    top: 0;
  }
}
</style>