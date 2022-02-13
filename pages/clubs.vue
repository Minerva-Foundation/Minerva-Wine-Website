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
import * as defTypes from '~/assets/ts/default-types';

export default {
  name: 'ClubsArticles',
  components: {},
  async asyncData({ $sanity }: { $sanity: any }) {
    const query = groq`*[_type == "post"]`;
    const articles = (await $sanity.fetch(query)) as defTypes.Article[];
    return { articles };
  },
  data: () => ({}),
  computed: {},
  mounted() {
    this.$accessor.SET_ARTICLES(this.articles);
  },
};
</script>

<style lang="scss" scoped>
</style>