<template>
  <div class="wrapper">
    <SanityContent :blocks="currentArticle.body" :serializers="serializers" />
  </div>
</template>

<script lang="ts">
import { groq } from '@nuxtjs/sanity';
import Vue from 'vue';
import * as defTypes from '~/assets/ts/default-types';
import portableImage from '~/components/portableImage.vue';

export default Vue.extend({
  async asyncData({ app: { $sanity }, route }) {
    const query = groq`*[_type == "post" && slug.current == "${route.params.articleFocused}"]`;
    const currentArticle = (
      (await $sanity.fetch(query)) as defTypes.Article[]
    )[0];
    return { currentArticle };
  },
  data: () => ({
    serializers: {
      types: {
        image: portableImage,
      },
    },
  }),
});
</script>

<style lang="scss" scoped>
</style>