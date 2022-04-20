<template>
  <div class="wrapperMerchantDetails">
    <portableImage class="firstLarge" :asset="merch.largeFirstImage.asset" />
    <div class="infoWrapper">
      <div class="info">
        <div class="mainInfo">
          <div class="textInfo">
            <h2 class="customh2">Welcome to</h2>
            <h1 class="customh1">{{ merch.title }}</h1>
            <SanityContent
              :blocks="merch.description"
              :serializers="serializers"
            />
          </div>
          <div class="map">
            <portableImage :asset="merch.map.asset" />
          </div>
        </div>
        <div class="additionalInfo">
          <SanityContent
            :blocks="merch.description2"
            :serializers="serializers"
          />
          <SanityContent
            :blocks="merch.description3"
            :serializers="serializers"
          />
        </div>
      </div>
    </div>
    <div class="wheelWrapper">
      <CrowdWheel :cfs="cfs" />
    </div>
    <div class="quote">
      <span class="customh1">{{ merch.quote }}</span>
    </div>
    <portableImage class="secondLarge" :asset="merch.largeSecondImage.asset" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as defTypes from '~/assets/ts/defaultTypes';
import { getMerchantDetailBySlug } from '~/assets/ts/merchantApiFunctions';
import { getBaseCrowdfundInfoForMerchant } from '~/assets/ts/saleApiFunctions';
import portableImage from '~/components/portableTextComps/portableImage.vue';
import portableLink from '~/components/portableTextComps/portableLink.vue';
import portableYT from '~/components/portableTextComps/portableYT.vue';

export default Vue.extend({
  name: 'MerchantDetails',
  async asyncData({ app: { $sanity }, route }) {
    const merch: defTypes.MerchantDetails = await getMerchantDetailBySlug(
      route.params.merchant,
      $sanity
    );

    const cfs: defTypes.CrowdfundBase[] = await getBaseCrowdfundInfoForMerchant(
      merch._id,
      $sanity
    );

    return { merch, cfs };
  },
  data: () => ({
    serializers: {
      types: {
        image: portableImage,
        youtube: portableYT,
      },
      marks: {
        link: portableLink,
      },
    },
    merch: {} as defTypes.MerchantDetails,
    cfs: [] as defTypes.CrowdfundBase[],
  }),
});
</script>

<style lang="scss">
.wrapperMerchantDetails {
  background-color: white;
  display: flex;
  flex-direction: column;

  .firstLarge {
    img {
      height: 580px;
      object-fit: cover;
      max-width: 100vw;
    }
  }

  .infoWrapper {
    padding: calc(84px + 3vw) 108px calc(84px + 3vw) 167px;
    display: flex;
    justify-content: center;

    .info {
      width: 100%;
      max-width: 1600px;

      .mainInfo {
        display: grid;
        grid-template-columns: 45% 45%;
        column-gap: 10%;
        position: relative;

        .textInfo {
          .customh1 {
            color: $main;
            margin-bottom: 40px;
          }
        }

        .map {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          right: 0;
          width: 50%;

          div {
            width: 100%;
            height: 100%;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              overflow: hidden;
            }
          }
        }
      }
    }

    .additionalInfo {
      margin-top: 70px;
      display: grid;
      grid-template-columns: 45% 50%;
      column-gap: 5%;
    }

    p {
      margin: 5px 0px 5px 0px;
      color: #333;
      min-height: 1em;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased !important;
      -moz-font-smoothing: antialiased !important;
      text-rendering: optimizelegibility !important;
      letter-spacing: 0.05em;
      font-size: max(1.5em, 16px);
      line-height: 1.4;
    }

    h4 {
      font-size: 1.7em;
    }

    h3 {
      font-size: 2em;
    }

    h4 {
      font-size: 2.2em;
    }

    ul {
      font-size: 1.5em;
      color: #333;

      li {
        margin-bottom: 12px;
        max-width: min(30em, 65vw);
      }
    }
  }

  .quote {
    padding: 0px 108px calc(108px + 3vw) 108px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    text-align: center;

    .customh1 {
      line-height: 1.2;
      font-size: 4.5em;
      max-width: 1500px;
      color: #444;
    }
  }

  .secondLarge {
    img {
      height: 800px;
      object-fit: cover;
      max-width: 100vw;
    }
  }
}
</style>