<template>
  <button class="button" @click.stop="makeWalletWindowVisible">
    CONNECT WALLET
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import toggleWalletWindowVisibility from '~/assets/ts/walletMethods';

export default Vue.extend({
  methods: {
    makeWalletWindowVisible() {
      toggleWalletWindowVisibility(true);
    },
  },
});
</script>

<style lang="scss" scoped>
.button {
  font-size: 14px !important;
  height: 54px;

  @media screen and (max-height: 855px) {
    height: 50px;
    font-size: 13px !important;
    min-width: 180px;
  }
}
</style>