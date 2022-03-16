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
    </nav>
    <nav class="mobileNav">
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

<script"ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DefaultHeader',
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

    @media screen and (max-width: $second-incr) {
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

  @media screen and (max-width: $second-incr) {
    display: none;
  }
}

.mobileNav {
  background-color: $main;
  position: absolute;
  height: 100vh;
  width: 300px;
  z-index: 10;
  right: 0;
  top: 0;
  padding: 3.5% 0 10% 0;
  display: none;

  .btnWrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .mainLinks {
    height: 100%;
    flex-direction: column;
    align-items: center;
    padding: 15% 0 15% 0;

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
</style>