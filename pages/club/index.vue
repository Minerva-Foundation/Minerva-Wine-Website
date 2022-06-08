<template>
  <div class="clubWrapper">
    <aside class="clubHeader">
      <div class="headerContent">
        <div class="customh2">Welcome to</div>
        <h1 class="customh1">Minerva Club</h1>
      </div>
      <div class="barrelWrapper">
        <img
          src="~static/images/wine_barrels.png"
          alt="Wine Barrels"
          class="barrels"
        />
      </div>
    </aside>
    <div class="mainCont">
      <div
        class="overlay"
        :class="{ overlayVis: mobileFilterVis }"
        @click="mobileFilterVis = false"
      ></div>
      <aside
        class="filterArticles"
        :class="{ mobileFilterVis: mobileFilterVis }"
      >
        <!-- <div
            class="openMobileFilterWrapper"
            :class="{ menuBtnClicked: mobileFilterVis }"
            @click="mobileFilterVis = !mobileFilterVis"
          >
            <div class="whitebar"></div>
            <img
              src="~static/images/filter.svg"
              alt="Filter"
              class="openMobileFilter"
            />
          </div> -->
        <div class="filterContWrapper">
          <!-- <span class="filterTitle">Country</span> -->
          <inputsFilterSelect
            name="Category"
            placeholder="Select categories ..."
            :options="categoriesFiltersUsable"
            @selectionChecked="selectionEventParserCategory"
          />
        </div>
        <div class="clearFilters">
          <span class="text" @click="removeFilters()">CLEAR FILTERS</span
          ><span class="hm">{{ stringFilterCount }}</span>
          <!-- <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="closeMobileFilter"
                @click="mobileFilterVis = false"
              >
                <path
                  fill="#777"
                  d="M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z"
                />
              </svg> -->
        </div>
      </aside>
      <ul
        class="linkWrapper"
        :style="{
          'grid-template-columns':
            'repeat(auto-fill, minmax(max(600px, 100%/' +
            articleCount +
            '), 1fr))',
        }"
      >
        <NuxtLink
          v-for="article in visibleArticles"
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as defTypes from '~/assets/ts/defaultTypes';
import {
  getBaseArticleInfo,
  getCategories,
} from '~/assets/ts/articleApiFunctions';
import meta from '~/assets/ts/helpers';

const metadata = meta(
  'Minerva Club',
  "Exclusive articles, interviews and material directly from winemakers and the Minerva community. Interact with your favourite producers and follow your wine through it's journey.",
  'Minerva Club'
);

export default Vue.extend({
  name: 'ClubsArticles',
  components: {},
  async asyncData({ app: { $sanity } }) {
    const articles: defTypes.CondensedArticle[] = await getBaseArticleInfo(
      $sanity
    );
    const categoriesTemp: defTypes.Category[] = await getCategories($sanity);
    const categories = categoriesTemp.map((e) => e.title);
    return { articles, categories };
  },
  data: () => ({
    articles: [] as defTypes.Article[],
    visibleArticles: [] as defTypes.Article[],
    filterFullyInView: false,
    categories: [] as string[],
    categoriesFilters: [] as string[],
    appliedFilterCount: 0,
    mobileFilterVis: false,
  }),
  head() {
    return {
      title: 'Minerva Club',
      meta: metadata as [],
    };
  },
  computed: {
    articleCount() {
      return this.articles.length;
    },
    stringFilterCount() {
      return this.appliedFilterCount >= 10
        ? this.appliedFilterCount.toString()
        : '0' + this.appliedFilterCount.toString();
    },
    categoriesFiltersUsable() {
      // To map if an item is selected
      const temp: { [k: string]: boolean } = {};
      for (const cat of this.categories) {
        temp[cat] = this.categoriesFilters.includes(cat);
      }
      return temp;
    },
  },
  mounted() {
    this.calcVisibleArticles();
    // const options = {
    //   threshold: 0.99,
    // };
    // const realThis = this;
    // const testFullViewFilter = new IntersectionObserver(function (entries) {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       realThis.filterFullyInView = true;
    //     } else {
    //       realThis.filterFullyInView = false;
    //     }
    //   });
    // }, options);
    // const x = this.$el.querySelector('.wrapperSticky');
    // if (x) testFullViewFilter.observe(x);
  },
  methods: {
    filterClick(filter: Array<string>, item: string) {
      const index = filter.indexOf(item);
      if (index > -1) {
        filter.splice(index, 1);
        this.appliedFilterCount--;
      } else {
        filter.push(item);
        this.appliedFilterCount++;
      }
      if (this.filterFullyInView) {
        const winecards = this.$el.querySelector('.linkWrapper');
        if (winecards) winecards.scrollIntoView();
      }
      this.calcVisibleArticles();
    },
    removeFilters() {
      this.categoriesFilters = [];
      this.appliedFilterCount = 0;
      this.calcVisibleArticles();
    },
    selectionEventParserCategory(event: { option: string; checked: Boolean }) {
      this.filterClick(this.categoriesFilters, event.option);
    },
    visibleWithFilters(cf: defTypes.Article): Boolean {
      return this.categoriesFilters.length === 0
        ? true
        : cf.categories.some((e) => this.categoriesFilters.includes(e.title));
    },
    calcVisibleArticles() {
      const temp: Array<Object | undefined> = [];
      let arrayIndex: number = 0;
      // Test for current applied filters
      for (let i = 1; arrayIndex < this.articleCount; i++) {
        const x = this.articles[arrayIndex++];
        if (x) {
          if (this.visibleWithFilters(x)) {
            temp.push(x);
          }
        }
      }
      this.visibleArticles = temp as defTypes.Article[];
    },
  },
});
</script>

<style lang="scss" scoped>
$filerMobile: 0px;

.clubHeader {
  position: relative;
  background-color: $main;
  display: flex;
  align-items: flex-end;
  padding-bottom: 20px;
  margin-top: -1px;
  height: 310px;

  @media screen and (max-width: 700px) {
    height: 300px;
    font-size: 1.2em;
  }

  @media screen and (max-width: $fourth-incr) {
    display: none;
  }

  @media screen and (max-height: 950px) and (min-width: 700px) {
    height: 280px;
  }

  @media screen and (max-height: 900px) {
    height: 260px;
  }

  .headerContent {
    margin-left: 3vw;
    z-index: 7;

    @media screen and (max-width: 1300px) {
      margin-left: 50px;
    }

    @media screen and (max-width: 750px) {
      margin-left: 30px;
    }

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
      width: 920px;
      bottom: -330px;
      right: -50px;
      position: relative;

      @media screen and (max-height: 950px) {
        width: 850px;
        bottom: -300px;
      }

      @media screen and (max-height: 900px) {
        bottom: -320px;
      }

      @media screen and (max-height: 855px) {
        width: 820px;
        bottom: -305px;
      }

      @media screen and (max-width: 1650px) {
        right: -70px;
      }

      @media screen and (max-width: 1200px) {
        right: -250px;
        width: 820px;
        bottom: -305px;
      }

      @media screen and (max-width: 750px) {
        right: -350px;
      }
    }
  }
}

.mainCont {
  background-color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  contain: paint;

  // .overlay {
  //   display: none;
  //   position: absolute;
  //   z-index: 2;
  //   left: 0;
  //   top: 0;
  //   width: 100%;
  //   height: 100%;
  //   background-color: transparent;
  //   backdrop-filter: blur(2px);
  // }

  // @media screen and (max-width: $filerMobile) {
  //   .overlayVis {
  //     display: block;
  //   }
  // }

  // .mobileFilterVis {
  //   @media screen and (max-width: $filerMobile) {
  //     right: 0px !important;
  //     -webkit-box-shadow: -5px 2px 15px -3px rgba(0, 0, 0, 0.07);
  //     box-shadow: -5px 2px 15px -3px rgba(0, 0, 0, 0.07);
  //   }
  // }

  // .filter {
  //   position: relative;
  //   overflow: visible !important;
  //   display: none;

  //   @media screen and (max-width: $filerMobile) {
  //     display: unset;
  //     position: absolute;
  //     transition: right 0.2s ease;
  //     z-index: 5;
  //     top: 0;
  //     right: -370px;
  //     height: 100%;
  //   }

  //   @media screen and (max-width: 465px) {
  //     right: -100vw;
  //   }

  //   @media screen and (max-width: 465px) {
  //     .menuBtnClicked {
  //       opacity: 0 !important;
  //     }
  //   }

  //   .wrapperSticky {
  //     max-height: 100vh;
  //     position: sticky;
  //     position: -webkit-sticky;
  //     top: 0;
  //     height: 100%;
  //     min-height: calc(100vh - 420px);

  //     @media screen and (max-width: $fourth-incr) {
  //       top: $header-height;
  //     }

  //     @media screen and (max-height: 855px) and (max-width: $fourth-incr),
  //       screen and (max-width: $fifth-incr) {
  //       top: 93px;
  //     }

  //     .openMobileFilterWrapper {
  //       position: absolute;
  //       top: 23px;
  //       left: -69px;
  //       transition: 0.15s ease opacity;
  //       opacity: 1;
  //       display: none;
  //       width: 70px;
  //       height: 60px;
  //       border-bottom-left-radius: 12px;
  //       border-top-left-radius: 12px;
  //       background-color: #fcfcfc;
  //       z-index: 5;
  //       box-sizing: border-box;
  //       border: rgba(0, 0, 0, 0.2) solid 1px;
  //       border-right: 1px solid #fcfcfc;
  //       -webkit-box-shadow: 5px 0px 15px -3px rgba(0, 0, 0, 0.07);
  //       box-shadow: -5px 2px 15px -3px rgba(0, 0, 0, 0.07);
  //       cursor: pointer;

  //       @media screen and (max-width: $filerMobile) {
  //         display: flex;
  //         justify-content: center;
  //         align-items: center;
  //       }

  //       @media screen and (max-width: 435px) {
  //         width: 55px;
  //         height: 50px;
  //         top: 33px;
  //         left: -54px;
  //       }

  //       .whitebar {
  //         position: absolute;
  //         right: -4px;
  //         top: 0px;
  //         height: 58px;
  //         width: 9px;
  //         background-color: #fcfcfc;

  //         @media screen and (max-width: 435px) {
  //           height: 48px;
  //         }
  //       }

  //       .openMobileFilter {
  //         width: 45px;

  //         @media screen and (max-width: 435px) {
  //           width: 35px;
  //         }
  //       }
  //     }

  //     .filterContWrapper {
  //       background-color: #fcfcfc;
  //       max-width: 370px;
  //       min-width: 370px;
  //       display: flex;
  //       box-sizing: border-box;
  //       flex-direction: column;
  //       align-items: center;
  //       padding-top: 53px;
  //       padding-bottom: 20px;
  //       overflow-y: scroll;
  //       height: 100%;
  //       direction: rtl;
  //       color: #333;
  //       border-right: rgba(0, 0, 0, 0.2) solid 1px;

  //       @media screen and (max-width: $filerMobile) {
  //         direction: ltr;
  //         border-right: none;
  //         border-left: rgba(0, 0, 0, 0.2) solid 1px;
  //       }

  //       &::-webkit-scrollbar-track {
  //         border-radius: 10px;
  //         background-color: #fcfcfc;
  //       }

  //       &::-webkit-scrollbar {
  //         width: 5px;
  //         background-color: #f5f5f5;
  //       }

  //       &::-webkit-scrollbar-thumb {
  //         border-radius: 20px;
  //         background-color: rgba(0, 0, 0, 0.2);
  //       }

  //       & > * {
  //         width: 294px;
  //         margin-bottom: 23px;
  //         direction: ltr;

  //         @media screen and (max-width: 325px) {
  //           width: 90%;
  //         }
  //       }

  //       @media screen and (max-width: 465px) {
  //         max-width: 100vw;
  //         min-width: 100vw;
  //       }

  //       @media screen and (max-width: $fourth-incr) {
  //         padding-bottom: $header-height;
  //       }

  //       .clearFilters {
  //         width: 100%;
  //         display: flex;
  //         box-sizing: border-box;
  //         justify-content: space-between;
  //         align-items: flex-end;
  //         padding: 0 26px 11px 26px;
  //         border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  //         position: relative;

  //         .text {
  //           cursor: pointer;
  //           font-size: 16px !important;
  //         }

  //         .hm {
  //           font-size: 16px !important;
  //           box-sizing: border-box;
  //           color: #777;

  //           @media screen and (max-width: 465px) {
  //             margin-left: 20px;
  //           }
  //         }

  //         @media screen and (max-width: 465px) {
  //           justify-content: start;
  //         }

  //         .closeMobileFilter {
  //           display: none;
  //           position: absolute;
  //           top: -20px;
  //           right: 30px;

  //           @media screen and (max-width: 465px) {
  //             display: block;
  //           }
  //         }
  //       }

  //       .filterTitle {
  //         font-family: $standard-big-font;
  //         font-size: 2.5em;
  //       }

  //       .filterCardWrapper {
  //         display: grid;
  //         grid-template-columns: repeat(2, 137px);
  //         row-gap: 23px;
  //         column-gap: 20px;

  //         @media screen and (max-width: 325px) {
  //           grid-template-columns: repeat(2, calc(46vw - 10px));
  //           row-gap: 15px;
  //           column-gap: 15px;
  //         }

  //         .filtercard {
  //           background-color: white;
  //           padding: 16px 0 11px 0;
  //           border-radius: 12px;
  //           box-sizing: border-box;
  //           border: 1px solid rgba(0, 0, 0, 0.2);
  //           font-size: 14.5px !important;
  //           cursor: pointer;
  //           overflow: hidden;

  //           @media screen and (max-width: $fourth-incr) {
  //             padding: 21px 0 21px 0;
  //           }
  //         }

  //         .selected {
  //           border: 1px solid rgba(0, 0, 0, 0.75);
  //         }

  //         .filterType {
  //           min-width: 137px;
  //           max-width: 137px;
  //           display: flex;
  //           flex-direction: column;
  //           justify-content: flex-end;
  //           align-items: center;

  //           @media screen and (max-width: 325px) {
  //             min-width: calc(46vw - 10px);
  //             max-width: calc(46vw - 10px);
  //           }

  //           img {
  //             margin-bottom: 10px;

  //             @media screen and (max-width: $fourth-incr) {
  //               display: none;
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }

  .linkWrapper {
    background-color: white;
    list-style: none;
    padding: 0;
    position: relative;
    display: grid;
    overflow: hidden;
    width: 100%;

    @media screen and (min-width: 1200px) and (max-width: 1332px) {
      grid-template-columns: repeat(auto-fill, minmax(600px, 1fr)) !important;
    }

    @media screen and (max-height: 1050px) {
      grid-template-columns: repeat(auto-fill, minmax(550px, 1fr)) !important;
    }

    @media screen and (max-width: 600px) and (min-height: 1050px),
      screen and (max-width: 550px) {
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
      height: 570px;
      padding-top: 40px;
      border-right: 1px solid #cccccc;
      border-bottom: 1px solid #cccccc;

      @media screen and (max-height: 1050px) {
        height: 505px;
        padding-top: 70px;
      }

      @media screen and (max-width: 600px) and (min-height: 1050px),
        screen and (max-width: 550px) {
        height: auto;
        margin-top: 50px;
        padding-bottom: 50px;
        padding-top: 0;
      }

      @media screen and (max-width: $fourth-incr) {
        margin-top: 40px;
        padding-bottom: 40px;
      }

      &:nth-last-child(5) {
        @media screen and (max-width: $fourth-incr) {
          padding-bottom: 80px;
        }
      }

      &:first-child {
        @media screen and (max-width: $fourth-incr) {
          padding-top: 10px;
        }
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
}
</style>

<style lang="scss">
.filterArticles {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fcfcfc;
  overflow: visible;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  .filterContWrapper {
    position: relative;
    height: 95px;
    width: 100%;
    overflow: visible;

    .selectWrapper {
      top: 13px;
      left: 15px;
      position: absolute;
    }
  }

  .clearFilters {
    width: 220px;
    box-sizing: border-box;
    padding-right: 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;

    .text {
      cursor: pointer;
      font-size: 16px !important;
    }

    .hm {
      font-size: 16px !important;
      box-sizing: border-box;
      color: #777;

      @media screen and (max-width: 465px) {
        margin-left: 20px;
      }
    }
  }
}
</style>