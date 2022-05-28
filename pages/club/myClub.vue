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
        @click="closeMobileMenu()"
      ></div>
      <aside
        class="filter"
        :class="{
          mobileFilterVis:
            mobileFilterVis ||
            (windowWidth <= 465 && $route.query.nav !== 'false'),
        }"
      >
        <div class="wrapperSticky">
          <div
            class="openMobileFilterWrapper"
            :class="{
              menuBtnClicked: mobileFilterVis,
            }"
            @click="mobileFilterVis = !mobileFilterVis"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              alt="Filter"
              class="openMobileFilter"
              viewBox="0 0 24 24"
              :class="{ openMenuBtnOpen: mobileFilterVis }"
            >
              <path
                fill="#777"
                d="M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z"
              />
            </svg>
          </div>
          <div class="filterContWrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="closeMobileFilter"
              @click="closeMobileMenu()"
            >
              <path
                fill="#a0a0a0"
                d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
              ></path>
            </svg>
            <NuxtLink
              :class="{
                highlight: $nuxt.$route.path === '/club/myClub/myAssets',
              }"
              to="/club/myClub/myAssets"
              @click.native="closeMobileMenu()"
              >My Wine</NuxtLink
            >
            <NuxtLink
              :class="{
                highlight: $nuxt.$route.path === '/club/myClub/events',
              }"
              to="/club/myClub/events"
              @click.native="closeMobileMenu()"
              >Events</NuxtLink
            >
            <NuxtLink
              :class="{
                highlight: $nuxt.$route.path === '/club/myClub/profile',
              }"
              to="/club/myClub/profile"
              @click.native="closeMobileMenu()"
              >Profile</NuxtLink
            >
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
    windowWidth: 0,
  }),
  head() {
    return {
      title: 'Minerva Club',
      meta: metadata as [],
    };
  },
  beforeMount() {
    this.windowSizeUpdater();
  },
  methods: {
    windowSizeUpdater() {
      const viewportWidth: number = window.innerWidth;
      this.windowWidth = viewportWidth;
    },
    closeMobileMenu() {
      this.mobileFilterVis = false;
      this.windowWidth = 100000;
    },
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
        top: 93px;
      }

      .openMobileFilterWrapper {
        position: absolute;
        top: 21px;
        left: -64px;
        transition: 0.15s ease opacity;
        opacity: 1;
        display: none;
        width: 65px;
        height: 62px;
        border-bottom-left-radius: 12px;
        border-top-left-radius: 12px;
        background-color: #fcfcfc;
        z-index: 5;
        box-sizing: border-box;
        border: rgba(0, 0, 0, 0.2) solid 1px;
        -webkit-box-shadow: 5px 0px 15px -3px rgba(0, 0, 0, 0.04);
        box-shadow: -5px 2px 15px -3px rgba(0, 0, 0, 0.04);
        cursor: pointer;

        @media screen and (max-width: $filerMobile) {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media screen and (max-width: $third-incr) {
          width: 55px;
          height: 55px;
          left: -54px;
          top: 28px;
        }

        @media screen and (max-width: 465px) {
          top: 18px;
        }

        .whitebar {
          position: absolute;
          right: -4px;
          top: 0px;
          height: 58px;
          width: 9px;
          background-color: #fcfcfc;

          @media screen and (max-width: $third-incr) {
            height: 48px;
          }
        }

        .openMobileFilter {
          transform: rotate(-180deg);
          transition: transform 0.2s ease;

          @media screen and (max-width: $third-incr) {
            width: 23px !important;
            height: 23px !important;
          }
        }

        .openMenuBtnOpen {
          transform: rotate(0deg);

          @media screen and (max-width: 465px) {
            transform: rotate(-180deg);
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
        position: relative;

        @media screen and (max-width: $filerMobile) {
          direction: ltr;
          border-right: none;
          border-left: rgba(0, 0, 0, 0.2) solid 1px;
        }

        @media screen and (max-width: 465px) {
          padding-top: 63px;

          & > a:first-of-type {
            border-top: 1px solid rgba(0, 0, 0, 0.2);
          }
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
          height: 83px;
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
          padding-left: 60px;
          box-sizing: border-box;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          color: #333;
          text-decoration: none;
          transition: background-color 0.2s ease;
          font-family: $standard-big-font;
          font-size: max(1.5em, 18px);
          letter-spacing: 0.02em;

          &:hover {
            background-color: rgba(243, 243, 243, 0.349);
          }

          @media screen and (max-width: 465px) {
            justify-content: center;
            padding-left: 0;
          }
        }

        .closeMobileFilter {
          display: none;
          position: absolute;
          top: 20px;
          left: 30px;
          width: 21px;
          height: 24px;

          @media screen and (max-width: 465px) {
            display: block;
          }
        }
      }
    }
  }

  .content {
    min-height: calc(100vh - 260px);
    width: 100%;

    @media screen and (max-width: 530px) {
      min-height: calc(100vh - 93px);
    }
  }
}

.highlight {
  background-color: rgba(238, 238, 238, 0.815) !important;
}
</style>