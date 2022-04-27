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
      <span class="aa"
        ><i class="by">by</i>
        <span class="author">{{ article.author.name }},</span
        ><i class="date"> {{ formatDate }}</i></span
      >
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
  padding-top: 22px;

  @media screen and (max-width: 600px) and (min-height: 1050px),
    screen and (max-width: 550px) {
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
    max-width: calc(#{$defWidth} - 50px);

    @media screen and (max-height: 1050px) {
      max-width: calc(#{$defWidth} - 90px);
    }
  }

  .image {
    width: calc(#{$defWidth} - 50px);
    height: 343px;
    margin-bottom: 10px;

    @media screen and (max-height: 1050px) {
      width: calc(#{$defWidth} - 90px);
      height: 316px;
    }

    @media screen and (max-width: 600px) and (min-height: 1050px),
      screen and (max-width: 550px) {
      height: 48vw !important;
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

    .aa {
      top: -3px;
      position: relative;

      @media screen and (max-width: 570px) {
        font-size: 0.9em;
      }

      @media screen and (max-width: 430px) {
        font-size: 0.8em;
      }

      @media screen and (max-width: 370px) {
        font-size: 0.7em;
      }

      @media screen and (max-width: 270px) {
        font-size: 0.65em;
      }
    }

    .title {
      font-weight: 400;
      font-size: 1.8em;
      line-height: 1.05 !important;
      margin-top: 2px;
      margin-bottom: 5px;
      overflow-wrap: break-word;

      @media screen and (max-height: 1050px) {
        font-size: 1.65em;
      }

      @media screen and (max-width: 570px) {
        font-size: 1.65em;
      }

      @media screen and (max-width: 430px) {
        font-size: 1.45em;
      }

      @media screen and (max-width: 370px) {
        font-size: 1.35em;
      }

      @media screen and (max-width: 270px) {
        font-size: 1.25em;
      }
    }

    .by {
      color: #777;
    }

    .author {
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
    line-height: 1.15em !important;
    overflow: hidden;
    color: #777;
    margin-top: 2px;

    @media screen and (max-width: $fifth-incr) {
      font-size: 0.9em;
    }
  }

  .rm {
    color: $secondary;
    font-weight: 600;
    margin-top: 2px;

    @media screen and (max-width: $fourth-incr) {
      font-size: 0.9em;
    }
  }
}
</style>