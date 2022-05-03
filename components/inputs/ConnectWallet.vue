<template>
  <button
    class="button"
    :class="{ autoWidth: location != 'HEADER' }"
    @click.stop="makeWalletWindowVisible"
  >
    <div v-if="states.status === 'WALLET_CONNECTED'" class="addr">
      <div v-if="location === 'HEADER'" class="addrShow">
        <div class="addrStart">
          {{ states.wallets[0].terraAddress.substring(0, 8) }}
        </div>
        <div class="addrEnd">{{ formattedWalletAddr }}</div>
      </div>
      <NuxtLink v-else class="myClub" to="/club/myClub" @click.native.stop
        >My Club</NuxtLink
      >
    </div>
    <span v-else class="connect">CONNECT WALLET</span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  WalletController,
  Connection,
  ConnectType,
  WalletStatus,
} from '@terra-money/wallet-controller';
import { Subscription, combineLatest } from 'rxjs';
import toggleWalletWindowVisibility from '~/assets/ts/walletMethods';
import { initController, getController } from '~/assets/ts/walletController';

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
    supportFeatures: [] as String[],
    subscription: {} as Subscription | null,
    availableInstallTypes: [] as ConnectType[],
    availableConnectTypes: [] as ConnectType[],
    availableConnections: [] as Connection[],
    formattedWalletAddr: '',
  }),
  created() {
    if (getController() === undefined) {
      initController().then(() => {
        this.walletController = getController() as WalletController;
        this.subscribeWallet();
        this.formatWalletAddr();
      });
    } else {
      this.walletController = getController() as WalletController;
      this.subscribeWallet();
      this.formatWalletAddr();
    }
  },
  beforeDestroy() {
    this.subscription?.unsubscribe();
  },
  methods: {
    formatWalletAddr() {
      if (this.states.status === 'WALLET_CONNECTED') {
        this.formattedWalletAddr = this.states.wallets[0].terraAddress;
      } else {
        this.formattedWalletAddr = '';
      }
    },
    makeWalletWindowVisible() {
      if (
        this.location !== 'HEADER' &&
        this.states.status === 'WALLET_CONNECTED'
      ) {
        this.$router.push('/club/myClub');
      } else {
        toggleWalletWindowVisibility(true);
      }
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
          const connections = _availableConnections;
          const i = connections.findIndex((e) => e.type === 'READONLY');
          if (i > -1) connections.splice(i, 1);
          this.availableConnections = connections;
          this.states = _states;
          this.supportFeatures =
            _states.status === WalletStatus.WALLET_CONNECTED
              ? Array.from(_states.supportFeatures)
              : [];
          this.formatWalletAddr();
        }
      );
    },
  },
});
</script>

<style lang="scss" scoped>
.button {
  font-size: 14px !important;
  height: 54px !important;
  max-width: 198px;
  padding: 15px 20px 15px 20px !important;

  @media screen and (max-height: 855px) {
    height: 50px;
    font-size: 13px !important;
    min-width: 180px;
  }

  .addr {
    .addrShow {
      display: flex;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;

      .addrEnd {
        overflow: hidden;
        text-overflow: ellipsis;
        direction: rtl;
        margin-left: -1px;
      }
    }

    .myClub {
      color: white;
      text-decoration: none;
    }
  }
}

.autoWidth {
  min-width: auto;
  padding-left: 40px !important;
}
</style>