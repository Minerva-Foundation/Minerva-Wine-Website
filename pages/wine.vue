<template>
  <div class="wrapper">
    <pre v-if="states">{{
      JSON.stringify(
        {
          availableConnectTypes,
          availableInstallTypes,
          availableConnections,
          states,
          supportFeatures,
        },
        null,
        2
      )
    }}</pre>
    <button
      v-for="connection in availableConnections"
      :key="connection.name"
      @click="walletController.connect(connection.type, connection.identifier)"
    >
      <img
        :src="connection.icon"
        :alt="connection.name"
        style="width: 1em; height: 1em"
      />
      {{ connection.name }}
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  WalletController,
  Connection,
  ConnectType,
  WalletStates,
  WalletStatus,
} from '@terra-money/wallet-controller';
import { Subscription, combineLatest } from 'rxjs';
import { initController, getController } from '~/assets/ts/walletController';

export default Vue.extend({
  data: () => ({
    walletController: {} as WalletController,
    availableInstallTypes: [] as ConnectType[],
    availableConnectTypes: [] as ConnectType[],
    availableConnections: [] as Connection[],
    states: {} as WalletStates,
    supportFeatures: [] as String[],
    subscription: {} as Subscription | null,
  }),
  created() {
    if (getController() === undefined) {
      initController().then(() => {
        this.walletController = getController() as WalletController;
        this.subscribeWallet();
      });
    } else {
      this.walletController = getController() as WalletController;
      this.subscribeWallet();
    }
  },
  mounted() {},
  beforeDestroy() {
    this.subscription?.unsubscribe();
  },
  methods: {
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
          this.availableConnections = _availableConnections;
          this.states = _states;
          this.supportFeatures =
            _states.status === WalletStatus.WALLET_CONNECTED
              ? Array.from(_states.supportFeatures)
              : [];
        }
      );
    },
  },
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