<template>
  <div class="wrapper">
    <aside class="clubHeader">
      <div class="headerContent">
        <div class="customh2">Curated</div>
        <h1 class="customh1">Quality Wines</h1>
      </div>
      <div class="barrelWrapper">
        <img
          src="~static/images/wine_bottle_filled_bright.png"
          alt="Wine Bottle"
          class="bottle"
        />
        <img src="~static/images/globe.png" alt="Globe" class="globe" />
      </div>
    </aside>
  </div>
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
  .clubHeader {
    position: relative;
    background-color: $main;
    height: 310px;
    display: flex;
    align-items: flex-end;
    margin-top: -1px;

    @media screen and (max-width: 700px) {
      height: 300px;
      font-size: 1.2em;
    }

    @media screen and (max-width: $fourth-incr) {
      display: none;
    }

    @media screen and (max-height: 950px) and (min-width: 700px) {
      height: 280px;
    }

    @media screen and (max-height: 900px) {
      height: 260px;
    }

    .headerContent {
      margin-left: 3vw;
      z-index: 7;

      @media screen and (max-width: 1300px) {
        margin-left: 50px;
      }

      @media screen and (max-width: 750px) {
        margin-left: 30px;
      }

      .walletComp {
        @media screen and (max-width: 750px) {
          display: none;
        }
      }

      h1 {
        margin-bottom: 25px;
      }
    }

    .barrelWrapper {
      position: absolute;
      z-index: 5;
      bottom: 0;
      left: 270px;
      overflow: hidden;
      width: 715px;

      @media screen and (max-width: 985px) {
        right: 0;
        left: auto;
      }

      @media screen and (max-height: 950px) and (min-width: 985px) {
        left: 260px;
      }

      @media screen and (max-height: 900px) and (min-width: 985px) {
        left: 215px;
      }

      .globe {
        z-index: -1;
        position: relative;
        bottom: -300px;
        right: 20px;
        width: 375px;
        -webkit-transform: scale(-1);
        -ms-transform: scale(-1);
        transform: scaleX(-1);

        @media screen and (max-height: 950px) {
          width: 335px;
          bottom: -275px;
        }

        @media screen and (max-height: 900px) {
          width: 305px;
          bottom: -250px;
        }

        @media screen and (max-width: 985px) {
          width: 350px;
          bottom: -250px;
          right: -100px;

          @media screen and (max-height: 950px) {
            width: 335px;
            bottom: -275px;
            right: -140px;
          }
        }
      }

      .bottle {
        z-index: 0;
        position: relative;
        bottom: -170px;
        right: -180px;
        -webkit-transform: rotate(-12deg) scale(-1);
        -ms-transform: rotate(-12deg) scale(-1);
        transform: rotate(-12deg) scaleX(-1);
        width: 310px;

        @media screen and (max-height: 950px) {
          width: 270px;
          bottom: -150px;
          right: -160px;
        }

        @media screen and (max-height: 900px) {
          width: 250px;
          bottom: -140px;
        }

        @media screen and (max-width: 985px) {
          width: 290px;
          bottom: -148px;
          right: -310px;

          @media screen and (max-height: 950px) {
            width: 250px;
            bottom: -120px;
          }
        }
      }
    }
  }
}
</style>