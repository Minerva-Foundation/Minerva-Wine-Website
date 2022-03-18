<template>
  <article class="wrapperArticleCard">
    <portableImage
      class="image"
      :asset="article.mainImage.asset"
      new-height="378"
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
$defWidth: 547px;

.wrapperArticleCard {
  display: flex;
  flex-direction: column;
  height: 573px;
  padding-top: 35px;

  @media screen and (max-width: 665px) {
    justify-content: center;
    padding-top: 0px;

    * {
      max-width: 90vw !important;
    }

    .image {
      height: 60vw !important;
    }
  }

  * {
    max-width: $defWidth;
  }

  .image {
    width: $defWidth;
    height: 378px;
    margin-bottom: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .taa {
    margin-bottom: 1px;
    font-size: 1.1em;

    .title {
      font-family: $standard-big-font;
      font-weight: 100;
      font-size: 2.25em;
      line-height: 0.85 !important;
      margin-top: 10px;
      margin-bottom: 5px;

      @media screen and (max-width: 570px) {
        font-size: 2em;
      }

      @media screen and (max-width: 430px) {
        font-size: 1.9em;
      }

      @media screen and (max-width: 370px) {
        font-size: 1.7em;
      }

      @media screen and (max-width: 270px) {
        font-size: 1.6em;
      }
    }

    .by {
      color: #777;
    }

    .author {
      font-size: 1.1em;
      color: #333;

      @media screen and (max-width: 570px) {
        font-size: 1em;
      }

      @media screen and (max-width: 430px) {
        font-size: 1em;
      }

      @media screen and (max-width: 370px) {
        font-size: 0.9em;
      }

      @media screen and (max-width: 270px) {
        font-size: 0.8em;
      }
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
    line-height: 1.15em !important;
    overflow: hidden;
    color: #777;
  }

  .rm {
    color: $secondary;
    font-weight: 600;
  }
}
</style>