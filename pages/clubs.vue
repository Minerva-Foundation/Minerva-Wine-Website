<template>
  <ul class="wrapper">
    <li v-for="article in articles" :key="article._id">
      <NuxtLink :to="`${article.slug.current}`">
        {{ article.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts">
import { groq } from '@nuxtjs/sanity';
import Vue from 'vue';
import * as defTypes from '~/assets/ts/default-types';

export default Vue.extend({
  name: 'ClubsArticles',
  components: {},
  async asyncData({ app: { $sanity } }) {
    const query = groq`*[_type == "post"]{_createdAt, author, categories, slug, title }`;
    const articles = (await $sanity.fetch(query)) as defTypes.Article[];
    return { articles };
  },
  mounted() {
    this.$accessor.SET_ARTICLES(this.articles);
  },
});
</script>

<style lang="scss" scoped>
</style>