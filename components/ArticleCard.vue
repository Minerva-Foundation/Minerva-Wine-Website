<template>
  <article class="wrapperArticleCard">
    <portableImage
      class="image"
      :asset="article.mainImage.asset"
      :new-height="378"
    />
    <span class="taa"
      ><h3 class="title">{{ article.title }}</h3>
      <i class="by">by</i> <span class="author">{{ article.author.name }},</span
      ><i class="date"> {{ formatDate }}</i>
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
  computed: {
    formatDate() {
      const raw: String = this.article._createdAt
        .substring(0, this.article._createdAt.indexOf('T'))
        .replaceAll('-', '');

      const temp: String =
        raw.substring(6, 8) +
        '/' +
        raw.substring(4, 6) +
        '/' +
        raw.substring(0, 4);
      return temp;
    },
  },
});
</script>

<style lang="scss">
.wrapperArticleCard {
  display: flex;
  flex-direction: column;
  height: 573px;
  padding-top: 35px;

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
    font-size: 1.1em;

    .title {
      font-family: 'Roslindale';
      font-weight: 100;
      font-size: 2.05em;
      margin-bottom: 3px;
    }

    .by {
      color: #777;
    }

    .author {
      font-size: 1.1em;
      color: #333;
    }

    .date {
      margin-left: 0.3em;
      color: #333;
    }
  }

  .abstract {
    font-size: 1.1em;
    max-height: 60px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.15em;
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