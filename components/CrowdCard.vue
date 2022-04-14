<template>
  <div class="wrapperCrowdCard">
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
    <div class="crowdInfo"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'CrowdfundCard',
  props: {
    crowdF: {
      type: Object,
      required: true,
    },
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
  border-right: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;

  .info {
    display: flex;
    flex-direction: column;

    & > * {
      margin-bottom: 15px;
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
        top: 10px;
        margin-left: 10px;
        color: #777;
      }
    }

    .shortInfo {
      color: #777;
    }

    .infoItem {
      color: #777;
    }

    .meta {
      display: flex;
      flex-direction: column;
    }

    .catName {
      color: #333;
      text-transform: uppercase;
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
  }
}
</style>
