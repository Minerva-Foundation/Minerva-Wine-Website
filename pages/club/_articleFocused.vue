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
import portableLink from '~/components/portableTextComps/portableLink.vue';

export default Vue.extend({
  name: 'FocusedArticle',
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
        link: portableLink,
      },
    },
  }),
});
</script>

<style lang="scss" scoped>
</style>