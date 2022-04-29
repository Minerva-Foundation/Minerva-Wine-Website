<template>
  <div class="crowdDetailsFocused">
    <div class="wrapper">
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
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as defTypes from '~/assets/ts/defaultTypes';
import { getCrowdfundInfoBySlug } from '~/assets/ts/saleApiFunctions';

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
  }),
});
</script>

<style lang="scss">
.crowdDetailsFocused {
  background-color: white;
  color: #333;
  padding: calc(34px + 3vw) 108px calc(144px + 3vw) 147px;
  display: flex;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 950px) and (min-height: 950px),
    screen and (max-width: 880px) and (min-height: 901px),
    screen and (max-width: 770px) {
    padding: calc(34px + 3vw) 50px calc(94px + 3vw) 60px;
  }

  @media screen and (max-width: $fourth-incr) {
    padding: calc(34px + 3vw) 20px calc(94px + 3vw) 25px;
  }

  .wrapper {
    padding-top: 50px;
  }

  h1 {
    font-size: 6em;
    width: 45%;

    @media screen and (max-width: 1500px) and (min-height: 950px),
      screen and (max-width: 1400px) and (min-height: 901px),
      screen and (max-width: 1300px) {
      width: 55%;
    }

    @media screen and (max-width: 1300px) and (min-height: 950px),
      screen and (max-width: 1200px) and (min-height: 901px),
      screen and (max-width: 1100px) {
      width: 100%;
    }
  }

  .mainInfo {
    display: grid;
    grid-template-columns: 50% 41%;
    column-gap: 6vw;
    max-width: 1600px;

    @media screen and (max-width: 1500px) and (min-height: 950px),
      screen and (max-width: 1400px) and (min-height: 901px),
      screen and (max-width: 1300px) {
      grid-template-columns: 55% 35%;
    }

    @media screen and (max-width: 1300px) and (min-height: 950px),
      screen and (max-width: 1200px) and (min-height: 901px),
      screen and (max-width: 1100px) {
      display: flex;
      flex-direction: column;
    }

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

        @media screen and (max-width: 700px) {
          margin-top: 20px;
        }
      }
    }

    .sideInfo {
      display: flex;
      flex-direction: column;

      @media screen and (max-width: 1300px) and (min-height: 950px),
        screen and (max-width: 1200px) and (min-height: 901px),
        screen and (max-width: 1100px) {
        flex-direction: row;
        justify-content: space-between;
        margin-top: 5vw;
      }

      @media screen and (max-width: $fourth-incr) {
        flex-direction: column;
      }

      h3 {
        margin-bottom: 30px;
        margin-top: 20px;
      }

      .profile {
        @media screen and (max-width: 1300px) and (min-height: 950px),
          screen and (max-width: 1200px) and (min-height: 901px),
          screen and (max-width: 1100px) {
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        @media screen and (max-width: 670px) {
          width: 45%;
        }

        @media screen and (max-width: 600px) {
          width: 42%;
        }

        @media screen and (max-width: $fourth-incr) {
          width: 100%;
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
      }

      .artworkWrapper {
        width: 100%;
        height: 70%;
        margin-top: 20px;

        @media screen and (max-width: 1300px) and (min-height: 950px),
          screen and (max-width: 1200px) and (min-height: 901px),
          screen and (max-width: 1100px) {
          width: 40%;
        }

        @media screen and (max-width: 670px) {
          width: 45%;
        }

        @media screen and (max-width: 600px) {
          width: 49%;
        }

        @media screen and (max-width: $fourth-incr) {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .wrapperCrowdCard {
          border-top: 1px solid #cccccc;
          border-left: 1px solid #cccccc;
        }

        .artwork {
          height: 100%;

          @media screen and (max-width: $fourth-incr) {
            width: 95%;
          }

          img {
            object-fit: contain;
            width: 100%;
          }
        }
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