<template>
  <div class="clubWrapper">
    <aside class="clubHeader">
      <div class="headerContent">
        <h2 class="customh2">Welcome to</h2>
        <h1 class="customh1">Minerva Club</h1>
        <InputsConnectWallet class="walletComp" />
      </div>
      <div class="barrelWrapper">
        <img
          src="~static/images/wine_barrels.png"
          alt="Wine Barrels"
          class="barrels"
        />
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
.clubHeader {
  position: relative;
  background-color: $main;
  height: 400px;
  display: flex;
  align-items: flex-end;
  padding-bottom: 50px;
  margin-top: -1px;

  @media screen and (max-width: 700px) {
    height: 300px;
    font-size: 1.2em;
  }

  @media screen and (max-width: $fourth-incr) {
    display: none;
  }

  @media screen and (max-height: 900px) {
    height: 350px;
  }

  .headerContent {
    margin-left: 3vw;
    z-index: 7;

    .walletComp {
      @media screen and (max-width: 750px) {
        display: none;
      }
    }

    h1 {
      margin-bottom: 25px;
    }
  }

  .barrelWrapper {
    position: absolute;
    z-index: 5;
    bottom: 0;
    right: 0;
    overflow: hidden;

    .barrels {
      width: 1160px;
      bottom: -350px;
      right: -50px;
      position: relative;

      @media screen and (max-height: 950px) and (min-width: 1000px) {
        bottom: -380px;
      }

      @media screen and (max-height: 900px) and (min-width: 1000px) {
        bottom: -450px;
      }

      @media screen and (max-width: 1400px) {
        right: -150px;
        width: 1100px;
      }

      @media screen and (max-width: 1200px) {
        right: -250px;
      }

      @media screen and (max-width: $second-incr) {
        width: 970px;
      }

      @media screen and (max-width: 750px) {
        right: -350px;
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

  @media screen and (min-height: 1242px) {
    min-height: calc(100vh - (#{$header-height} + 440px));
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

    @media screen and (min-height: 1242px) {
      min-height: 100%;
    }

    @media screen and (max-width: 570px) {
      height: 650px;
    }

    @media screen and (max-width: 430px) {
      height: 530px;

      * {
        font-size: 14px;
      }
    }

    @media screen and (max-width: 370px) {
      height: 490px;
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