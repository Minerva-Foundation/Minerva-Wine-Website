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
      <CrowdWheel id="buy" name="buy" :cfs="cfs" :new-index="newIndex" />
    </div>
    <div class="quote">
      <span class="customh1">{{ merch.quote }}</span>
    </div>
    <portableImage class="secondLarge" :asset="merch.largeSecondImage.asset" />
    <div
      v-for="cf in cfs"
      :id="cf.slug.current + 'details'"
      :key="cf.slug.current"
      :name="cf.slug.current + 'details'"
      class="crowdDetails"
    >
      <div class="wrapper">
        <h2 class="customh2">About</h2>
        <h1 class="customh1">{{ cf.variety }}</h1>
        <div class="mainInfo">
          <div class="textWrapper">
            <div class="vintage">
              <h3 class="customh3">{{ cf.vintage }} Vintage</h3>
              <NuxtLink
                :to="{
                  path: ``,
                  hash: `#buy`,
                }"
                @click.native="newIndex = cfs.indexOf(cf)"
              >
                <button class="button">BUY &#8599;</button>
              </NuxtLink>
            </div>
            <SanityContent
              class="detail"
              :blocks="cf.detail1"
              :serializers="serializers"
            />
            <SanityContent
              class="detail"
              :blocks="cf.detail2"
              :serializers="serializers"
            />
            <SanityContent
              class="detail"
              :blocks="cf.detail3"
              :serializers="serializers"
            />
          </div>
          <div class="sideInfo">
            <h3 class="customh3">Taste Profile</h3>
            <div class="progressWrapper">
              BODY
              <div class="progressBar">
                <span
                  class="value"
                  :style="{
                    width: cf.body + '%',
                  }"
                >
                </span>
              </div>
            </div>
            <div class="progressWrapper">
              ACIDITY
              <div class="progressBar">
                <span
                  class="value"
                  :style="{
                    width: cf.acidity + '%',
                  }"
                >
                </span>
              </div>
            </div>
            <div class="progressWrapper">
              FRUITINESS
              <div class="progressBar">
                <span
                  class="value"
                  :style="{
                    width: cf.fruitiness + '%',
                  }"
                >
                </span>
              </div>
            </div>
            <div class="artworkWrapper">
              <portableImage class="artwork" :asset="cf.artwork.asset" />
            </div>
          </div>
        </div>
      </div>

      <hr />
    </div>
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
    newIndex: 0 as Number,
  }),
});
</script>

<style lang="scss">
.wrapperMerchantDetails {
  background-color: white;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;

  p {
    font-size: 1.4em;
  }

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
    padding: 3vw 108px calc(108px + 5vw) 108px;
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

  .crowdDetails {
    color: #333;
    padding: calc(84px + 3vw) 108px calc(84px + 3vw) 167px;
    display: flex;
    justify-content: center;
    position: relative;

    hr {
      position: absolute;
      bottom: 0;
      height: 1px;
      color: #e6e6e6;
      background-color: #e6e6e6;
      width: 50%;
      border-width: 0px;
    }

    h1 {
      font-size: 6em;
    }

    .mainInfo {
      display: grid;
      grid-template-columns: 45% 45%;
      column-gap: 10%;
      max-width: 1600px;

      .textWrapper {
        display: flex;
        flex-direction: column;

        .vintage {
          display: flex;
          align-items: center;
          margin-top: 20px;

          button {
            min-width: 0;
            padding-left: 26px;
            padding-right: 26px;
            height: 59px !important;
            font-size: 1em;
            margin-left: 30px;

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
        }

        .detail {
          margin-top: 50px;
        }
      }

      .sideInfo {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h3 {
          margin-bottom: 30px;
          margin-top: 20px;
        }

        .progressWrapper {
          margin-bottom: 30px;

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
          }
        }

        .artworkWrapper {
          width: 100%;
          height: 70%;
          margin-top: 20px;

          .artwork {
            height: 100%;

            img {
              object-fit: contain;
              width: 100%;
            }
          }
        }
      }
    }
  }

  .customh3 {
    color: inherit;
  }

  h1 {
    color: $main;
  }
}
</style>