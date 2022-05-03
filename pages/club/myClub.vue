<template>
  <div class="clubWrapper">
    <aside class="clubHeader">
      <div class="headerContent">
        <div class="customh2">Welcome to</div>
        <h1 class="customh1">My Club</h1>
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
            <NuxtLink to="/club/myClub">My Wine</NuxtLink>
            <NuxtLink to="/club/myClub/events">Events</NuxtLink>
          </div>
        </div>
      </aside>
      <div class="content">
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import meta from '~/assets/ts/helpers';

const metadata = meta(
  'Minerva Club',
  "Exclusive articles, interviews and material directly from winemakers and the Minerva community. Interact with your favourite producers and follow your wine through it's journey.",
  'Minerva Club'
);

export default Vue.extend({
  name: 'MyClub',
  data: () => ({
    filterFullyInView: false,
    mobileFilterVis: false,
  }),
  head() {
    return {
      title: 'Minerva Club',
      meta: metadata as [],
    };
  },
});
</script>

<style lang="scss" scoped>
$filerMobile: 1200px;

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
    backdrop-filter: blur(2px);
  }

  @media screen and (max-width: $filerMobile) {
    .overlayVis {
      display: block;
    }
  }

  .mobileFilterVis {
    @media screen and (max-width: $filerMobile) {
      right: 0px !important;
      -webkit-box-shadow: -5px 2px 15px -3px rgba(0, 0, 0, 0.07);
      box-shadow: -5px 2px 15px -3px rgba(0, 0, 0, 0.07);
    }
  }

  .filter {
    position: relative;
    overflow: visible !important;

    @media screen and (max-width: $filerMobile) {
      display: unset;
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
      max-height: 100vh;
      position: sticky;
      position: -webkit-sticky;
      top: 0;
      height: 100%;
      min-height: calc(100vh - 420px);

      @media screen and (max-width: $fourth-incr) {
        top: $header-height;
      }

      @media screen and (max-height: 855px) and (max-width: $fourth-incr),
        screen and (max-width: $fifth-incr) {
        top: 100px;
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
        -webkit-box-shadow: 5px 0px 15px -3px rgba(0, 0, 0, 0.07);
        box-shadow: -5px 2px 15px -3px rgba(0, 0, 0, 0.07);
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
        padding-bottom: 20px;
        height: 100%;
        direction: rtl;
        color: #333;
        border-right: rgba(0, 0, 0, 0.2) solid 1px;

        @media screen and (max-width: $filerMobile) {
          direction: ltr;
          border-right: none;
          border-left: rgba(0, 0, 0, 0.2) solid 1px;
        }

        // &::-webkit-scrollbar-track {
        //   border-radius: 10px;
        //   background-color: #fcfcfc;
        // }

        // &::-webkit-scrollbar {
        //   width: 5px;
        //   background-color: #f5f5f5;
        // }

        // &::-webkit-scrollbar-thumb {
        //   border-radius: 20px;
        //   background-color: rgba(0, 0, 0, 0.2);
        // }

        & > * {
          width: 100%;
          height: 80px;
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

        a {
          display: flex;
          align-items: center;
          padding-left: 50px;
          box-sizing: border-box;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          color: #333;
          text-decoration: none;
          transition: background-color 0.2s ease;
          font-family: $standard-big-font;
          font-size: 1.5em;
          letter-spacing: 0.02em;

          &:hover {
            background-color: rgb(243, 243, 243);
          }
        }
      }
    }
  }

  .content {
    min-height: calc(100vh - 420px);
  }
}
</style>