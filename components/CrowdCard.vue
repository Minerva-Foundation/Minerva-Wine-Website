<template>
  <div
    v-if="crowdF.slug.current.substring(0, 6) !== 'filler'"
    class="wrapperCrowdCard"
    :class="{ large: large, soonCard: crowdF.soon }"
  >
    <div v-if="overlay" class="buyingProcess">
      <button class="close" @click="(overlay = false), (loading = false)">
        <svg viewBox="0 0 24 24">
          <path
            fill="#999"
            d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
          ></path>
        </svg>
      </button>
      <div class="content">
        <span v-if="overlayText !== ''" class="overlayText">{{
          overlayText
        }}</span>
        <span v-if="overlayTextSmaller !== ''" class="overlayTextSmaller">{{
          overlayTextSmaller
        }}</span>
        <NuxtLink v-if="showMWLink" to="/club/myClub/myAssets"
          ><button class="button">
            MY WINE<span class="linkArrow">&#x2197;</span>
          </button></NuxtLink
        >
        <div v-if="loading" class="dot-pulse"></div>
      </div>
    </div>
    <div class="info">
      <div class="title">
        <NuxtLink :to="`/wine/${crowdF.merchant.slug.current}`">
          <span class="titleText">{{ crowdF.merchant.title }}</span
          ><span class="linkArrow">&#x2197;</span>
        </NuxtLink>
      </div>
      <div class="country">
        <portableImage
          class="flag"
          :asset="crowdF.merchant.flag.asset"
          new-height="40"
          :alt="crowdF.country + ' flag'"
        />
        <span class="countryName">{{ crowdF.country }}</span>
      </div>
      <!-- <span class="shortInfo"> </span> -->
      <div class="variety meta">
        <span class="catName">Variety</span
        ><span class="infoItem">{{
          crowdF.soon ? '...' : crowdF.variety
        }}</span>
      </div>
      <div class="type meta">
        <span class="catName">Type</span
        ><span class="infoItem">{{ crowdF.soon ? '...' : crowdF.type }}</span>
      </div>
      <div class="vintage meta">
        <span class="catName">Vintage</span
        ><span class="infoItem">{{
          crowdF.soon ? '...' : crowdF.vintage
        }}</span>
      </div>
      <div class="date meta">
        <span class="catName">Delivery Snapshot Date</span
        ><span class="infoItem">{{ crowdF.soon ? '...' : crowdF.date }}</span>
      </div>
      <div class="tc meta">
        <span class="catName">Terms & Conditions</span>
        <a
          :href="crowdF.tc"
          target="_blank"
          :title="crowdF.tc"
          class="infoItem tcEllipsis"
        >
          <div v-if="!crowdF.soon">https://ww</div>
          <div class="fileName">
            {{ crowdF.soon ? '...' : crowdF.tc }}
          </div>
        </a>
      </div>
      <div v-if="!crowdF.soon" class="timer">
        <span class="timerLabel">{{
          ended
            ? ''
            : started
            ? 'TIME LEFT'
            : loadingChainData
            ? ''
            : 'STARTS IN'
        }}</span
        ><span class="time">
          {{ ended ? '' : started ? timeLeft : timeToStart }}</span
        >
      </div>
    </div>
    <div
      class="image"
      @click="$router.push({ path: '/wine/' + crowdF.merchant.slug.current })"
    >
      <portableImage
        class="thumbnail"
        :asset="crowdF.cardImage.asset"
        new-height="1000"
        :alt="crowdF.merchant.title + ' Crowdloan Thumbnail'"
      />
    </div>
    <div v-if="crowdF.soon" class="soonText">
      COMING SOON<span class="smaller"
        >Quality Wines<img src="~static/images/torch.svg" alt="Minerva logo"
      /></span>
    </div>
    <div v-if="!crowdF.soon" class="crowdInfo">
      <div class="rest" :class="{ lessInfo: ended }">
        <div class="purchaseInfo">
          <span class="case">Case Of 6 Bottles</span>
          <span class="price"
            >{{ cfbInfo.price }} <span class="smaller">UST</span></span
          >
        </div>
        <div class="buy">
          <div class="btns">
            <div class="purchase">
              <infoWarningTooltip
                v-if="amountOverMax"
                class="amountWarning"
                :text="'Max possible amount is ' + cfbInfo.maxBuy"
                :upsidedown="true"
              />
              <input
                v-if="!ended"
                v-model="amount"
                :class="{ warn: amountOverMax }"
                type="text"
                class="amount noselect"
                :title="'Max: ' + cfbInfo.maxBuy"
                @select="preventSelect($event)"
                @keypress="isAllowed($event)"
                @focus="clearAmoung"
                @blur="restorePrevAmount"
              />
              <button
                class="button"
                :title="'Max: ' + cfbInfo.maxBuy"
                :class="{
                  greyedOut: !started && !ended,
                  endedBtn: ended,
                }"
                @click.stop="buy"
              >
                {{ ended ? ' ENDED ' : 'BUY NOW' }}
              </button>
            </div>
            <NuxtLink
              v-if="!onDetailSite"
              :to="{
                path: `/wine/cf/${crowdF.slug.current}`,
              }"
            >
              <button class="buttonLight"></button>
            </NuxtLink>
            <a v-else @click="$emit('infoClicked')">
              <button class="buttonLight"></button
            ></a>
          </div>
          <span v-if="!ended" class="disclaimer">
            <infoWarningTooltip
              v-if="warnTCs"
              class="tcWarningTT"
              :upsidedown="true"
              text="Please accept the Terms and Conditions"
            />
            <input
              :id="crowdF.slug.current"
              v-model="tcChecked"
              :class="{ warn: warnTCs }"
              type="checkbox"
              @click="warnTCs = false"
            /><label :for="crowdF.slug.current"
              >By buying you agree to the
              <a
                :class="{ greyedOut: !started && !ended }"
                :href="crowdF.tc"
                target="_blank"
                >Terms and Conditions</a
              >.<br />Delivery included</label
            >
          </span>
        </div>
      </div>
      <div class="progress">
        <span
          :style="{
            visibility:
              cfbInfo.current >= crowdF.maxSold ? 'visible' : 'hidden',
          }"
          >FUNDED</span
        >
        <div class="progressBar">
          <span
            class="value"
            :style="{
              width: (cfbInfo.current / crowdF.maxSold) * 100 + '%',
            }"
          >
            <span
              v-if="cfbInfo.current > 0 && cfbInfo.current < crowdF.maxSold"
              class="label"
              :style="{
                right: 99.5 - (cfbInfo.current / crowdF.maxSold) * 100 + '%',
              }"
              >{{ cfbInfo.current }}</span
            >
            <span
              v-if="
                cfbInfo.min <= crowdF.maxSold - crowdF.maxSold / 4 &&
                cfbInfo.min > 0
              "
              class="minMark"
              :style="{
                left: (cfbInfo.min / crowdF.maxSold) * 100 + '%',
              }"
              ><span class="minText">MIN</span></span
            >
            <span class="labelMimax max">MAX: {{ crowdF.maxSold }} Cases</span>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="wrapperCrowdCard filler"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  TxAPI,
  MsgExecuteContract,
  Coin,
  BaseAccount,
  TxInfo,
} from '@terra-money/terra.js';
import {
  WalletController,
  ConnectedWallet,
  TxResult,
} from '@terra-money/wallet-controller';
import { Subscription } from 'rxjs';
import { lcd } from '~/assets/ts/ConfigBlockchaiin';
import * as defTypes from '~/assets/ts/defaultTypes';
import { getCrowdfundBlockchainData } from '~/assets/ts/BlockchainData';
import { getController } from '~/assets/ts/walletController';
import toggleWalletWindowVisibility from '~/assets/ts/walletMethods';

export default Vue.extend({
  name: 'CrowdfundCard',
  props: {
    crowdF: {
      type: Object,
      required: true,
    },
    large: {
      type: Boolean,
      required: false,
      default: false,
    },
    onDetailSite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: () => ({
    cfbInfo: {} as defTypes.CrowdfundBlockchain,
    amount: 1 as string | number,
    timeLeft: '' as string,
    timeToStart: '' as string,
    started: false,
    ended: false,
    tcFileName: '',
    amountOverMax: false,
    loadingChainData: true,
    prevAmount: 1 as string | number,
    polling: null as any,
    timecalc: null as any,
    chainRefreshIntervall: 5000,
    chainPolling: false,
    gasEstimate: 0,
    wallet: {} as ConnectedWallet | undefined,
    controllerGetTries: 0,
    walletController: {} as WalletController,
    status: '',
    subscription: null as Subscription | null,
    tcChecked: false,
    warnTCs: false,
    loading: false,
    overlay: false,
    queryBuyTX: false,
    overlayText: '',
    overlayTextSmaller: '',
    showMWLink: false,
    txInfoTries: 0,
  }),
  async fetch() {
    if (!this.crowdF.soon) {
      const temp = await getCrowdfundBlockchainData(
        this.crowdF.contract,
        this.$sanity
      );
      this.loadingChainData = false;
      this.cfbInfo = temp;
      this.waitForController();
    }
  },
  mounted() {
    this.getTimeLeft();
  },
  beforeDestroy() {
    clearInterval(this.polling);
    clearInterval(this.timecalc);
    if (this.subscription) this.subscription.unsubscribe();
  },
  methods: {
    buy() {
      this.overlayText = '';
      this.overlayTextSmaller = '';
      this.showMWLink = false;

      if (!this.ended) {
        if (this.status === 'ready') {
          if (this.tcChecked) {
            this.overlay = true;
            this.warnTCs = false;

            if (lcd.config.chainID !== this.wallet?.network.chainID) {
              this.overlayText =
                'Please conntect your wallet to the ' +
                (lcd.config.chainID === 'bombay-12'
                  ? lcd.config.chainID + ' testnet'
                  : lcd.config.chainID === 'columbus-5'
                  ? lcd.config.chainID + ' mainnet'
                  : lcd.config.chainID + ' network') +
                ' and reload the page!';
              setTimeout(() => {
                this.overlay = false;
              }, 3000);
            } else {
              this.loading = true;
              this.overlayText =
                'Confirm the purchase of ' +
                this.amount +
                (this.amount === 1 ? ' case' : ' cases') +
                ' for a total of ' +
                this.cfbInfo.price * Number(this.amount) +
                ' UST' +
                ' in your wallet.';
              this.postTx();
            }
          } else {
            this.warnTCs = true;
          }
        } else {
          toggleWalletWindowVisibility(true);

          if (this.tcChecked) {
            this.queryBuyTX = true;
          } else {
            this.warnTCs = true;
            this.queryBuyTX = false;
          }
        }
      }
    },
    subscribeWallet() {
      this.subscription = this.walletController
        .connectedWallet()
        .subscribe((_connectedWallet) => {
          this.wallet = _connectedWallet;

          if (_connectedWallet) {
            if (!_connectedWallet.availablePost) {
              this.status = 'can-not-post';
            } else {
              this.status = 'ready';

              if (this.queryBuyTX) {
                this.overlay = true;
                this.warnTCs = false;

                if (lcd.config.chainID !== this.wallet?.network.chainID) {
                  this.overlayText =
                    'Please conntect your wallet to the ' +
                    (lcd.config.chainID === 'bombay-12'
                      ? lcd.config.chainID + ' testnet'
                      : lcd.config.chainID === 'columbus-5'
                      ? lcd.config.chainID + ' mainnet'
                      : lcd.config.chainID + ' network') +
                    ' and reload the page!';
                  setTimeout(() => {
                    this.overlay = false;
                  }, 3000);
                } else {
                  this.loading = true;
                  this.overlayText =
                    'Confirm the purchase of ' +
                    this.amount +
                    (this.amount === 1 ? ' case' : ' cases') +
                    ' for a total of ' +
                    this.cfbInfo.price * Number(this.amount) +
                    ' UST' +
                    ' in your wallet.';
                  this.postTx();
                }
              }
            }
          } else {
            this.status = 'not-connected';
          }
        });
    },
    getTxInfo(txRes: TxResult, api: TxAPI): Promise<TxInfo | null> {
      return new Promise((resolve, reject) => {
        setInterval(() => {
          api
            .txInfo(txRes.result.txhash)
            .then((res) => {
              resolve(res);
            })
            .catch(() => {
              if (this.txInfoTries++ >= 15) {
                reject(new Error('Timed out'));
              }
            });
        }, 1000);
      });
    },
    postTx() {
      if (this.wallet) {
        const api = new TxAPI(lcd);
        const msg = new MsgExecuteContract(
          this.wallet.terraAddress,
          this.crowdF.contract,
          { purchase: { number_of_tokens: Number(this.amount) } },
          [new Coin('uusd', Number(this.amount) * this.cfbInfo.price * 1000000)]
        );

        lcd.auth.accountInfo(this.wallet.terraAddress).then((info) => {
          const acc = info as BaseAccount;

          api
            .estimateFee([{ sequenceNumber: acc.sequence }], { msgs: [msg] })
            .then((fee) => {
              if (this.wallet)
                this.wallet
                  .post({ msgs: [msg], fee })
                  .then((e) => {
                    this.overlayText = 'Processing';

                    this.getTxInfo(e, api)
                      .then((res) => {
                        this.loading = false;
                        this.showMWLink = true;
                        this.overlayText = 'Success!';
                        this.overlayTextSmaller =
                          ' You will receive your wine after the crowdfund' +
                          (this.cfbInfo.min > 0 &&
                          this.cfbInfo.min > this.cfbInfo.current
                            ? ' and if the minimum of ' +
                              this.cfbInfo.min +
                              ' cases sold is reached. Otherwise you will be refunded'
                            : '') +
                          '.';
                        if (res?.logs) {
                          const bought =
                            res.logs[0].eventsByType.from_contract
                              .number_of_tokens_purchased[0];
                          if (bought < this.amount) {
                            this.overlayTextSmaller =
                              this.overlayTextSmaller +
                              '\n Only ' +
                              bought +
                              (Number(bought) === 1
                                ? ' case was'
                                : ' cases were ') +
                              ' purchased due to reaching the maximum purchase limit or selling out. Excess UST was returned.';
                          }
                        }
                        setTimeout(() => {
                          this.overlay = false;
                        }, 12000);
                      })
                      .catch(() => {
                        this.loading = false;
                        this.overlayText =
                          'Something went wrong! Please try again.';
                        setTimeout(() => {
                          this.overlay = false;
                        }, 5000);
                      });
                  })
                  .catch(() => {
                    this.loading = false;
                    this.overlayText =
                      'Something went wrong! Please try again.';
                    setTimeout(() => {
                      this.overlay = false;
                    }, 5000);
                  });
            })
            .catch(() => {
              this.loading = false;
              this.overlayText = 'Something went wrong!';
              this.overlayTextSmaller =
                'Either you do not have enough UST or you reached your maximum purchase limit.';
              setTimeout(() => {
                this.overlay = false;
              }, 6000);
            });
        });
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
      }
    },
    getChainData() {
      this.polling = setInterval(() => {
        getCrowdfundBlockchainData(this.crowdF.contract, this.$sanity).then(
          (res) => {
            this.cfbInfo = res;
          }
        );
      }, this.chainRefreshIntervall);
    },
    getTimeLeft() {
      this.timecalc = setInterval(() => {
        const now = new Date().getTime();
        const distanceStart = Date.parse(this.crowdF.start) - now;
        const distanceEnd = Date.parse(this.crowdF.end) - now;

        if (this.cfbInfo.current >= this.crowdF.maxSold) {
          // Max was sold -> over
          this.ended = true;

          if (this.chainPolling) {
            clearInterval(this.polling);
            this.chainPolling = false;
          }

          clearInterval(this.timecalc);
        } else if (distanceStart > 0 && !this.cfbInfo.started) {
          // Should not have started and has not
          this.ended = false;

          // If 1 min away -> start polling every 1s
          if (distanceStart < 60000) {
            this.chainRefreshIntervall = 1000;
            if (!this.chainPolling) {
              this.getChainData();
              this.chainPolling = true;
            }
          }

          const days = Math.floor(distanceStart / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (distanceStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );

          // + 1 to round up
          const minutes =
            Math.floor((distanceStart % (1000 * 60 * 60)) / (1000 * 60)) + 1;
          // const seconds = Math.floor((distanceStart % (1000 * 60)) / 1000);

          this.timeToStart = days + 'd ' + hours + 'h ' + minutes + 'm ';
        } else if (
          distanceStart < 0 &&
          !this.cfbInfo.started &&
          distanceEnd > 0
        ) {
          // Should have started but hasn't yet -> increase polling speed to 0.5s
          this.ended = false;
          this.timeToStart = '...';

          if (this.chainRefreshIntervall !== 500) {
            this.chainRefreshIntervall = 500;
            clearInterval(this.polling);
            this.getChainData();
          }

          if (!this.chainPolling) {
            this.getChainData();
            this.chainPolling = true;
          }
        } else if (distanceEnd > 0 && this.cfbInfo.started) {
          // Should have started and has -> slower polling at 5s
          this.started = true;
          this.ended = false;

          if (this.chainRefreshIntervall !== 5000) {
            this.chainRefreshIntervall = 5000;
            clearInterval(this.polling);
            this.getChainData();
          }

          if (!this.chainPolling) {
            this.getChainData();
            this.chainPolling = true;
          }

          const days = Math.floor(distanceEnd / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (distanceEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );

          // + 1 to round up
          const minutes =
            Math.floor((distanceEnd % (1000 * 60 * 60)) / (1000 * 60)) + 1;
          // const seconds = Math.floor((distanceEnd % (1000 * 60)) / 1000);

          this.timeLeft = days + 'd ' + hours + 'h ' + minutes + 'm ';
        } else {
          // Sale over -> no polling
          this.ended = true;

          if (this.chainPolling) {
            clearInterval(this.polling);
            this.chainPolling = false;
          }

          clearInterval(this.timecalc);
        }
      }, 1000);
    },
    isAllowed(evt: KeyboardEvent) {
      const allowedKeys = Array.from({ length: this.cfbInfo.maxBuy }, (_v, k) =>
        (k + 1).toString()
      );

      this.prevAmount = '';

      if (!allowedKeys.includes(this.amount.toString() + evt.key.toString())) {
        evt.preventDefault();
        this.amountOverMax = true;

        if (evt.key.toString() === '0') {
          this.amount = 1;
        } else {
          this.amount = this.cfbInfo.maxBuy;
        }

        setTimeout(() => {
          this.amountOverMax = false;
        }, 2000);
      } else {
        this.amountOverMax = false;
      }
    },
    preventSelect(e: any) {
      e.target.selectionStart = e.target.selectionEnd;
    },
    clearAmoung() {
      this.prevAmount = this.amount;
      this.amount = '';
    },
    restorePrevAmount() {
      if (this.prevAmount !== '') {
        this.amount = this.prevAmount;
      }
      if (this.amount === '') {
        this.amount = 1;
      }
    },
  },
});
</script>

<style lang="scss">
.wrapperCrowdCard {
  height: 730px;
  display: grid;
  grid-template-columns: 55% 45%;
  grid-template-rows: 65% 35%;
  grid-template-areas:
    'info image'
    'crowdInfo crowdInfo';
  padding: 45px 45px 45px 45px;
  box-sizing: border-box;
  border-right: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  color: #333;
  background-color: white;
  font-size: max(1em, 12px);
  position: relative;

  @media screen and (max-width: 1330px), screen and (max-height: 950px) {
    height: 680px;
  }

  @media screen and (max-width: 1180px), screen and (max-height: 900px) {
    height: 630px;
  }

  @media screen and (max-width: 1085px) {
    height: auto;
  }

  @media screen and (max-width: 525px) {
    padding: 32px 32px 35px 32px;
  }

  @media screen and (max-width: 435px) {
    padding: 25px 20px 27px 20px;
  }

  .info {
    display: flex;
    flex-direction: column;
    margin-right: 10px;

    & > * {
      margin-bottom: 10px;
    }

    .title {
      position: relative;
      margin-bottom: 5px;

      a {
        text-decoration: none;
        color: #333;
        overflow-wrap: break-word;
      }

      .titleText {
        font-size: max(2.875em, 32px);
        font-family: $standard-big-font;
        overflow-wrap: break-word;
      }
      .linkArrow {
        font-size: 1.2em;
        position: absolute;
        bottom: 12px;
        margin-left: 5px;
        color: #777;
      }
    }

    .shortInfo {
      color: #777;
      margin-bottom: 20px;
      margin-top: 15px;
    }

    .infoItem {
      font-size: 1.05em;
      color: #333;
    }

    .tc {
      .infoItem {
        display: flex;
        white-space: nowrap;
        overflow: hidden;
        max-width: 58%;

        .fileName {
          overflow: hidden;
          text-overflow: ellipsis;
          direction: rtl;
          margin-left: -3px;
        }
      }
    }

    .meta {
      display: flex;
      flex-direction: column;
    }

    .catName {
      color: #777;
      text-transform: uppercase;
      font-size: 1.05em;
    }

    .country {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      .countryName {
        text-transform: uppercase;
        color: $secondary;
        margin-left: 15px;
        font-size: max(1.125em, 14px);
      }

      .flag {
        img {
          border: 1px solid rgba(0, 0, 0, 0.2);
          max-width: 39px;
          height: 39px;
          border-radius: 50%;

          @media screen and (max-width: $third-incr) {
            height: 25px;
            max-width: 25px;
          }
        }
      }
    }
  }

  .timer {
    margin-top: 10px;
    margin-bottom: 50px;
    color: #777;
    font-size: 1.3em;

    @media screen and (max-width: $third-incr) {
      margin-top: 0px;
      margin-bottom: 15px;
    }

    .time {
      font-size: 1em;
      color: #333;
    }
  }

  .image {
    margin-left: 20px;
    cursor: pointer;

    .thumbnail {
      width: 100%;
      height: 100%;

      @media screen and (max-width: 1085px) {
        max-height: 275px;
      }

      img {
        width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    }
  }

  .crowdInfo {
    grid-area: crowdInfo;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media screen and (max-width: 1085px) {
      margin-top: 40px;
    }

    .rest {
      display: flex;

      .purchaseInfo {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-right: 40px;

        @media screen and (max-width: 435px) {
          margin-right: 0px;
          padding-right: 20px;
          box-sizing: border-box;
        }

        .case {
          font-size: 0.875em;
          color: #777;
          padding-bottom: 5px;
          padding-right: 10px;
          box-sizing: border-box;
        }

        .price {
          font-family: $standard-big-font;
          font-size: 3.5em;

          @media screen and (max-width: 400px) {
            line-height: 0.7;
            margin-top: 5px;
          }

          .smaller {
            font-family: $standard-big-font;
            font-size: 0.5em;
          }
        }
      }
      .buy {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        .btns {
          padding-bottom: 10px;
          display: flex;

          button {
            min-width: 0;
            padding-left: 26px;
            padding-right: 26px;
            height: 59px !important;
            font-size: 1em;

            @media screen and (max-width: 1330px),
              screen and (max-height: 950px) {
              height: 52px !important;
            }

            @media screen and (max-width: 1180px),
              screen and (max-height: 900px) {
              height: 49px !important;
            }

            @media screen and (max-width: $third-incr) {
              height: 42px !important;
            }

            @media screen and (max-width: 525px) {
              padding-left: 20px !important;
              padding-right: 20px !important;
              min-width: 0 !important;
              min-height: 0 !important;
            }
          }

          .buttonLight {
            color: #8b8b8b;
            border-color: #adadad;
            border-width: 1px;
            margin-left: 12px;

            &::after {
              content: 'MORE INFO';
              position: relative;
              bottom: auto;
              left: auto;
              width: auto;
              background-color: transparent;

              @media screen and (max-width: 525px) {
                content: 'MORE';
              }

              @media screen and (max-width: 435px) {
                content: '\2139';
                font-size: 1.6em;
              }
            }

            &:hover {
              color: white;
              border-color: white;
            }

            @media screen and (max-width: 435px) {
              padding: 0 !important;
              width: 39px;
            }
          }

          .purchase {
            display: flex;
            position: relative;
            overflow: visible;

            .amountWarning {
              position: absolute;
              bottom: 100%;
              left: 0;
              width: 180%;

              @media screen and (max-width: 600px) {
                width: 188px;
              }
            }

            .amount {
              border-top-left-radius: 7px;
              border-bottom-left-radius: 7px;
              border: #adadad 1px solid;
              width: 40px;
              color: #777;
              font-size: 1.5em;
              text-align: center;

              &:focus {
                border: 1px solid #8b8b8b;
                outline: none;
              }

              @media screen and (max-width: 525px) {
                width: 30px;
                font-size: 1.2em;
              }
            }

            .warn {
              color: $secondary;
            }

            .button {
              border-top-left-radius: 0;
              border-bottom-left-radius: 0;
            }

            .endedBtn {
              padding-left: 46.3px;
              padding-right: 46.3px;
              pointer-events: none;
              border-top-left-radius: 7px;
              border-bottom-left-radius: 7px;
            }

            .greyedOut {
              background-color: #bebebe;
              cursor: default;

              &::before {
                content: none;
              }

              &::after {
                content: none;
              }
            }
          }
        }

        .disclaimer {
          font-size: 0.81em;
          display: flex;
          align-items: flex-start;
          position: relative;

          .tcWarningTT {
            z-index: 2;
            position: absolute;
            bottom: 100%;
            left: -17px;
          }

          input {
            margin-top: 1px;
            margin-right: 8px;
            filter: saturate(0%);
            cursor: pointer;

            @media screen and (max-width: 1180px),
              screen and (max-height: 900px) {
              margin-top: 0;
            }
          }

          .warn {
            -webkit-box-shadow: inset 0px 0px 0px 3px #e40000;
            box-shadow: inset 0px 0px 0px 3px #505050;
            filter: saturate(100%);
          }

          label {
            cursor: pointer;

            a {
              color: $secondary;
            }

            .greyedOut {
              color: #777;
            }
          }
        }
      }
    }

    .lessInfo {
      padding-bottom: 8px;

      @media screen and (max-width: 1085px) {
        padding-bottom: 0px;
      }
    }

    .progress {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      font-size: 0.875em;
      margin-top: 20px;
      margin-bottom: 5px;
      position: relative;
      color: #777;

      @media screen and (max-width: 400px) {
        margin-top: 35px;
      }

      .progressBar {
        margin-top: 5px;
        width: 100%;
        border-radius: 0;
        height: 5px;
        position: relative;
        background-color: #e9e9e9;
        display: flex;

        .value {
          height: 100%;
          background-color: $secondary;
          display: inline-block;
        }

        .label {
          position: absolute;
          bottom: 10px;
          color: #777;
        }

        .labelMimax {
          position: absolute;
          top: 10px;
          color: #777;
        }

        .max {
          right: 0;
        }

        .minMark {
          top: 5px;
          border-right: 2px solid #999;
          position: absolute;
          height: 18px;

          .minText {
            position: absolute;
            top: 5px;
            left: 8px;
          }
        }
      }

      .progress::-webkit-progress-bar {
        background-color: #e9e9e9;
      }
      .progress::-webkit-progress-value {
        background-color: $secondary !important;
      }
      .progress::-moz-progress-bar {
        background-color: $secondary !important;
      }
    }
  }

  .buyingProcess {
    position: absolute;
    top: 1px;
    left: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    background-color: rgba(255, 255, 255, 0.962);
    backdrop-filter: blur(2px);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 65%;

      .overlayText {
        text-align: center;
        color: #888;
        font-size: 1.6em;
      }

      .overlayTextSmaller {
        text-align: center;
        color: #888;
        font-size: 1.2em;
        margin-top: 10px;
        white-space: pre-line;
      }

      .button {
        min-width: 100px !important;
        height: auto !important;
        min-height: 45px;
        padding: 0px 5px 0px 10px;
        font-size: 0.85rem;
        position: relative;
        margin-top: 40px;

        .linkArrow {
          position: relative;
          padding-left: 5px;
          bottom: 1px;
          color: rgb(238, 238, 238);
          font-size: 0.8em;
        }
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

    .close {
      position: absolute;
      top: 20px;
      right: 17px;
      background-color: transparent;
      border: none;
      cursor: pointer;

      svg {
        width: 14px;
        height: 14px;
      }
    }

    $dot-color: #999;

    .dot-pulse {
      margin-top: 30px;
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
}

.filler {
  background-color: transparent;
  border: none;

  @media screen and (max-width: 1085px) {
    height: 0px;
    padding: 0px;
  }
}

.large {
  grid-template-columns: 65% 35%;

  .info {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    font-size: 1.15em;

    & > * {
      min-width: 100%;
    }

    .title {
      font-size: 1.1em;
    }

    .country {
      position: relative;
      top: -10px;
      font-size: 1.1em;
    }

    .meta {
      position: relative;
      top: 0px;
      min-width: 40%;
    }

    .vintage,
    .date {
      top: 0px;
    }

    .tc {
      top: 0px;
    }
  }

  .rest {
    gap: 50px;
    position: relative;
  }

  .timer {
    top: 10px;
    position: relative;
    display: flex;
    height: 28px;
    flex-direction: column;
  }

  .progressBar {
    height: 6px !important;
  }
}

.soonCard {
  // grid-template-rows: 100%;
  position: relative;

  .soonText {
    grid-area: crowdInfo;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 4em;
    color: #777;
    font-family: $standard-big-font;
    box-sizing: border-box;

    @media screen and (max-width: 1085px) {
      padding-top: 50px;
    }

    @media screen and (max-width: 450px) {
      font-size: 2.8em;
    }

    .smaller {
      font-size: 0.25em;
      display: flex;
      justify-content: center;

      @media screen and (max-width: 450px) {
        font-size: 0.4em;
      }

      img {
        margin-left: 7px;
        margin-top: -1px;
        height: 17px;
        filter: invert(46%) sepia(0%) saturate(1258%) hue-rotate(193deg)
          brightness(102%) contrast(105%);

        @media screen and (max-width: 450px) {
          height: 15px;
        }
      }
    }
  }

  .info {
    // justify-content: flex-end;

    // .title {
    //   position: absolute;
    //   top: 0px;
    //   padding-top: 45px;

    //   @media screen and (max-width: 525px) {
    //     padding-top: 32px;
    //   }

    //   @media screen and (max-width: 435px) {
    //     padding-top: 25px;
    //   }
    // }

    // .country {
    //   position: absolute;
    //   top: 105px;
    // }
  }
}
</style>
