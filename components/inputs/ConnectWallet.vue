<template>
  <button class="button walletButton" @click.stop="makeWalletWindowVisible">
    <div v-if="states.status === 'WALLET_CONNECTED'" class="addr">
      <div class="addrShow">
        <div class="addrStart">
          {{ states.wallets[0].terraAddress.substring(0, 8) }}
        </div>
        <div class="addrEnd">{{ formattedWalletAddr }}</div>
      </div>
    </div>
    <span v-else class="connect">CONNECT WALLET</span>
    <div
      v-if="
        location === 'HEADER' &&
        detailVisible &&
        states.status === 'WALLET_CONNECTED'
      "
      v-click-outside="minimizeDetails"
      class="details"
      @click.stop
    >
      <button class="close" @click="detailVisible = false">
        <svg viewBox="0 0 24 24">
          <path
            fill="#999"
            d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
          ></path>
        </svg>
      </button>
      <div class="section addr">
        <span class="title">My Address </span>
        <div class="addrShow addrShowDetails" @click="copyWalletAddr">
          <div class="addrStart">
            {{ states.wallets[0].terraAddress.substring(0, 8) }}
          </div>
          <div class="addrEnd">{{ formattedWalletAddr }}</div>
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6.94C17.9896 6.84813 17.9695 6.75763 17.94 6.67V6.58C17.8919 6.47718 17.8278 6.38267 17.75 6.3V6.3L11.75 0.3C11.6673 0.222216 11.5728 0.158081 11.47 0.11C11.4402 0.10576 11.4099 0.10576 11.38 0.11C11.2784 0.0517412 11.1662 0.0143442 11.05 0H7C6.20435 0 5.44129 0.316071 4.87868 0.87868C4.31607 1.44129 4 2.20435 4 3V4H3C2.20435 4 1.44129 4.31607 0.87868 4.87868C0.316071 5.44129 0 6.20435 0 7V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H11C11.7956 20 12.5587 19.6839 13.1213 19.1213C13.6839 18.5587 14 17.7956 14 17V16H15C15.7956 16 16.5587 15.6839 17.1213 15.1213C17.6839 14.5587 18 13.7956 18 13V7C18 7 18 7 18 6.94ZM12 3.41L14.59 6H13C12.7348 6 12.4804 5.89464 12.2929 5.70711C12.1054 5.51957 12 5.26522 12 5V3.41ZM12 17C12 17.2652 11.8946 17.5196 11.7071 17.7071C11.5196 17.8946 11.2652 18 11 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V7C2 6.73478 2.10536 6.48043 2.29289 6.29289C2.48043 6.10536 2.73478 6 3 6H4V13C4 13.7956 4.31607 14.5587 4.87868 15.1213C5.44129 15.6839 6.20435 16 7 16H12V17ZM16 13C16 13.2652 15.8946 13.5196 15.7071 13.7071C15.5196 13.8946 15.2652 14 15 14H7C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13V3C6 2.73478 6.10536 2.48043 6.29289 2.29289C6.48043 2.10536 6.73478 2 7 2H10V5C10 5.79565 10.3161 6.55871 10.8787 7.12132C11.4413 7.68393 12.2044 8 13 8H16V13Z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="section assets">
        <NuxtLink
          to="/club/myClub/myAssets"
          @click.native="detailVisible = false"
        >
          <span>My Wine</span><span>{{ nfts }}</span>
        </NuxtLink>
      </div>
      <div class="section">
        <button
          class="disconnect"
          @click.stop="
            {
              walletController.disconnect();
              detailVisible = false;
            }
          "
        >
          Disconnect Wallet
        </button>
      </div>
    </div>
    <div
      v-else-if="states.status === 'WALLET_CONNECTED' && location === 'MOBILE'"
      class="mobileDetails"
      @click.stop
    >
      <div class="section addr">
        <span class="title">My Address </span>
        <div class="addrShow addrShowDetails" @click="copyWalletAddr">
          <div class="addrStart">
            {{ states.wallets[0].terraAddress.substring(0, 8) }}
          </div>
          <div class="addrEnd">{{ formattedWalletAddr }}</div>
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6.94C17.9896 6.84813 17.9695 6.75763 17.94 6.67V6.58C17.8919 6.47718 17.8278 6.38267 17.75 6.3V6.3L11.75 0.3C11.6673 0.222216 11.5728 0.158081 11.47 0.11C11.4402 0.10576 11.4099 0.10576 11.38 0.11C11.2784 0.0517412 11.1662 0.0143442 11.05 0H7C6.20435 0 5.44129 0.316071 4.87868 0.87868C4.31607 1.44129 4 2.20435 4 3V4H3C2.20435 4 1.44129 4.31607 0.87868 4.87868C0.316071 5.44129 0 6.20435 0 7V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H11C11.7956 20 12.5587 19.6839 13.1213 19.1213C13.6839 18.5587 14 17.7956 14 17V16H15C15.7956 16 16.5587 15.6839 17.1213 15.1213C17.6839 14.5587 18 13.7956 18 13V7C18 7 18 7 18 6.94ZM12 3.41L14.59 6H13C12.7348 6 12.4804 5.89464 12.2929 5.70711C12.1054 5.51957 12 5.26522 12 5V3.41ZM12 17C12 17.2652 11.8946 17.5196 11.7071 17.7071C11.5196 17.8946 11.2652 18 11 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V7C2 6.73478 2.10536 6.48043 2.29289 6.29289C2.48043 6.10536 2.73478 6 3 6H4V13C4 13.7956 4.31607 14.5587 4.87868 15.1213C5.44129 15.6839 6.20435 16 7 16H12V17ZM16 13C16 13.2652 15.8946 13.5196 15.7071 13.7071C15.5196 13.8946 15.2652 14 15 14H7C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13V3C6 2.73478 6.10536 2.48043 6.29289 2.29289C6.48043 2.10536 6.73478 2 7 2H10V5C10 5.79565 10.3161 6.55871 10.8787 7.12132C11.4413 7.68393 12.2044 8 13 8H16V13Z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="section assets">
        <NuxtLink
          to="/club/myClub/myAssets?nav=false"
          @click.native="(detailVisible = false), $emit('closeMobile')"
        >
          <span>My Wine</span><span>{{ nfts }}</span>
        </NuxtLink>
      </div>
      <div class="section">
        <button
          class="disconnect"
          @click.stop="
            {
              walletController.disconnect();
              detailVisible = false;
            }
          "
        >
          Disconnect Wallet
        </button>
      </div>
    </div>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  WalletController,
  // Connection,
  // ConnectType,
  // WalletStatus,
} from '@terra-money/wallet-controller';
import { Subscription, combineLatest } from 'rxjs';
import toggleWalletWindowVisibility from '~/assets/ts/walletMethods';
import { getController } from '~/assets/ts/terraWalletController';
import { getNftAmount } from '~/assets/ts/BlockchainData';

export default Vue.extend({
  props: {
    location: {
      type: String,
      required: false,
      default: '',
    },
  },
  data: () => ({
    walletController: {} as WalletController,
    states: {} as any,
    // supportFeatures: [] as String[],
    subscription: null as Subscription | null,
    // availableInstallTypes: [] as ConnectType[],
    // availableConnectTypes: [] as ConnectType[],
    // availableConnections: [] as Connection[],
    formattedWalletAddr: '',
    controllerGetTries: 0,
    detailVisible: false,
    nfts: 0 as Number,
  }),
  mounted() {
    // if (getController() === undefined) {
    //   initController().then(() => {
    //     this.walletController = getController() as WalletController;
    //     this.subscribeWallet();
    //     this.formatWalletAddr();
    //     console.log('Init Button ' + this.location);
    //   });
    // } else {
    //   console.log('Get Button ' + this.location);
    //   this.walletController = getController() as WalletController;
    //   this.subscribeWallet();
    //   this.formatWalletAddr();
    // }
    this.waitForController();
  },
  beforeDestroy() {
    this.subscription?.unsubscribe();
  },
  methods: {
    minimizeDetails() {
      if (this.detailVisible) {
        this.detailVisible = false;
      }
    },
    formatWalletAddr() {
      if (this.states.status === 'WALLET_CONNECTED') {
        this.formattedWalletAddr = this.states.wallets[0].terraAddress;
      } else {
        this.formattedWalletAddr = '';
      }
    },
    waitForController() {
      if (getController() === undefined && this.controllerGetTries++ < 10) {
        setTimeout(() => {
          this.waitForController();
        }, 50);
      } else {
        this.walletController = getController() as WalletController;
        this.subscribeWallet();
        this.formatWalletAddr();
      }
    },
    makeWalletWindowVisible() {
      if (this.states.status === 'WALLET_CONNECTED') {
        this.detailVisible = !this.detailVisible;
      } else {
        toggleWalletWindowVisibility(true);
      }
    },
    subscribeWallet() {
      this.subscription = combineLatest([
        // this.walletController.availableInstallTypes(),
        // this.walletController.availableConnections(),
        this.walletController.states(),
      ]).subscribe(([_states]) => {
        // this.availableInstallTypes = _availableInstallTypes;
        // const connections = _availableConnections;
        // const i = connections.findIndex((e) => e.type === 'READONLY');
        // if (i > -1) connections.splice(i, 1);
        this.states = _states;
        // this.supportFeatures =
        //   _states.status === WalletStatus.WALLET_CONNECTED
        //     ? Array.from(_states.supportFeatures)
        //     : [];
        this.formatWalletAddr();
        if (this.states.status === 'WALLET_CONNECTED') {
          getNftAmount(this.states.wallets[0].terraAddress, this.$sanity).then(
            (nfts) => {
              this.nfts = nfts;
            }
          );
        }
      });
    },
    copyWalletAddr() {
      navigator.clipboard.writeText(this.states.wallets[0].terraAddress);
    },
  },
});
</script>

<style lang="scss" scoped>
.button {
  font-size: 14px !important;
  height: 54px !important;
  max-width: 198px;
  padding: 15px 20px 16px 20px !important;

  &::before {
    border-radius: 7px !important;
  }

  &::after {
    border-radius: 7px !important;
  }

  @media screen and (max-height: 855px) {
    height: 50px;
    font-size: 13px !important;
    min-width: 180px;
  }

  .myClub {
    color: white;
    text-decoration: none;
  }
}

.addrShow {
  display: flex;
  width: 100%;
  white-space: nowrap;

  .addrEnd {
    overflow: hidden;
    text-overflow: ellipsis;
    direction: rtl;
    margin-left: -3px;
    padding-bottom: 1px;
  }

  svg {
    width: 55px;
    margin-left: 10px;
    padding-bottom: 8px;
    box-sizing: border-box;
  }
}
.addrShowDetails {
  width: 80%;
  cursor: pointer;
}

.walletButton {
  position: relative;
  overflow: visible;

  .details {
    color: rgb(255, 255, 255);
    cursor: default;
    box-sizing: border-box;
    position: absolute;
    overflow: hidden;
    border-radius: 5px;
    z-index: 20;
    width: 122%;
    top: 0px;
    right: -1%;
    background-color: #113042;
    -webkit-box-shadow: 5px 5px 13px 0px rgba(0, 0, 0, 0.12);
    box-shadow: 5px 5px 13px 0px rgba(0, 0, 0, 0.12);

    .close {
      position: absolute;
      top: 15px;
      right: 15px;
      background-color: transparent;
      border: none;
      cursor: pointer;

      svg {
        width: 10px;
        height: 10px;
      }
    }

    .section {
      padding: 30px;
      box-sizing: border-box;
      width: 100%;
      border-top: rgba(255, 255, 255, 0.1) solid 1px;

      &:first-of-type {
        border-top: none;
      }

      .title {
        color: rgb(228, 228, 228);
        margin-bottom: 16px;
        font-size: 0.85em;
      }
    }

    .addr {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .assets {
      padding: 0;

      span {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.945);
      }

      a {
        padding: 30px;
        display: flex;
        justify-content: space-between;

        &:hover {
          background-color: #123144;
        }
      }
    }

    .disconnect {
      border: none;
      background-color: transparent;
      color: inherit;
      cursor: pointer;
      position: relative;

      &::before {
        content: '';
        background: white;
        position: absolute;
        bottom: -0px;
        right: 0;
        left: 0;
        margin-left: auto;
        margin-right: auto;
        height: 1px;
        width: 0%;
      }

      &:hover {
        &:before {
          transition: width ease 0.05s;
          width: 87%;
        }
      }
    }
  }

  .mobileDetails {
    @extend .details;

    border-top: rgba(255, 255, 255, 0.1) solid 1px;
    position: absolute;
    top: auto;
    bottom: -70px;
    right: -46px;
    background-color: $main;
    width: 290px;
    -webkit-box-shadow: none;
    box-shadow: none;
    z-index: 10;

    @media screen and (max-width: 310px) {
      width: 100vw;
      right: calc(-50vw + 99px);
    }

    .addrShowDetails {
      width: 90%;
    }

    .section {
      padding-left: 50px;
      padding-right: 50px;

      @media screen and (max-width: 310px) {
        padding-left: 20vw;
        padding-right: 20vw;
      }
    }

    .assets {
      padding: 0;

      a {
        padding-left: 50px;
        padding-right: 50px;
        justify-content: flex-start;

        @media screen and (max-width: 310px) {
          padding-left: 20vw;
          padding-right: 20vw;
        }

        span {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>