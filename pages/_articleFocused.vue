<template>
  <div class="wrapper">
    <SanityContent :blocks="currentArticle.body" :serializers="serializers" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as defTypes from '~/assets/ts/defaultTypes';
import { getArticleBySlug } from '~/assets/ts/apiFuctions';
import portableImage from '~/components/portableTextComps/portableImage.vue';
import portableH1 from '~/components/portableTextComps/portableH1.vue';

export default Vue.extend({
  async asyncData({ app: { $sanity }, route }) {
    const currentArticle: defTypes.Article = await getArticleBySlug(
      route.params.articleFocused,
      $sanity
    );
    return { currentArticle };
  },
  data: () => ({
    serializers: {
      types: {
        image: portableImage,
      },
      marks: {
        link: portableH1,
      },
    },
  }),
});
</script>

<style lang="scss" scoped>
</style>