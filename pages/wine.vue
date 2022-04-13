<template>
  <div class="wrapper">
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
        <div
          class="openMobileFilterWrapper"
          @click="mobileFilterVis = !mobileFilterVis"
        >
          <div class="whitebar"></div>
          <img
            src="~static/images/filter.svg"
            alt="Filter"
            class="openMobileFilter"
          />
        </div>
        <div class="clearFilters">
          <span class="text" @click="removeFilters()">CLEAR FILTERS</span
          ><span class="hm">{{ stringFilterCount }}</span>
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
          <div
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
          </div>
        </div>
        <span class="filterTitle">Country</span>
        <span class="filterTitle">Vintage</span>
      </aside>
      <main class="wineCardWrapper"></main>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { WalletController } from '@terra-money/wallet-controller';
import { initController, getController } from '~/assets/ts/walletController';

export default Vue.extend({
  data: () => ({
    walletController: {} as WalletController,
    typeFilters: [],
    countryFilters: [],
    vintageFilters: [],
    appliedFilterCount: 0,
    mobileFilterVis: false,
  }),
  computed: {
    stringFilterCount() {
      return this.appliedFilterCount >= 10
        ? this.appliedFilterCount.toString()
        : '0' + this.appliedFilterCount.toString();
    },
  },
  created() {
    if (getController() === undefined) {
      initController().then(() => {
        this.walletController = getController() as WalletController;
      });
    } else {
      this.walletController = getController() as WalletController;
    }
  },
  mounted() {},
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
    },
    removeFilters() {
      this.typeFilters = [];
      this.countryFilters = [];
      this.vintageFilters = [];
      this.appliedFilterCount = 0;
    },
  },
});
</script>

<style lang="scss" scoped>
$incr: 1050px;

.wrapper {
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
    height: 100vh;
    background-color: white;
    display: flex;
    overflow: hidden;
    position: relative;

    .overlay {
      display: none;
      position: absolute;
      z-index: 8;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: transparent;
    }

    @media screen and (max-width: $incr) {
      .overlayVis {
        display: block;
      }
    }

    .mobileFilterVis {
      @media screen and (max-width: $incr) {
        left: 0px !important;
        -webkit-box-shadow: 5px 0px 15px -3px rgba(0, 0, 0, 0.07);
        box-shadow: 5px 2px 15px -3px rgba(0, 0, 0, 0.07);
      }
    }

    .filter {
      background-color: #fcfcfc;
      max-width: 370px;
      min-width: 370px;
      display: flex;
      box-sizing: border-box;
      flex-direction: column;
      align-items: center;
      padding-top: 53px;
      border-right: rgba(0, 0, 0, 0.2) solid 1px;

      & > * {
        width: 294px;
        margin-bottom: 23px;
      }

      @media screen and (max-width: $incr) {
        position: absolute;
        transition: left 0.2s ease;
        z-index: 12;
        top: 0;
        left: -370px;
        height: 100%;
      }

      .openMobileFilterWrapper {
        position: absolute;
        top: 23px;
        right: -70px;
        display: none;
        width: 70px;
        height: 60px;
        border-bottom-right-radius: 12px;
        border-top-right-radius: 12px;
        background-color: #fcfcfc;
        z-index: 10;
        box-sizing: border-box;
        border: rgba(0, 0, 0, 0.2) solid 1px;
        border-left: 1px solid #fcfcfc;
        -webkit-box-shadow: 5px 0px 15px -3px rgba(0, 0, 0, 0.07);
        box-shadow: 5px 2px 15px -3px rgba(0, 0, 0, 0.07);

        @media screen and (max-width: $incr) {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .whitebar {
          position: absolute;
          left: -4px;
          top: 0;
          height: 99%;
          width: 9px;
          background-color: #fcfcfc;
        }

        .openMobileFilter {
          width: 45px;
        }
      }

      .clearFilters {
        width: 100%;
        display: flex;
        box-sizing: border-box;
        justify-content: space-between;
        padding: 0 26px 11px 26px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);

        .text {
          cursor: pointer;
        }

        .hm {
          color: #a5a5a5;
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

        .filtercard {
          background-color: white;
          padding: 16px 0 11px 0;
          border-radius: 12px;
          box-sizing: border-box;
          border: 1px solid rgba(0, 0, 0, 0.2);
          font-size: 14.5px !important;
          cursor: pointer;
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

          img {
            margin-bottom: 10px;
          }
        }
      }
    }

    .wineCardWrapper {
      width: 100%;
    }
  }
}
</style>