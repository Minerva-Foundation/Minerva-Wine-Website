<template>
  <div class="wrapperAssets">
    <div v-if="nothing" class="nothing">
      <h1 class="customh1">Nothing Here Yet</h1>
      <NuxtLink to="/wine"
        ><button class="button">FIND YOUR WINE</button></NuxtLink
      >
    </div>
    <div v-else class="nfts">
      <NftCard v-for="(nft, index) in nfts" :key="index" :nft="nft" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  WalletController,
  ConnectedWallet,
} from '@terra-money/wallet-controller';
import { Subscription } from 'rxjs';
import { getController } from '~/assets/ts/walletController';
import { getNftsForWallet } from '~/assets/ts/BlockchainData';

export default Vue.extend({
  name: 'MyWine',
  data: () => ({
    wallet: {} as ConnectedWallet | undefined,
    controllerGetTries: 0,
    walletController: {} as WalletController,
    subscription: null as Subscription | null,
    nfts: [] as Object[],
    nothing: true,
  }),
  mounted() {
    this.waitForController();
  },
  methods: {
    waitForController() {
      if (getController() === undefined && this.controllerGetTries++ < 10) {
        setTimeout(() => {
          this.waitForController();
        }, 50);
      } else {
        this.walletController = getController() as WalletController;
        this.subscribeWallet();
      }
    },
    subscribeWallet() {
      this.subscription = this.walletController
        .connectedWallet()
        .subscribe((_connectedWallet) => {
          this.wallet = _connectedWallet;

          if (this.wallet) {
            getNftsForWallet(this.wallet.terraAddress, this.$sanity).then(
              (nfts) => {
                this.nfts = nfts;
                if (nfts.length > 0) {
                  this.nothing = false;
                }
              }
            );
          }
        });
    },
  },
});
</script>

<style lang="scss">
.wrapperAssets {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  .nothing {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .customh1 {
      color: #777;
      margin-bottom: 30px;
      margin-top: 15vh;
    }

    @media screen and (max-width: $fourth-incr) {
      .button {
        min-width: 120px !important;
        height: auto !important;
        min-height: 45px;
        padding: 0px 5px 0px 5px;
        font-size: 0.85rem;

        @media screen and (max-width: $fifth-incr) {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>