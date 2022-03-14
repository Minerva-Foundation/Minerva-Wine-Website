<template>
  <article class="wrapperArticleCard">
    <portableImage class="image" :asset="article.mainImage.asset" />
    <span class="taa"
      ><h3 class="title">{{ article.title }}</h3>
      <i>by</i> <span class="author">{{ article.author.name }}</span>
    </span>
    <p class="abstract">
      {{ article.abstract }}
    </p>
    <span class="rm">READ MORE</span>
  </article>
</template>

<script lang="ts">
import Vue from 'vue';
import portableImage from '~/components/portableTextComps/portableImage.vue';

export default Vue.extend({
  name: 'ArticlePreview',
  components: { portableImage },
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.wrapperArticleCard {
  display: flex;
  flex-direction: column;
  height: 573px;

  * {
    max-width: 547px;
  }

  .image {
    width: 547px;
    height: 378px;
    margin-bottom: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .taa {
    margin-bottom: 10px;

    .title {
      font-family: 'Roslindale';
      font-weight: 100;
      font-size: 2.56em;
    }

    .author {
      font-size: 1.1em;
    }
  }

  .abstract {
    font-size: 1.1em;
    max-height: 100px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 1.1em;
    overflow: hidden;
    color: #777;
  }

  .rm {
    color: $secondary;
    font-weight: 600;
    margin-bottom: 10px;
  }
}
</style>