<template>
  <div class="wrapperWinePage">
    <aside class="clubHeader">
      <div class="headerContent">
        <div class="customh2">Curated</div>
        <h1 class="customh1">Quality Wines</h1>
      </div>
      <div class="barrelWrapper">
        <img
          src="~static/images/wine_bottle_filled_bright.png"
          alt="Wine Bottle"
          class="bottle"
        />
        <img src="~static/images/globe.png" alt="Globe" class="globe" />
      </div>
    </aside>
    <div class="mainCont">
      <div
        class="overlay"
        :class="{ overlayVis: mobileFilterVis }"
        @click="mobileFilterVis = false"
      ></div>
      <aside class="filter" :class="{ mobileFilterVis: mobileFilterVis }">
        <div class="wrapperSticky">
          <div
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
          </div>
          <div class="filterContWrapper">
            <div class="clearFilters">
              <span class="text" @click="removeFilters()">CLEAR FILTERS</span
              ><span class="hm">{{ stringFilterCount }}</span>
              <svg
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
              </svg>
            </div>
            <span class="filterTitle">Type</span>
            <div class="filterCardWrapper">
              <div
                class="filtercard filterType"
                :class="{ selected: typeFilters.includes('red') }"
                @click="filterClick(typeFilters, 'red')"
              >
                <img src="~static/images/red_type.jpg" alt="Red Wine" />
                RED
              </div>
              <div
                class="filtercard filterType"
                :class="{ selected: typeFilters.includes('white') }"
                @click="filterClick(typeFilters, 'white')"
              >
                <img src="~static/images/white_type.jpg" alt="White Wine" />
                WHITE
              </div>
              <!-- <div
                class="filtercard filterType"
                :class="{ selected: typeFilters.includes('champ') }"
                @click="filterClick(typeFilters, 'champ')"
              >
                <img src="~static/images/champ_type.jpg" alt="Champagne" />
                CHAMPAGNE
              </div>
              <div
                class="filtercard filterType"
                :class="{ selected: typeFilters.includes('port') }"
                @click="filterClick(typeFilters, 'port')"
              >
                <img src="~static/images/port_type.jpg" alt="Port Wine" />
                PORT
              </div> -->
            </div>
            <span class="filterTitle">Country</span>
            <inputsFilterSelect
              name="Country"
              placeholder="Select countries ..."
              :options="countryFiltersUsable"
              @selectionChecked="selectionEventParserCountry"
            />
            <span class="filterTitle">Vintage</span>
            <inputsFilterSelect
              name="Vintage"
              placeholder="Select vintages ..."
              :options="vintageFiltersUsable"
              @selectionChecked="selectionEventParserVintage"
            />
          </div>
        </div>
      </aside>
      <main class="wineCardMain">
        <div
          class="wineCardWrapper"
          :style="{
            'grid-template-columns':
              'repeat(auto-fill, minmax(max(665px, 100%/3), 1fr))',
          }"
        >
          <CrowdCard
            v-for="crowdF in visibleCrowdfunds"
            :key="crowdF.slug.current"
            :crowd-f="crowdF"
          />
          <div class="borderhiderL"></div>
        </div>
      </main>
    </div>
    <ScrollTop />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as defTypes from '~/assets/ts/defaultTypes';
import { getBaseCrowdfundInfo } from '~/assets/ts/saleApiFunctions';

export default Vue.extend({
  async asyncData({ app: { $sanity } }) {
    const crowdfunds: defTypes.CrowdfundBase[] = await getBaseCrowdfundInfo(
      $sanity
    );
    return { crowdfunds };
  },
  data: () => ({
    typeFilters: [] as string[],
    countryFilters: [] as string[],
    vintageFilters: [] as string[],
    appliedFilterCount: 0,
    mobileFilterVis: false,
    countries: [] as string[],
    vintages: [] as string[],
    crowdfunds: [] as defTypes.CrowdfundBase[],
    filterFullyInView: false,
    visibleCrowdfunds: [] as Object[],
  }),
  head() {
    return {
      title: 'Minerva Wine',
    };
  },
  computed: {
    stringFilterCount() {
      return this.appliedFilterCount >= 10
        ? this.appliedFilterCount.toString()
        : '0' + this.appliedFilterCount.toString();
    },
    countryFiltersUsable() {
      // To map if an item is selected
      const temp: { [k: string]: boolean } = {};
      for (const country of this.countries) {
        temp[country] = this.countryFilters.includes(country);
      }
      return temp;
    },
    vintageFiltersUsable() {
      // To map if an item is selected
      const temp: { [k: string]: boolean } = {};
      for (const vintage of this.vintages) {
        temp[vintage] = this.vintageFilters.includes(vintage);
      }
      return temp;
    },
  },
  mounted() {
    console.log(this.$device.isWindows);

    this.calcVisibleCrowdfunds();
    window.addEventListener('resize', this.calcVisibleCrowdfunds);

    for (const cf of this.crowdfunds) {
      if (!this.countries.includes(cf.country.toLowerCase())) {
        this.countries.push(cf.country.toLowerCase());
      }
      if (!this.vintages.includes(cf.vintage.toLowerCase()) && !cf.soon) {
        this.vintages.push(cf.vintage.toLowerCase());
      }
    }

    const options = {
      threshold: 0.99,
    };

    const realThis = this;

    const testFullViewFilter = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          realThis.filterFullyInView = true;
        } else {
          realThis.filterFullyInView = false;
        }
      });
    }, options);

    const x = this.$el.querySelector('.wrapperSticky');
    if (x) testFullViewFilter.observe(x);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calcVisibleCrowdfunds);
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
        const winecards = this.$el.querySelector('.wineCardWrapper');
        if (winecards) winecards.scrollIntoView();
      }

      this.calcVisibleCrowdfunds();
    },
    removeFilters() {
      this.typeFilters = [];
      this.countryFilters = [];
      this.vintageFilters = [];
      this.appliedFilterCount = 0;

      this.calcVisibleCrowdfunds();
    },
    selectionEventParserCountry(event: { option: string; checked: Boolean }) {
      this.filterClick(this.countryFilters, event.option);
    },
    selectionEventParserVintage(event: { option: string; checked: Boolean }) {
      this.filterClick(this.vintageFilters, event.option);
    },
    visibleWithFilters(cf: defTypes.CrowdfundBase): Boolean {
      return (
        this.appliedFilterCount === 0 ||
        ((this.typeFilters.length === 0
          ? true
          : this.typeFilters.includes(cf.type.toLowerCase()) && !cf.soon) &&
          (this.countryFilters.length === 0
            ? true
            : this.countryFilters.includes(cf.country.toLowerCase())) &&
          (this.vintageFilters.length === 0
            ? true
            : this.vintageFilters.includes(cf.vintage.toLowerCase()) &&
              !cf.soon))
      );
    },
    calcVisibleCrowdfunds() {
      const temp: Array<Object | undefined> = [];
      let arrayIndex: number = 0;

      // Considitons for when fillers should be used based on device width = panels per row
      const viewportWidth: number = window.innerWidth;
      const realThis = this;
      function fillerConditions(i: number) {
        if (viewportWidth < 2380) {
          // 4 5  10 11 16 17 22 23 28
          // 4 10 16 22 28
          // 5 11 17 23 29
          return (
            (i >= 4 &&
              (i + 2) % 6 === 0 &&
              arrayIndex < realThis.crowdfunds.length) ||
            (i >= 4 &&
              (i + 1) % 6 === 0 &&
              arrayIndex < realThis.crowdfunds.length)
          );
        } else {
          // 3 9 15 21
          // 2 4 9 11 17 19 24 26 32 34 39 41 47 49 54 56 62 64 69 71 77 79 84 86 92 94 99 101
          return (
            ((i + 3) % 6 === 0 || (i + 2) % 6 === 0) &&
            arrayIndex < realThis.crowdfunds.length - 3
          );
        }
      }

      // Fill up with filler panels that are transparent and test for current applied filters
      for (let i = 1; arrayIndex < this.crowdfunds.length; i++) {
        if (fillerConditions(i)) {
          temp.push({ slug: { current: 'filler' + i } });
        } else {
          const x = this.crowdfunds[arrayIndex++];

          if (x) {
            if (this.visibleWithFilters(x)) {
              temp.push(x);
            }
          }
        }
      }

      this.visibleCrowdfunds = temp as Object[];
    },
  },
});
</script>

<style lang="scss" scoped>
$incr: 1050px;
$filerMobile: 1714px;

.wrapperWinePage {
  position: relative;

  @media screen and (max-width: 1330px) {
    font-size: 0.9em;
  }

  @media screen and (max-width: 1180px) {
    font-size: 0.8em;
  }

  .clubHeader {
    position: relative;
    background-color: $main;
    height: 310px;
    display: flex;
    align-items: flex-end;
    margin-top: -1px;
    padding-bottom: 20px;

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
      margin-left: 50px;
      z-index: 7;

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
      left: 300px;
      overflow: hidden;
      width: 715px;

      @media screen and (max-width: $incr) {
        right: 0;
        left: auto;
      }

      @media screen and (max-height: 950px) and (min-width: $incr) {
        left: 260px;
      }

      @media screen and (max-height: 900px) and (min-width: $incr) {
        left: 215px;
      }

      .globe {
        z-index: -1;
        position: relative;
        bottom: -300px;
        right: 20px;
        width: 375px;
        -webkit-transform: scale(-1);
        -ms-transform: scale(-1);
        transform: scaleX(-1);

        @media screen and (max-height: 950px) {
          width: 335px;
          bottom: -275px;
        }

        @media screen and (max-height: 900px) {
          width: 305px;
          bottom: -250px;
        }

        @media screen and (max-width: $incr) {
          width: 350px;
          bottom: -250px;
          right: -100px;

          @media screen and (max-height: 950px) {
            width: 335px;
            bottom: -275px;
            right: -140px;
          }
        }
      }

      .bottle {
        z-index: 0;
        position: relative;
        bottom: -170px;
        right: -180px;
        -webkit-transform: rotate(-12deg) scale(-1);
        -ms-transform: rotate(-12deg) scale(-1);
        transform: rotate(-12deg) scaleX(-1);
        width: 310px;

        @media screen and (max-height: 950px) {
          width: 270px;
          bottom: -150px;
          right: -160px;
        }

        @media screen and (max-height: 900px) {
          width: 250px;
          bottom: -140px;
        }

        @media screen and (max-width: $incr) {
          width: 290px;
          bottom: -148px;
          right: -310px;

          @media screen and (max-height: 950px) {
            width: 250px;
            bottom: -120px;
          }
        }
      }
    }
  }

  .mainCont {
    background-color: white;
    display: flex;
    position: relative;
    height: 100%;
    contain: paint;

    .overlay {
      display: none;
      position: absolute;
      z-index: 2;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: transparent;
      backdrop-filter: blur(1px);
    }

    @media screen and (max-width: $filerMobile) {
      .overlayVis {
        display: block;
      }
    }

    .mobileFilterVis {
      @media screen and (max-width: $filerMobile) {
        right: 0px !important;
        -webkit-box-shadow: -5px 2px 15px -3px rgba(0, 0, 0, 0.04);
        box-shadow: -5px 2px 15px -3px rgba(0, 0, 0, 0.04);
      }
    }

    .filter {
      position: relative;
      overflow: visible !important;
      display: unset;

      @media screen and (max-width: $filerMobile) {
        position: absolute;
        transition: right 0.2s ease;
        z-index: 5;
        top: 0;
        right: -370px;
        height: 100%;
      }

      @media screen and (max-width: 465px) {
        right: -100vw;
      }

      @media screen and (max-width: 465px) {
        .menuBtnClicked {
          opacity: 0 !important;
        }
      }

      .wrapperSticky {
        height: 100vh;
        position: sticky;
        position: -webkit-sticky;
        top: 0;

        @media screen and (max-width: $fourth-incr) {
          top: $header-height;
        }

        @media screen and (max-height: 855px) and (max-width: $fourth-incr),
          screen and (max-width: $fifth-incr) {
          top: 93px;
        }

        .openMobileFilterWrapper {
          position: absolute;
          top: 23px;
          left: -69px;
          transition: 0.15s ease opacity;
          opacity: 1;
          display: none;
          width: 70px;
          height: 60px;
          border-bottom-left-radius: 12px;
          border-top-left-radius: 12px;
          background-color: #fcfcfc;
          z-index: 5;
          box-sizing: border-box;
          border: rgba(0, 0, 0, 0.2) solid 1px;
          border-right: 1px solid #fcfcfc;
          // -webkit-box-shadow: 5px 0px 15px -3px rgba(0, 0, 0, 0.04);
          // box-shadow: -5px 2px 15px -3px rgba(0, 0, 0, 0.04);
          cursor: pointer;

          @media screen and (max-width: $filerMobile) {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          @media screen and (max-width: 435px) {
            width: 55px;
            height: 50px;
            top: 33px;
            left: -54px;
          }

          .whitebar {
            position: absolute;
            right: -4px;
            top: 0px;
            height: 58px;
            width: 9px;
            background-color: #fcfcfc;

            @media screen and (max-width: 435px) {
              height: 48px;
            }
          }

          .openMobileFilter {
            width: 45px;

            @media screen and (max-width: 435px) {
              width: 35px;
            }
          }
        }

        .filterContWrapper {
          background-color: #fcfcfc;
          max-width: 370px;
          min-width: 370px;
          display: flex;
          box-sizing: border-box;
          flex-direction: column;
          align-items: center;
          padding-top: 53px;
          padding-bottom: 20px;
          overflow-y: scroll;
          height: 100%;
          direction: rtl;
          color: #333;

          @media screen and (max-width: $filerMobile) {
            direction: ltr;
            border-right: none;
            border-left: rgba(0, 0, 0, 0.2) solid 1px;
          }

          &::-webkit-scrollbar-track {
            border-radius: 10px;
            background-color: #fcfcfc;
          }

          &::-webkit-scrollbar {
            width: 5px;
            background-color: #f5f5f5;
          }

          &::-webkit-scrollbar-thumb {
            border-radius: 20px;
            background-color: rgba(0, 0, 0, 0.2);
          }

          & > * {
            width: 294px;
            margin-bottom: 23px;
            direction: ltr;

            @media screen and (max-width: 325px) {
              width: 90%;
            }
          }

          @media screen and (max-width: 465px) {
            max-width: 100vw;
            min-width: 100vw;
          }

          @media screen and (max-width: $fourth-incr) {
            padding-bottom: $header-height;
          }

          .clearFilters {
            width: 100%;
            display: flex;
            box-sizing: border-box;
            justify-content: space-between;
            align-items: flex-end;
            padding: 0 26px 11px 26px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
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

            @media screen and (max-width: 465px) {
              justify-content: start;
            }

            .closeMobileFilter {
              display: none;
              position: absolute;
              top: -20px;
              right: 30px;

              @media screen and (max-width: 465px) {
                display: block;
              }
            }
          }

          .filterTitle {
            font-family: $standard-big-font;
            font-size: 2.5em;
          }

          .filterCardWrapper {
            display: grid;
            grid-template-columns: repeat(2, 137px);
            row-gap: 23px;
            column-gap: 20px;

            @media screen and (max-width: 325px) {
              grid-template-columns: repeat(2, calc(46vw - 10px));
              row-gap: 15px;
              column-gap: 15px;
            }

            .filtercard {
              background-color: white;
              padding: 16px 0 11px 0;
              border-radius: 12px;
              box-sizing: border-box;
              border: 1px solid rgba(0, 0, 0, 0.2);
              font-size: 14.5px !important;
              cursor: pointer;
              overflow: hidden;

              @media screen and (max-width: $fourth-incr) {
                padding: 21px 0 21px 0;
              }
            }

            .selected {
              border: 1px solid rgba(0, 0, 0, 0.75);
            }

            .filterType {
              min-width: 137px;
              max-width: 137px;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              align-items: center;

              @media screen and (max-width: 325px) {
                min-width: calc(46vw - 10px);
                max-width: calc(46vw - 10px);
              }

              img {
                margin-bottom: 10px;

                @media screen and (max-width: $fourth-incr) {
                  display: none;
                }
              }
            }
          }
        }
      }
    }

    .wineCardMain {
      width: 100%;
      z-index: 0;
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: left bottom;
      min-height: 100vh;

      .wineCardWrapper {
        display: grid;

        @media screen and (max-width: 1330px), screen and (max-height: 950px) {
          grid-template-columns: repeat(
            auto-fill,
            minmax(577px, 1fr)
          ) !important;
        }

        @media screen and (max-width: 1180px), screen and (max-height: 900px) {
          grid-template-columns: repeat(
            auto-fill,
            minmax(max(543px, 50%), 1fr)
          ) !important;
        }

        @media screen and (max-width: 1085px) {
          display: flex;
          flex-direction: column;
        }

        .borderhiderL {
          width: 1px;
          height: 100%;
          position: absolute;
          background-color: #c1c6cb;
          left: 370px;
          top: 0;

          @media screen and (max-width: $filerMobile) {
            left: 0;
          }
        }
      }
    }
  }
}

.webp .wineCardMain {
  background-image: url('~/static/images/vines_full.webp');
}

.no-webp .wineCardMain {
  background-image: url('~/static/images/vines_full.jpg');
}
</style>