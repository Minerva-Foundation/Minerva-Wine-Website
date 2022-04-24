<template>
  <header class="headerMain">
    <nav class="mainNav">
      <NuxtLink class="homeMain" to="/">
        <div class="home">
          <img src="~static/images/torch.svg" alt="Homepage" class="torch" />
          <div class="textWrapper">
            <img
              src="~static/images/minervaText.svg"
              alt="Homepage"
              class="homeText"
            />
            <span v-if="$nuxt.$route.path !== '/'" class="siteName">{{
              currentPath
            }}</span>
          </div>
        </div>
      </NuxtLink>
      <ul class="mainLinks default rosStretch">
        <li>
          <NuxtLink
            to="/"
            class="linkHover"
            :class="{ underline: $nuxt.$route.path === '/' }"
            >Home</NuxtLink
          >
        </li>
        <li class="linkHoverParent">
          <NuxtLink
            to="/wine"
            :class="{
              underline: currentPath === 'WINE',
            }"
            >Wine</NuxtLink
          >
          <div class="subLinksWrapper">
            <ul class="subLinks">
              <li class="linkHoverParent">
                <NuxtLink
                  to="/wine"
                  :class="{ underline: $nuxt.$route.path === '/wine' }"
                  >Buy Wine</NuxtLink
                >
              </li>
              <li class="linkHoverParent">
                <NuxtLink
                  to="/wine/winemakers"
                  :class="{
                    underline: $nuxt.$route.path === '/wine/winemakers',
                  }"
                  >Winemakers</NuxtLink
                >
              </li>
            </ul>
          </div>
        </li>
        <li class="linkHoverParent">
          <NuxtLink
            to="/club"
            :class="{
              underline: currentPath === 'CLUB',
            }"
            >Club</NuxtLink
          >
          <div class="subLinksWrapper">
            <ul class="subLinks">
              <li class="linkHoverParent">
                <NuxtLink
                  to="/club"
                  :class="{ underline: $nuxt.$route.path === '/club' }"
                  >Articles</NuxtLink
                >
              </li>
              <li class="linkHoverParent">
                <NuxtLink
                  to="/club/myWine"
                  :class="{ underline: $nuxt.$route.path === '/club/myWine' }"
                  >My Wine</NuxtLink
                >
              </li>
              <li class="linkHoverParent">
                <NuxtLink
                  to="/club/events"
                  :class="{ underline: $nuxt.$route.path === '/club/events' }"
                  >Events</NuxtLink
                >
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div class="btnWrapper">
        <InputsConnectWallet />
      </div>
      <img
        src="~static/images/menu.svg"
        alt="Open Mobile Menu"
        class="mobileMenuBtn"
        @click.stop="mobileMenuVis = !mobileMenuVis"
      />
    </nav>
    <div v-if="mobileMenuVis" class="overlayBlocker"></div>
    <nav
      v-click-outside="hideMobileNav"
      :class="{ vis: mobileMenuVis }"
      class="mobileNav"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        class="closeMobileMenuBtn"
        @click="mobileMenuVis = false"
      >
        <path d="M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z" />
      </svg>
      <div class="btnWrapper">
        <InputsConnectWallet />
      </div>
      <ul class="mainLinks mobile rosStretch">
        <li @click="mobileMenuVis = false">
          <NuxtLink
            to="/"
            class="linkHover"
            :class="{ underline: $nuxt.$route.path === '/' }"
            >Home</NuxtLink
          >
        </li>
        <li @click="mobileMenuVis = false">
          <NuxtLink
            to="/wine"
            class="linkHover"
            :class="{ underline: currentPath === 'WINE' }"
            >Wine</NuxtLink
          >
        </li>
        <li @click="mobileMenuVis = false">
          <NuxtLink
            to="/club"
            class="linkHover"
            :class="{
              underline: currentPath === 'CLUB',
            }"
            >Club</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  WalletController,
  Connection,
  ConnectType,
  WalletStates,
  WalletStatus,
} from '@terra-money/wallet-controller';
import { Subscription, combineLatest } from 'rxjs';
import { initController, getController } from '~/assets/ts/walletController';

export default Vue.extend({
  name: 'DefaultHeader',
  data: () => ({
    mobileMenuVis: false,
    mobileConnectWalletVis: false,
    scrolled: false,
    walletController: {} as WalletController,
    availableInstallTypes: [] as ConnectType[],
    availableConnectTypes: [] as ConnectType[],
    availableConnections: [] as Connection[],
    states: {} as WalletStates,
    supportFeatures: [] as String[],
    subscription: {} as Subscription | null,
  }),
  computed: {
    currentPath() {
      const regexp = /\/(.*)\//g;
      let arr: RegExpExecArray | null = regexp.exec(this.$nuxt.$route.path);

      if (arr) {
        return arr[1].toUpperCase();
      } else {
        const regexp = /\/(.*)/g;
        arr = regexp.exec(this.$nuxt.$route.path);
        if (arr && arr[1] !== '') {
          return arr[1].toUpperCase();
        } else {
          return 'HOME';
        }
      }
    },
  },
  created() {
    if (getController() === undefined) {
      initController().then(() => {
        this.walletController = getController() as WalletController;
        this.subscribeWallet();
      });
    } else {
      this.walletController = getController() as WalletController;
      this.subscribeWallet();
    }
  },

  beforeDestroy() {
    this.subscription?.unsubscribe();
  },
  methods: {
    hideMobileNav() {
      if (this.mobileMenuVis) this.mobileMenuVis = false;
    },
    subscribeWallet() {
      this.subscription = combineLatest([
        this.walletController.availableConnectTypes(),
        this.walletController.availableInstallTypes(),
        this.walletController.availableConnections(),
        this.walletController.states(),
      ]).subscribe(
        ([
          _availableConnectTypes,
          _availableInstallTypes,
          _availableConnections,
          _states,
        ]) => {
          this.availableInstallTypes = _availableInstallTypes;
          this.availableConnectTypes = _availableConnectTypes;
          this.availableConnections = _availableConnections;
          this.states = _states;
          this.supportFeatures =
            _states.status === WalletStatus.WALLET_CONNECTED
              ? Array.from(_states.supportFeatures)
              : [];
        }
      );
    },
  },
});
</script>

<style lang="scss">
li {
  .underline {
    position: relative;

    &::before {
      content: '';
      background: $secondary;
      position: absolute;
      bottom: -4px;
      right: 0;
      left: 0;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
      height: 2px;
    }

    &.homeMain::before {
      content: none;
    }
  }

  a {
    letter-spacing: 0.05em;
  }
}

.headerMain {
  position: relative;
  z-index: 10;

  .mainNav {
    height: $header-height;
    color: $bright-font;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 40px 0px 40px;

    @media screen and (max-height: 855px), screen and (max-width: $fifth-incr) {
      height: 100px;
    }

    @media screen and (max-width: 295px) {
      justify-content: flex-start;
    }

    .home {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 220px;

      @media screen and (max-width: 370px) {
        justify-content: flex-start;
        align-items: flex-end;
      }

      @media screen and (max-width: 295px) {
        width: 100%;
      }

      .torch {
        @media screen and (max-height: 855px),
          screen and (max-width: $fifth-incr) {
          height: 45px;
        }
      }

      .textWrapper {
        margin-left: 10px;
        margin-top: 5px;

        .homeText {
          height: 30px;

          @media screen and (max-width: 370px) {
            display: none;
          }

          @media screen and (max-height: 855px),
            screen and (max-width: $fifth-incr) {
            height: 25px;
            padding-right: 30px;
          }
        }

        .siteName {
          color: $bright-font;
          font-size: 16px;
          line-height: 0.9;
          display: none;

          @media screen and (max-width: $fourth-incr) {
            display: block;
          }

          @media screen and (max-width: 370px) {
            display: none;
          }
        }
      }
    }

    .btnWrapper {
      width: 220px;
      display: flex;
      justify-content: flex-end;

      @media screen and (max-width: 1050px) {
        margin-right: 80px;
      }

      @media screen and (max-width: 750px) {
        display: none;
      }
    }

    .mobileMenuBtn {
      filter: $white-filter;
      height: 40px;
      position: absolute;
      right: 40px;
      display: none;
      cursor: pointer;

      @media screen and (max-width: 1050px) {
        display: block;
      }

      @media screen and (max-height: 855px),
        screen and (max-width: $fifth-incr) {
        height: 37px;
      }
    }

    .mainLinks {
      @media screen and (max-width: 1050px) {
        display: none;
      }

      @media screen and (max-height: 855px),
        screen and (max-width: $fifth-incr) {
        font-size: 20px !important;
      }
    }

    .default {
      li {
        position: relative;
        z-index: 2;

        * {
          padding: 0;
        }

        .subLinksWrapper {
          position: absolute;
          padding-top: 25px;
          z-index: 1;
          display: none;

          .subLinks {
            list-style: none;
            width: auto;
            background-color: $main-darker;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 21px;
            padding-bottom: 14px;
            border-radius: 1px;
            white-space: nowrap;

            &:after {
              bottom: calc(100% - 25px);
              left: 20px;
              border: solid transparent;
              content: '';
              height: 0;
              width: 0;
              position: absolute;
              pointer-events: none;
              border-bottom-color: $main-darker;
              border-width: 12px;
              margin-left: -12px;
            }

            li {
              width: 100%;
              font-size: 0.9em;
              margin-bottom: 16px;
              padding-left: 30px;
              padding-right: 30px;
              box-sizing: border-box;
              cursor: pointer;

              a {
                width: 100%;
              }

              .underline {
                &::before {
                  width: 90%;
                }
              }

              &:hover {
                & > a {
                  &:before {
                    width: 80%;
                  }
                }
              }
            }
          }
        }

        &:hover .subLinksWrapper {
          display: block;
        }
      }
    }

    .mainLinks > li::after {
      content: '   ·   ';
      white-space: pre;
      color: $bright-font;
      font-size: 24px;
    }

    .mainLinks > li:last-of-type::after {
      content: '';
      white-space: pre;
      color: $bright-font;
      font-size: 30px;
    }
  }

  .mainLinks {
    height: 40px;
    display: flex;
    font-size: 24px;
    list-style: none;

    li a {
      color: $bright-font;
      font-family: $standard-big-font;
    }
  }

  .overlayBlocker {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color: transparent;
    z-index: 19;
  }

  .mobileNav {
    background-color: $main;
    display: inline-block;
    position: fixed;
    overflow: hidden;
    height: 100vh;
    max-width: 50vw;
    width: 0;
    z-index: 20;
    right: 0;
    top: 0;
    transition: width 0.2s ease;

    @media screen and (max-width: 500px) {
      max-width: 70vw;
    }

    @media screen and (max-width: 370px) {
      max-width: 100vw;
    }

    .closeMobileMenuBtn {
      position: absolute;
      top: 30px;
      left: 30px;
      filter: $white-filter;
      cursor: pointer;
    }

    .btnWrapper {
      align-items: center;
      flex-direction: column;
      display: none;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 70px;
      margin-left: auto;
      margin-right: auto;

      @media screen and (max-height: 340px) {
        bottom: 30px;
      }

      @media screen and (max-width: 750px) {
        display: flex;
      }

      @media screen and (max-width: 529px) {
        .button {
          min-width: 0 !important;
          width: 60%;
        }
      }
    }

    .mainLinks {
      height: 100%;
      flex-direction: column;
      align-items: center;
      padding: 87px 0 15% 0;
      opacity: 0;
      transition-delay: 0s;
      transition-duration: 0.01s;

      @media screen and (max-height: 400px) {
        padding-top: 40px;
      }

      @media screen and (max-height: 340px) {
        padding-top: 20px;
      }

      li {
        margin-top: 25px;
      }
    }
  }

  .vis {
    width: 350px;
    -webkit-box-shadow: -1px 0px 31px 12px rgba(0, 0, 0, 0.15);
    box-shadow: -1px 0px 31px 12px rgba(0, 0, 0, 0.15);

    .mainLinks {
      opacity: 1;

      transition: opacity 0.3s ease;
      transition-delay: 0.1s;
    }
  }
}
</style>