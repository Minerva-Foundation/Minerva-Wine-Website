<template>
  <div class="wrapper">
    <SanityContent :blocks="currentArticle.body" :serializers="serializers" />
  </div>
</template>

<script lang="ts">
import * as defTypes from '~/assets/ts/default-types';
import portableImage from '~/components/portableImage.vue';

export default {
  data: () => ({
    currentArticle: {} as defTypes.Article,
    serializers: {
      types: {
        image: portableImage,
      },
    },
  }),
  mounted() {
    this.currentArticle = this.$accessor.articleBySlug(
      this.$route.params.articleFocused
    );
  },
};
</script>

<style lang="scss" scoped>
</style>