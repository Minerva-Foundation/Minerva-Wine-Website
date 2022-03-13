<template>
  <div class="wrapper">
    <article class="contentwrapper">
      <h1 class="customh1">{{ currentArticle.title }}</h1>
      <SanityContent :blocks="currentArticle.body" :serializers="serializers" />
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as defTypes from '~/assets/ts/defaultTypes';
import { getArticleBySlug } from '~/assets/ts/apiFuctions';
import portableImage from '~/components/portableTextComps/portableImage.vue';
import portableLink from '~/components/portableTextComps/portableLink.vue';
import portableYT from '~/components/portableTextComps/portableYT.vue';

export default Vue.extend({
  name: 'FocusedArticle',
  layout: 'fixedHeader',
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
        youtube: portableYT,
      },
      marks: {
        link: portableLink,
      },
    },
    currentArticle: {} as defTypes.Article,
  }),
  head() {
    return {
      title: this.currentArticle.title,
    };
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  .contentwrapper {
    width: 60vw;
    padding: calc(100px + #{$header-height}) 0px 100px 0px;

    * {
      color: $dark-font-lighter;
    }

    h1 {
      color: $dark-font;
      margin-bottom: 50px;
    }

    p {
      margin: 5px 0px 5px 0px;
      color: lighten($dark-font-lighter, 5%);
      min-height: 1em;
    }

    h4 {
      font-size: 2em;
      margin-bottom: 15px;
    }

    iframe {
      margin: 50px 50px 50px 50px;
    }

    ul {
      font-size: 1.5em;
    }
  }
}
</style>