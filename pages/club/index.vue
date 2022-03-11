<template>
  <ul class="wrapper">
    <li v-for="article in articles" :key="article._id">
      <NuxtLink :to="`/club/${article.slug.current}`">
        {{ article.title }}
      </NuxtLink>
    </li>
  </ul>
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
  // mounted() {
  //   this.$accessor.SET_ARTICLES(this.articles);
  // },
});
</script>

<style lang="scss" scoped>
</style>