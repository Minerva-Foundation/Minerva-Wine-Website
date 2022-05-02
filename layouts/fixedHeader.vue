<template>
  <div class="app">
    <DefaultHeader :class="{ shadow: scrolled }" class="header" />
    <Nuxt class="main" />
    <DefaultFooter />
    <InputsConnectWalletWindow />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { WalletController } from '@terra-money/wallet-controller';
import { initController, getController } from '~/assets/ts/walletController';

export default Vue.extend({
  data: () => ({
    scrolled: false,
    walletController: {},
  }),
  created() {
    if (getController() === undefined) {
      initController().then(() => {
        this.walletController = getController() as WalletController;
      });
    } else {
      this.walletController = getController() as WalletController;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const atTop: Boolean =
        Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop
        ) +
          window.innerHeight ===
        document.documentElement.clientHeight;
      if (!atTop) this.scrolled = true;
      else this.scrolled = false;
    },
  },
});
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  background-color: $main;
}
.main {
  z-index: 1;
  margin-bottom: calc(#{$footer-height} - 1px);
  background-color: white;
}

.shadow {
  @media screen and (max-width: $first-incr) {
    -webkit-box-shadow: -1px 0px 31px 12px rgba(0, 0, 0, 0.1);
    box-shadow: -1px 0px 31px 12px rgba(0, 0, 0, 0.1);
  }
}
</style>