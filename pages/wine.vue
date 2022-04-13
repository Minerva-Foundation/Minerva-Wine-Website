<template>
  <div class="wrapper"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import { WalletController } from '@terra-money/wallet-controller';
import { initController, getController } from '~/assets/ts/walletController';

export default Vue.extend({
  data: () => ({
    walletController: {} as WalletController,
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
  mounted() {},
});
</script>

<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
  position: relative;

  .spanWrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    .cs {
      margin-top: 40vh;
      font-size: 10vw;
      color: $main;
    }
  }
}
picture {
  * {
    width: 100%;
    height: 100%;
    margin-top: -5px;
    filter: blur(8px);
    transform: scale(1.01);
  }
}
</style>