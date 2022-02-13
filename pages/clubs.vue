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
import portableImage from '../components/portableImage.vue';
import { RootState } from '~/store/index';

export default {
  name: 'ClubsArticles',
  components: {},
  async asyncData({ $sanity }: { $sanity: any }) {
    const query = groq`*[_type == "post"]`;
    const articles = (await $sanity.fetch(query)) as defTypes.Article[];
    return { articles };
  },
  data: () => ({
    serializers: {
      types: {
        image: portableImage,
      },
    },
  }),
};
</script>

<style scoped>
</style>