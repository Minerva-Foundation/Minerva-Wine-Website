<template>
  <div
    v-if="crowdF.slug.current.substring(0, 6) !== 'filler'"
    class="wrapperCrowdCard"
    :class="{ large: large, soonCard: crowdF.soon }"
  >
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
    <div class="image">
      <portableImage
        class="thumbnail"
        :asset="crowdF.cardImage.asset"
        new-height="500"
        :alt="crowdF.merchant.title + ' Crowdloan Thumbnail'"
      />
    </div>
    <div v-if="crowdF.soon" class="soonText">
      COMING SOON<span class="smaller"
        >Quality Wines<img src="~static/images/torch.svg" alt="Minerva logo"
      /></span>
    </div>
    <div v-if="!crowdF.soon" class="crowdInfo">
      <div class="rest">
        <div class="purchaseInfo">
          <span class="case">Case Of 6 Bottles</span>
          <span class="price"
            >{{ cfbInfo.price }} <span class="smaller">UST</span></span
          >
        </div>
        <div class="buy">
          <div class="btns">
            <form class="purchase" @submit.prevent>
              <input
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
                :class="{
                  greyedOut: (!started && !ended),
                  endedBtn: ended,
                }"
              >
                {{ ended ? ' ENDED ' : 'BUY NOW' }}
              </button>
            </form>
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
          <span class="disclaimer">
            <input :id="crowdF.slug.current" type="checkbox" /><label
              :for="crowdF.slug.current"
              >By buying you agree to the
              <a
                :class="{ greyedOut: (!started && !ended) }"
                :href="crowdF.tc"
                target="_blank"
                >Terms and Conditions</a
              >.<br />Delivery included in price</label
            >
          </span>
        </div>
      </div>
      <div class="progress">
        FUNDED
        <div class="progressBar">
          <span
            class="value"
            :style="{
              width: (cfbInfo.current / cfbInfo.max) * 100 + '%',
            }"
          >
            <span
              v-if="cfbInfo.current / cfbInfo.max > 0.1"
              class="label"
              :style="{
                right: 99.5 - (cfbInfo.current / cfbInfo.max) * 100 + '%',
              }"
              >{{ cfbInfo.current }}</span
            >
            <span
              v-if="
                cfbInfo.min <= cfbInfo.max - cfbInfo.max / 4 && cfbInfo.min > 0
              "
              class="minMark"
              :style="{
                left: (cfbInfo.min / cfbInfo.max) * 100 + '%',
              }"
              ><span class="minText">MIN</span></span
            >
            <span class="labelMimax max">MAX: {{ cfbInfo.max }} Cases</span>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="wrapperCrowdCard filler"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as defTypes from '~/assets/ts/defaultTypes';
import { getCrowdfundBlockchainData } from '~/assets/ts/saleBlockchainData';

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
  }),
  async fetch() {
    const temp = await getCrowdfundBlockchainData(this.crowdF.contract);
    this.loadingChainData = false;
    this.cfbInfo = temp;
  },
  mounted() {
    this.getTimeLeft();
  },
  methods: {
    getTimeLeft() {
      setInterval(() => {
        const now = new Date().getTime();
        const distanceStart = Date.parse(this.crowdF.start) - now;
        const distanceEnd = Date.parse(this.crowdF.end) - now;

        if (distanceStart > 0) {
          this.ended = false;

          const days = Math.floor(distanceStart / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (distanceStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );

          // + 1 to round up
          const minutes =
            Math.floor((distanceStart % (1000 * 60 * 60)) / (1000 * 60)) + 1;
          // const seconds = Math.floor((distanceStart % (1000 * 60)) / 1000);

          this.timeToStart = days + 'd ' + hours + 'h ' + minutes + 'm ';
        } else if (distanceEnd > 0) {
          this.started = true;
          this.ended = false;

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
          this.ended = true;
        }
      }, 1000);
    },
    isAllowed(evt: KeyboardEvent) {
      const allowedKeys = Array.from({ length: this.cfbInfo.maxBuy }, (_v, k) =>
        (k + 1).toString()
      );

      this.prevAmount = '';
      console.log('test');

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
        }, 1000);
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
          margin-left: -1px;
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
              padding-left: 36px;
              padding-right: 36px;
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
