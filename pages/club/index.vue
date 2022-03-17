<template>
  <div class="clubWrapper">
    <aside class="clubHeader">
      <div class="headerContent">
        <h2 class="customh2">Welcome to</h2>
        <h1 class="customh1">Minerva Club</h1>
        <InputsConnectWallet class="walletComp" />
      </div>
    </aside>
    <ul
      class="linkWrapper"
      :style="{
        'grid-template-columns':
          'repeat(auto-fill, minmax(max(665px, 100%/' +
          articleCount +
          '), 1fr))',
      }"
    >
      <NuxtLink
        v-for="article in articles"
        :key="article._id"
        :to="`/club/${article.slug.current}`"
      >
        <ArticleCard :article="article" />
      </NuxtLink>
      <div class="borderhiderR"></div>
      <div class="borderhiderB"></div>
      <div class="borderhiderL"></div>
      <div class="borderhiderT"></div>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as defTypes from '~/assets/ts/defaultTypes';
import { getBaseArticleInfo } from '~/assets/ts/apiFuctions';

export default Vue.extend({
  name: 'ClubsArticles',
  components: {},
  async asyncData({ app: { $sanity } }) {
    const articles: defTypes.Article[] = await getBaseArticleInfo($sanity);
    return { articles };
  },
  data: () => ({
    articles: [] as defTypes.Article[],
  }),
  head() {
    return {
      title: 'Minerva Club',
    };
  },
  computed: {
    articleCount() {
      return this.articles.length;
    },
  },
  // mounted() {
  //   this.$accessor.SET_ARTICLES(this.articles);
  // },
});
</script>

<style lang="scss" scoped>
.webp .clubHeader {
  background-image: url('~static/images/cork_crop.webp'); /* fallback */
  background-image: linear-gradient(
      70.34deg,
      rgba(60, 60, 60, 0.76) -6.08%,
      rgba(255, 255, 255, 0.062) 110.14%
    ),
    url('~static/images/cork_crop.webp');

  @media screen and (max-width: 1325px) {
    background-image: url('~static/images/cork_small.webp'); /* fallback */
    background-image: linear-gradient(
        70.34deg,
        rgba(60, 60, 60, 0.76) -6.08%,
        rgba(255, 255, 255, 0) 110.14%
      ),
      url('~static/images/cork_small.webp');
  }
}

.no-webp .clubHeader {
  background-image: url('~static/images/cork_crop.jpg'); /* fallback */
  background-image: linear-gradient(
      68.77deg,
      rgba(0, 0, 0, 0.553) 18.51%,
      rgba(196, 196, 196, 0) 63.79%
    ),
    url('~static/images/cork_crop.jpg');

  @media screen and (max-width: 1325px) {
    background-image: url('~static/images/cork_small.jpg'); /* fallback */
    background-image: linear-gradient(
        70.34deg,
        rgba(60, 60, 60, 0.76) -6.08%,
        rgba(255, 255, 255, 0) 110.14%
      ),
      url('~static/images/cork_small.jpg');
  }
}

.clubHeader {
  background-position: left center;
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 622px;
  min-height: 500px;
  height: 40vh;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1000px) {
    height: 400px;
    min-height: 0;
  }

  @media screen and (max-width: 700px) {
    height: 300px;
    font-size: 1.2em;
  }

  @media screen and (max-width: $fourth-incr) {
    display: none;
  }

  .headerContent {
    margin-left: 3vw;

    .walletComp {
      @media screen and (max-width: 750px) {
        display: none;
      }
    }
  }
}

.linkWrapper {
  background-color: white;
  list-style: none;
  padding: 0;
  position: relative;
  display: grid;
  overflow: hidden;

  @media screen and (max-width: 665px) {
    display: flex;
    flex-direction: column;
  }

  * {
    font-size: 16px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 670px;
    border-right: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;

    @media screen and (max-width: 570px) {
      height: 580px;
    }

    @media screen and (max-width: 430px) {
      height: 500px;

      * {
        font-size: 14px;
      }
    }

    @media screen and (max-width: 370px) {
      height: 470px;
    }

    @media screen and (max-width: 270px) {
      height: 400px;
    }
  }

  .borderhiderR {
    width: 1px;
    height: 100%;
    position: absolute;
    background-color: white;
    right: 0;
    top: 0;
  }
  .borderhiderT {
    height: 1px;
    width: 100%;
    position: absolute;
    background-color: white;
    left: 0;
    top: 0;
  }
  .borderhiderB {
    height: 1px;
    width: 100%;
    position: absolute;
    background-color: white;
    left: 0;
    bottom: 0;
  }
  .borderhiderL {
    width: 1px;
    height: 100%;
    position: absolute;
    background-color: white;
    left: 0;
    top: 0;
  }
}
</style>