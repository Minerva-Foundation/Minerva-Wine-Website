<template>
  <div class="wrapper">
    <article v-for="article in articles" :key="article._id">
      {{ article.title }}
      <SanityContent :blocks="article.body" :serializers="serializers" />
    </article>
  </div>
</template>

<script lang="ts">
import { groq } from '@nuxtjs/sanity';
import * as defTypes from '../assets/ts/default-types';
import testimage from '../components/testimage.vue';

export default {
  components: {},
  async asyncData({ $sanity }: { $sanity: any }) {
    const query = groq`*[_type == "post"]`;
    const articles = await $sanity.fetch(query);
    return { articles };
  },
  data: () => ({
    sanityObj: [] as defTypes.Article[],
    serializers: {
      types: {
        image: testimage,
      },
    },
  }),
};
</script>

<style scoped>
</style>