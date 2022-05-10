<template>
  <div class="wrapperAssets">
    <div v-if="loading" class="dot-pulse"></div>
    <div v-else-if="nothing" class="nothing">
      <h1 class="customh1">Nothing Here Yet</h1>
      <NuxtLink to="/wine"
        ><button class="button">FIND YOUR WINE</button></NuxtLink
      >
    </div>
    <div v-else-if="noWallet" class="nothing">
      <h1 class="customh1">Nothing Here Yet</h1>
      <InputsConnectWallet />
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
import toggleWalletWindowVisibility from '~/assets/ts/walletMethods';

export default Vue.extend({
  name: 'MyWine',
  data: () => ({
    wallet: {} as ConnectedWallet | undefined,
    controllerGetTries: 0,
    walletController: {} as WalletController,
    subscription: null as Subscription | null,
    nfts: [] as Object[],
    nothing: false,
    loading: true,
    noWallet: false,
    mountingTimeOver: false,
  }),
  mounted() {
    this.waitForController();
    setTimeout(() => {
      if (!this.wallet) {
        this.loading = false;
        this.noWallet = true;
        this.mountingTimeOver = true;
      }
    }, 1000);
  },
  methods: {
    connectWallet() {
      toggleWalletWindowVisibility(true);
    },
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
            this.noWallet = false;
            this.loading = true;

            getNftsForWallet(this.wallet.terraAddress, this.$sanity).then(
              (nfts) => {
                this.nfts = nfts;
                this.loading = false;
                if (nfts.length > 0) {
                  this.nothing = false;
                } else {
                  this.nothing = true;
                }
              }
            );
          } else if (this.mountingTimeOver) {
            this.noWallet = true;
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
  padding-top: 3vw;

  .nothing {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .customh1 {
      color: #777;
      margin-bottom: 30px;
      margin-top: calc(15vh - 3vw);
    }

    .button {
      height: 58px !important;

      @media screen and (max-width: $fourth-incr) {
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

  $dot-color: #999;

  .dot-pulse {
    margin-top: calc(15vh - 3vw);
    position: relative;
    left: -9999px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: $dot-color;
    color: $dot-color;
    box-shadow: 9999px 0 0 -5px $dot-color;
    animation: dotPulse 1.5s infinite linear;
    animation-delay: 0.25s;
  }

  .dot-pulse::before,
  .dot-pulse::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: $dot-color;
    color: $dot-color;
  }

  .dot-pulse::before {
    box-shadow: 9975px 0 0 -5px $dot-color;
    animation: dotPulseBefore 1.5s infinite linear;
    animation-delay: 0s;
  }

  .dot-pulse::after {
    box-shadow: 10023px 0 0 -5px $dot-color;
    animation: dotPulseAfter 1.5s infinite linear;
    animation-delay: 0.5s;
  }

  @keyframes dotPulseBefore {
    0% {
      box-shadow: 9975px 0 0 -0px $dot-color;
    }
    30% {
      box-shadow: 9975px 0 0 2px $dot-color;
    }
    60%,
    100% {
      box-shadow: 9975px 0 0 -0px $dot-color;
    }
  }

  @keyframes dotPulse {
    0% {
      box-shadow: 9999px 0 0 0px $dot-color;
    }
    30% {
      box-shadow: 9999px 0 0 2px $dot-color;
    }
    60%,
    100% {
      box-shadow: 9999px 0 0 -0px $dot-color;
    }
  }

  @keyframes dotPulseAfter {
    0% {
      box-shadow: 10023px 0 0 -0px $dot-color;
    }
    30% {
      box-shadow: 10023px 0 0 2px $dot-color;
    }
    60%,
    100% {
      box-shadow: 10023px 0 0 -0px $dot-color;
    }
  }
}
</style>