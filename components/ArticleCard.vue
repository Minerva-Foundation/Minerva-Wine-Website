<template>
  <article class="wrapperArticleCard">
    <portableImage
      class="image"
      :asset="article.mainImage.asset"
      new-height="378"
      :alt="article.seo.focus_keyword + ' main article image'"
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
      const raw: String = this.article.publishedAt
        .substring(0, this.article.publishedAt.indexOf('T'))
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
  padding-top: 25px;

  @media screen and (max-width: 665px) {
    justify-content: center;
    padding-top: 0px;
    height: auto;

    * {
      max-width: 90vw !important;
    }

    .image {
      height: 60vw !important;
      width: 90vw !important;
    }
  }

  * {
    max-width: $defWidth;

    @media screen and (max-height: 1150px) {
      max-width: calc(#{$defWidth} - 50px);
    }

    @media screen and (max-height: 1050px) {
      max-width: calc(#{$defWidth} - 90px);
    }
  }

  .image {
    width: $defWidth;
    height: 378px;
    margin-bottom: 10px;

    @media screen and (max-height: 1150px) {
      width: calc(#{$defWidth} - 50px);
      height: 343px;
    }

    @media screen and (max-height: 1050px) {
      width: calc(#{$defWidth} - 90px);
      height: 316px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .taa {
    margin-bottom: 1px;
    font-size: 1.1em;
    color: $dark-font;

    .title {
      font-family: $secondary-big-font;
      overflow: hidden;
      font-weight: 100;
      font-size: 2.25em;
      line-height: 0.85 !important;
      margin-top: 10px;
      padding-bottom: 5px;

      @media screen and (max-height: 1150px) {
        font-size: 2.05em;
      }

      @media screen and (max-height: 1050px) {
        font-size: 1.9em;
      }

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