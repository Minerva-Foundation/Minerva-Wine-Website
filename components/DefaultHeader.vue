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
            <span class="siteName">{{ currentPath }}</span>
          </div>
        </div>
      </NuxtLink>
      <ul class="mainLinks rosStretch">
        <li>
          <NuxtLink
            to="/"
            class="linkHover"
            :class="{ underline: $nuxt.$route.path === '/' }"
            >Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/wine"
            class="linkHover"
            :class="{ underline: $nuxt.$route.path === '/wine' }"
            >Wine</NuxtLink
          >
        </li>
        <li>
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
      <ul class="mainLinks rosStretch">
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
            :class="{ underline: $nuxt.$route.path === '/wine' }"
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

export default Vue.extend({
  name: 'DefaultHeader',
  data: () => ({
    mobileMenuVis: false,
    mobileConnectWalletVis: false,
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
  methods: {
    hideMobileNav() {
      if (this.mobileMenuVis) this.mobileMenuVis = false;
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

      .textWrapper {
        margin-left: 10px;
        margin-top: 5px;

        .homeText {
          height: 30px;

          @media screen and (max-width: 370px) {
            display: none;
          }
        }

        .siteName {
          color: $bright-font;
          font-size: 16px;
          line-height: 0.9;
          display: none;

          @media screen and (max-width: 1050px) {
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

      @media screen and (max-width: 1050px) {
        margin-right: 60px;
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
    }

    .mainLinks {
      @media screen and (max-width: 1050px) {
        display: none;
      }
    }

    .mainLinks *::after {
      content: '   ·   ';
      white-space: pre;
      color: $bright-font;
      font-size: 27px;
    }

    .mainLinks :last-child::after {
      content: '';
      white-space: pre;
      color: $bright-font;
      font-size: 30px;
    }
  }

  .mainLinks {
    height: 40px;
    display: flex;
    font-size: 24px !important;
    list-style: none;

    li a {
      color: $bright-font;
      font-family: $standard-big-font;
    }
  }

  .mobileNav {
    background-color: $main;
    display: inline-block;
    position: fixed;
    overflow: hidden;
    height: 100%;
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
      width: 100vw !important;
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
        margin-top: 20px;
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