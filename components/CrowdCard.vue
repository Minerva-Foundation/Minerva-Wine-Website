<template>
  <div v-if="crowdF.slug.current !== 'filler'" class="wrapperCrowdCard">
    <div class="info">
      <div class="title">
        <span class="titleText">{{ crowdF.merchant.title }}</span
        ><span class="linkArrow">&#x2197;</span>
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
      <span class="shortInfo">{{ crowdF.shortInfo }}</span>
      <div class="variety meta">
        <span class="catName">Variety:</span
        ><span class="infoItem">{{ crowdF.variety }}</span>
      </div>
      <div class="type meta">
        <span class="catName">Type:</span
        ><span class="infoItem">{{ crowdF.type }}</span>
      </div>
      <div class="vintage meta">
        <span class="catName">Vintage:</span
        ><span class="infoItem">{{ crowdF.vintage }}</span>
      </div>
      <div class="date meta">
        <span class="catName">Delivery Snapshot Date:</span
        ><span class="infoItem">{{ crowdF.date }}</span>
      </div>
      <div class="tc meta">
        <span class="catName">Delivery Information:</span
        ><span class="infoItem">{{ crowdF.tc }}</span>
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
    <div class="crowdInfo">
      <div class="rest">
        <div class="purchaseInfo">
          <span class="case">Case Of 6 Bottles</span>
          <span class="price"
            >{{ cfbInfo.price }} <span class="smaller">UST</span></span
          >
        </div>
        <div class="buy">
          <div class="btns">
            <button class="button">BUY NOW</button>
            <button class="buttonLight">MORE INFO</button>
          </div>
          <span class="disclaimer">
            <input id="tc" type="checkbox" /><label for="tc"
              >By buying I agree to the
              <a
                href="https://docs.minerva.market/legal-documents/minerva-privacy-policy"
                target="_blank"
                >Terms and Conditions</a
              ></label
            >
          </span>
        </div>
      </div>
      <div class="progress"><progress max="100" value="40" /></div>
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
  },
  data: () => ({
    cfbInfo: {} as defTypes.CrowdfundBlockchain,
  }),
  async fetch() {
    const temp = await getCrowdfundBlockchainData('asdasd');
    this.cfbInfo = temp;
  },
});
</script>

<style lang="scss">
.wrapperCrowdCard {
  height: 730px;
  display: grid;
  grid-template-columns: 55% 45%;
  grid-template-rows: 70% 30%;
  grid-template-areas:
    'info image'
    'crowdInfo crowdInfo';
  padding: 45px 45px 45px 45px;
  box-sizing: border-box;
  border: 1px solid #cccccc;
  color: #333;
  background-color: white;

  .info {
    display: flex;
    flex-direction: column;

    & > * {
      margin-bottom: 10px;
    }

    .title {
      position: relative;
      margin-bottom: 5px;

      .titleText {
        font-size: 2.875em;
        font-family: $standard-big-font;
      }
      .linkArrow {
        font-size: 1.2em;
        position: absolute;
        top: 15px;
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
      color: #777;
    }

    .meta {
      display: flex;
      flex-direction: column;
    }

    .catName {
      color: #333;
      text-transform: uppercase;
      font-size: 1.05em;
    }

    .country {
      display: flex;
      align-items: center;

      .countryName {
        text-transform: uppercase;
        color: $secondary;
        margin-left: 15px;
        font-size: 1.125em;
      }

      .flag {
        img {
          border: 1px solid rgba(0, 0, 0, 0.2);
          max-width: 39px;
          height: 39px;
          border-radius: 50%;
        }
      }
    }
  }

  .image {
    .thumbnail {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  .crowdInfo {
    grid-area: crowdInfo;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .rest {
      display: flex;

      .purchaseInfo {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        margin-right: 40px;

        .case {
          font-size: 0.875em;
          color: #777;
          padding-bottom: 5px;
        }

        .price {
          font-family: $standard-big-font;
          font-size: 3em;

          .smaller {
            font-family: $standard-big-font;
          }
        }
      }
      .buy {
        .btns {
          padding-bottom: 10px;

          button {
            min-width: 0;
            padding-left: 26px;
            padding-right: 26px;
            height: 59px;
          }

          .buttonLight {
            color: #8b8b8b;
            border-color: #adadad;
            border-width: 1px;
            margin-left: 12px;

            &:hover {
              color: white;
              border-color: white;
            }
          }
        }

        .disclaimer {
          font-size: 0.85em;
          display: flex;
          align-items: center;

          input {
            margin-right: 8px;
            filter: saturate(0%);
            cursor: pointer;
          }

          label {
            cursor: pointer;

            a {
              color: $secondary;
            }
          }
        }
      }
    }

    .progress {
      progress {
        width: 100%;
        border-radius: 0;
        height: 5px;
        color: $secondary;
        background-color: #e9e9e9;
      }

      progress::-webkit-progress-bar {
        background-color: #e9e9e9;
      }
      progress::-webkit-progress-value {
        background-color: $secondary !important;
      }
      progress::-moz-progress-bar {
        background-color: $secondary !important;
      }
    }
  }
}

.filler {
  background-color: transparent;
  border: none;
}
</style>
