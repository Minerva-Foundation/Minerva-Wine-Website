<template>
  <header>
    <nav class="mainNav">
      <NuxtLink class="homeMain" to="/">
        <div class="home">
          <img src="~static/images/torch.svg" alt="Homepage" class="torch" />
          <img
            src="~static/images/minervaText.svg"
            alt="Homepage"
            class="homeText"
          />
        </div>
      </NuxtLink>
      <ul class="mainLinks rosStretch">
        <li>
          <NuxtLink
            to="/"
            class="linkHover"
            :class="{ homeMain: $nuxt.$route.path !== '/' }"
            >Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/wine" class="linkHover">Wine</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/club" class="linkHover">Club</NuxtLink>
        </li>
      </ul>
      <div class="btnWrapper">
        <InputsConnectWallet />
      </div>
      <img
        src="~static/images/menu.svg"
        alt="Open Mobile Menu"
        class="mobileMenuBtn"
        @click="mobileMenuVis = !mobileMenuVis"
      />
    </nav>
    <nav :class="{ vis: mobileMenuVis }" class="mobileNav">
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
        <li>
          <NuxtLink
            to="/"
            class="linkHover underline"
            :class="{ homeMain: $nuxt.$route.path !== '/' }"
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
            :class="{ underline: $nuxt.$route.path === '/club' }"
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
});
</script>

<style lang="scss" scoped>
header {
  position: relative;
}

.mainNav {
  height: $header-height;
  color: $bright-font;
  background-color: $main;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px 0px 40px;

  @media screen and (max-width: 295px) {
    justify-content: center;
  }

  .home {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 220px;

    @media screen and (max-width: 295px) {
      width: 100%;
    }

    .homeText {
      height: 30px;

      @media screen and (max-width: 295px) {
        display: none;
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
  font-size: 1.474em;
  list-style: none;
  li a {
    color: $bright-font;
    font-family: 'Roslindale';
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
  z-index: 10;
  right: 0;
  top: 0;
  transition: width 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);
  -webkit-box-shadow: -1px 0px 31px 12px rgba(0, 0, 0, 0.15);
  box-shadow: -1px 0px 31px 12px rgba(0, 0, 0, 0.15);

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

    @media screen and (max-width: 750px) {
      display: flex;
    }
  }

  .mainLinks {
    height: 100%;
    flex-direction: column;
    align-items: center;
    padding: 25% 0 15% 0;
    opacity: 0;
    transition: opacity 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);

    li {
      margin-top: 20px;

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
  }
}

.vis {
  width: 350px;

  .mainLinks {
    opacity: 1;
  }
}
</style>