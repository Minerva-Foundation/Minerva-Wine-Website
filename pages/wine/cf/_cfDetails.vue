<template>
  <div class="crowdDetailsFocused">
    <CrowdCard
      class="buyCard"
      :crowd-f="cf"
      :large="windowWidth > 1520"
      :on-detail-site="true"
      @infoClicked="scrollTo('firstDetail')"
    />
    <div id="firstDetail" class="detailsWrapper">
      <hr />
      <div class="sectionTitle">
        <!-- <h2 class="customh2">The Case</h2>
        <h1 class="customh1"></h1> -->
      </div>
      <div class="varietyDetails">
        <div class="part1">
          <div class="imgWrapper">
            <img
              :src="
                require('../../../static/images/bottles_' +
                  (cf.bottleCount ? cf.bottleCount : '6') +
                  '.jpg')
              "
              alt=""
              class="countImg"
            />
          </div>

          <div class="textInfo">
            <span class="variety">{{
              (cf.bottleCount ? cf.bottleCount : '6') + '/6  ' + cf.varietyFirst
            }}</span>
            <p class="shortInfo">{{ cf.shortInfo }}</p>
          </div>
          <div class="stats">
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
          </div>
        </div>
        <div class="part2">
          <SanityContent
            v-if="cf.detail1"
            class="detail"
            :blocks="cf.detail1"
            :serializers="serializers"
          />
          <SanityContent
            v-if="cf.detail2"
            class="detail"
            :blocks="cf.detail2"
            :serializers="serializers"
          />
          <SanityContent
            v-if="cf.detail3"
            class="detail"
            :blocks="cf.detail3"
            :serializers="serializers"
          />
        </div>
      </div>
      <div v-for="add in cf.addDetails" :key="add._key" class="varietyDetails">
        <div class="part1">
          <div class="imgWrapper">
            <img
              :src="
                require('../../../static/images/bottles_' +
                  (add.bottleCount ? add.bottleCount : '6') +
                  '.jpg')
              "
              alt=""
              class="countImg"
            />
          </div>
          <div class="textInfo">
            <span class="variety">{{
              add.bottleCount + '/6  ' + add.variety
            }}</span>
            <p class="shortInfo">{{ add.shortInfo }}</p>
          </div>
          <div class="stats">
            <div class="progressWrapper">
              BODY
              <div class="progressBar">
                <span
                  class="value"
                  :style="{
                    width: add.body + '%',
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
                    width: add.acidity + '%',
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
                    width: add.fruitiness + '%',
                  }"
                >
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="part2">
          <SanityContent
            v-if="add.detail1"
            class="detail"
            :blocks="add.detail1"
            :serializers="serializers"
          />
          <SanityContent
            v-if="add.detail2"
            class="detail"
            :blocks="add.detail2"
            :serializers="serializers"
          />
          <SanityContent
            v-if="add.detail3"
            class="detail"
            :blocks="add.detail3"
            :serializers="serializers"
          />
        </div>
        <hr />
      </div>
    </div>

    <ScrollTop />
  </div>
  <!-- <div class="wrapper">
      <h2 class="customh2">About</h2>
      <h1 class="customh1">{{ cf.variety }}</h1>
      <div class="mainInfo">
        <div class="textWrapper">
          <div class="vintage">
            <h3 class="customh3">{{ cf.vintage }} Vintage</h3>
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
          <div class="profile">
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
          </div>

          <div class="artworkWrapper">
            <CrowdCard :crowd-f="cf" />
            <portableImage class="artwork" :asset="cf.artwork.asset" />
          </div>
        </div>
      </div>
    </div> -->
</template>

<script lang="ts">
import Vue from 'vue';
import * as defTypes from '~/assets/ts/defaultTypes';
import { getCrowdfundInfoBySlug } from '~/assets/ts/saleApiFunctions';
import portableImage from '~/components/portableTextComps/portableImage.vue';
import portableLink from '~/components/portableTextComps/portableLink.vue';
import portableYT from '~/components/portableTextComps/portableYT.vue';

export default Vue.extend({
  name: 'CrowdfundsDetails',
  async asyncData({ app: { $sanity }, route }) {
    const cf: defTypes.CrowdfundBase = await getCrowdfundInfoBySlug(
      route.params.cfDetails,
      $sanity
    );

    return { cf };
  },
  data: () => ({
    cf: {} as defTypes.CrowdfundBase,
    windowWidth: 0,
    serializers: {
      types: {
        image: portableImage,
        youtube: portableYT,
      },
      marks: {
        link: portableLink,
      },
    },
  }),
  beforeMount() {
    this.windowSizeUpdater();
    window.addEventListener('resize', this.windowSizeUpdater);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.windowSizeUpdater);
  },
  methods: {
    windowSizeUpdater() {
      const viewportWidth: number = window.innerWidth;
      this.windowWidth = viewportWidth;
    },
    scrollTo(id: String) {
      const el = document.querySelector('#' + id) as HTMLElement;

      window.scrollTo({
        top: el.offsetTop,
        behavior: 'smooth',
      });
    },
  },
});
</script>

<style lang="scss">
.crowdDetailsFocused {
  background-color: white;
  color: #333;
  padding: calc(64px + 3vw) 60px calc(144px + 3vw) 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media screen and (max-width: 950px) and (min-height: 950px),
    screen and (max-width: 880px) and (min-height: 901px),
    screen and (max-width: 770px) {
    padding: calc(34px + 3vw) 20px calc(94px + 3vw) 20px;
  }

  @media screen and (max-width: $fourth-incr) {
    padding: calc(34px + 3vw) 0px calc(94px + 3vw) 0px;
  }

  hr {
    position: absolute;
    top: 0;
    height: 1px;
    left: 0px;
    right: 0;
    margin: auto;
    color: #dadada;
    background-color: #dadada;
    width: 100%;
    border-width: 0px;

    @media screen and (max-width: $fourth-incr) {
      width: 80%;
    }
  }

  .buyCard {
    max-width: 1400px;
    width: 100%;
    border: none;

    @media screen and (max-width: 1330px), screen and (max-height: 950px) {
      height: auto !important;
    }

    @media screen and (max-width: 1000px) and (min-height: 950px),
      screen and (max-width: 800px) and (min-height: 901px),
      screen and (max-width: 780px) {
      padding: 32px 32px 35px 42px;
    }

    @media screen and (max-width: 550px) {
      padding: 32px 32px 35px 32px;
    }
  }

  .detailsWrapper {
    width: 100%;
    margin-top: 100px;
    padding-top: 50px;
    box-sizing: border-box;
    position: relative;
    max-width: 1500px;

    .sectionTitle {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-bottom: -50px;

      .customh1 {
        width: auto;
      }
    }
  }

  .varietyDetails {
    padding-top: 100px;
    padding-bottom: 100px;
    box-sizing: border-box;
    position: relative;

    @media screen and (max-width: 950px) and (min-height: 950px),
      screen and (max-width: 880px) and (min-height: 901px),
      screen and (max-width: 770px) {
      padding-left: 40px;
      padding-right: 40px;
    }

    @media screen and (max-width: 565px) {
      padding-left: 30px;
      padding-right: 30px;
      padding-bottom: 50px;
      padding-top: 70px;
    }

    .part1 {
      display: grid;
      grid-template-columns: 405px calc(100% - 405px);
      grid-template-rows: calc(100% - 180px) 180px;

      @media screen and (max-width: 950px) and (min-height: 950px),
        screen and (max-width: 880px) {
        grid-column: 1;
        grid-row: 2;
        grid-template-columns: 200px calc(100% - 200px);
      }

      @media screen and (max-width: 450px) {
        grid-template-columns: 140px calc(100% - 140px);
      }

      .imgWrapper {
        grid-column: 1;
        grid-row-start: 1;
        grid-row-end: span 2;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 50px;
        box-sizing: border-box;

        @media screen and (max-width: 950px) and (min-height: 950px),
          screen and (max-width: 880px) {
          grid-column: 1;
          grid-row: 2;
          padding-right: 40px;
        }

        @media screen and (max-width: 450px) {
          padding-right: 10px;
        }

        .countImg {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .textInfo {
        grid-column: 2;
        grid-row: 1;

        @media screen and (max-width: 950px) and (min-height: 950px),
          screen and (max-width: 880px) {
          grid-column-start: 1;
          grid-column-end: span 2;
          grid-row: 1;
        }

        .variety {
          font-size: 2.875em;
          font-family: $standard-big-font;
          color: $main;
          white-space: pre-wrap;
        }

        .shortInfo {
          margin-top: 26px;
          margin-bottom: 30px;
        }
      }

      .stats {
        grid-column: 2;
        grid-row: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        @media screen and (max-width: 950px) and (min-height: 950px),
          screen and (max-width: 880px) {
          grid-column: 2;
          grid-row: 2;
        }

        .progressWrapper {
          margin-bottom: 30px;

          @media screen and (max-width: 950px) and (min-height: 950px),
            screen and (max-width: 880px) {
            margin-bottom: 10px;
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
          }
        }
      }
    }

    .part2 {
      margin-top: 80px;
      display: flex;
      flex-wrap: wrap;
      gap: 4%;

      @media screen and (max-width: 565px) {
        margin-top: 40px;
      }

      & > * {
        flex: 1 0 max(30%, 450px);
        margin-bottom: 30px;

        @media screen and (max-width: 565px) {
          flex: 1 0 100%;
        }
      }

      p {
        text-align: justify;
      }
    }
  }

  .customh2 {
    margin-bottom: 5px;
  }

  .customh3 {
    color: inherit;
  }

  h1 {
    color: $main;
  }
}
</style>