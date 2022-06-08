<template>
  <div class="crowdDetailsFocused">
    <cardsCrowdCard
      class="buyCard"
      :class="{ fadeInOut: justMounted }"
      :crowd-f="cf"
      :large="windowWidth > 1450"
      :on-detail-site="true"
      @infoClicked="scrollTo('firstDetail')"
    />
    <div id="firstDetail" class="detailsWrapper">
      <hr />
      <div class="sectionTitle">
        <!-- <h2 class="customh2">The Case</h2>
        <h1 class="customh1"></h1> -->
      </div>
      <div class="varietyDetails fade-in">
        <div class="part1">
          <div
            class="imgWrapper"
            :style="{
              'margin-left': cf.bottleimage ? 'none' : '0 !important',
            }"
          >
            <!-- <img
              :src="
                require('../../../static/images/bottles_' +
                  (cf.bottleCount ? cf.bottleCount : '6') +
                  '.jpg')
              "
              alt=""
              class="countImg"
            /> -->
            <img
              :src="
                cf.bottleimage
                  ? urlFor(cf.bottleimage.asset).url() + '?w=800&h=800&fit=crop'
                  : require('../../../static/images/bottles_' +
                      (cf.bottleCount ? cf.bottleCount : '6') +
                      '.jpg')
              "
              alt=""
              class="countImg"
            />
          </div>

          <div
            class="textInfo"
            :style="{
              'margin-left': cf.bottleimage ? 'none' : '0 !important',
            }"
          >
            <span class="variety">{{ cf.varietyFirst }}</span>
            <p class="shortInfo">{{ cf.shortInfo }}</p>
          </div>
          <div
            class="stats"
            :style="{
              'margin-left': cf.bottleimage ? 'none' : '0 !important',
            }"
          >
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
      <div
        v-for="add in cf.addDetails"
        :key="add._key"
        class="varietyDetails fade-in"
      >
        <div class="part1">
          <div
            class="imgWrapper"
            :style="{
              'margin-left': add.bottleimage ? 'none' : '0 !important',
            }"
          >
            <img
              :src="
                add.bottleimage
                  ? urlFor(add.bottleimage.asset).url() +
                    '?w=800&h=800&fit=fill&bg=ff00'
                  : require('../../../static/images/bottles_' +
                      (add.bottleCount ? add.bottleCount : '6') +
                      '.jpg')
              "
              alt=""
              class="countImg"
            />
          </div>
          <div
            class="textInfo"
            :style="{
              'margin-left': add.bottleimage ? 'none' : '0 !important',
            }"
          >
            <span class="variety">{{ add.variety }}</span>
            <p class="shortInfo">{{ add.shortInfo }}</p>
          </div>
          <div
            class="stats"
            :style="{
              'margin-left': add.bottleimage ? 'none' : '0 !important',
            }"
          >
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

    <inputsScrollTop />
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
            <cardsCrowdCard :crowd-f="cf" />
            <portableImage class="artwork" :asset="cf.artwork.asset" />
          </div>
        </div>
      </div>
    </div> -->
</template>

<script lang="ts">
import Vue from 'vue';
import imageUrlBuilder from '@sanity/image-url';
import { SanityProjectDetails } from '@sanity/image-url/lib/types/types';
import * as defTypes from '~/assets/ts/Types/defaultTypes';
import { getCrowdfundInfoBySlug } from '~/assets/ts/CMSApi/saleApiFunctions';
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
    justMounted: true,
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
  head() {
    return {
      title: 'Minerva Wine',
    };
  },
  mounted() {
    this.addScrollAnim();
    setTimeout(() => {
      this.justMounted = false;
    }, 100);
  },
  beforeMount() {
    this.windowSizeUpdater();
    window.addEventListener('resize', this.windowSizeUpdater);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.windowSizeUpdater);
  },
  methods: {
    urlFor(src: string) {
      const builder = imageUrlBuilder(
        this.$sanity.config as SanityProjectDetails
      );
      return builder.image(src);
    },
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
    addScrollAnim() {
      const faders = this.$el.querySelectorAll('.fade-in');
      const sliders = this.$el.querySelectorAll('.slide-in');

      const appearOptions = {
        threshold: 0,
        rootMargin: '0px 0px -120px 0px',
      };

      const appearOnScroll = new IntersectionObserver(function (
        entries,
        appearOnScroll
      ) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
          }
        });
      },
      appearOptions);

      faders.forEach((fader) => {
        appearOnScroll.observe(fader);
      });

      sliders.forEach((slider) => {
        appearOnScroll.observe(slider);
      });
    },
  },
});
</script>

<style lang="scss">
.crowdDetailsFocused {
  background-color: white;
  color: #333;
  padding: calc(24px + 3vw) 60px calc(64px + 3vw) 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media screen and (max-width: 950px) and (min-height: 950px),
    screen and (max-width: 880px) and (min-height: 901px),
    screen and (max-width: 770px) {
    padding: 3vw 0px 0 0px;
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
    max-width: 1500px;
    width: 100%;
    border: none;
    visibility: visible;
    opacity: 1;
    transition-property: visibility opacity;
    transition-timing-function: ease;
    transition-duration: 0.5s;

    @media screen and (max-width: 1180px), screen and (max-height: 900px) {
      height: auto !important;
    }
    // @media screen and (max-width: 1000px) and (min-height: 950px),
    //   screen and (max-width: 800px) and (min-height: 901px),
    //   screen and (max-width: 780px) {
    //   padding: 32px 32px 35px 42px;
    // }

    // @media screen and (max-width: 550px) {
    //   padding: 32px 32px 35px 32px;
    // }
  }

  .detailsWrapper {
    width: 100%;
    margin-top: 80px;
    padding-top: 80px;
    box-sizing: border-box;
    position: relative;
    max-width: 1500px;

    @media screen and (max-width: 950px) and (min-height: 950px),
      screen and (max-width: 880px) and (min-height: 901px),
      screen and (max-width: 770px) {
      margin-top: 60px;
    }

    @media screen and (max-width: 565px) {
      margin-top: 50px;
    }

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
      padding-left: 6vw;
      padding-right: 6vw;
      padding-bottom: 50px;
      padding-top: 70px;
    }

    .part1 {
      display: grid;
      grid-template-columns: 370px calc(100% - 370px);
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
        margin-left: -50px !important;
        box-sizing: border-box;

        @media screen and (max-width: 950px) and (min-height: 950px),
          screen and (max-width: 880px) {
          grid-column: 1;
          grid-row: 2;
          padding-right: 40px;
          margin-left: -20px !important;
        }

        @media screen and (max-width: 450px) {
          padding-right: 10px;
          margin-left: -10px;
        }

        .countImg {
          height: 100%;
          width: 100%;
          overflow: hidden;
          object-fit: contain;
        }
      }

      .textInfo {
        grid-column: 2;
        grid-row: 1;
        margin-left: -50px !important;

        @media screen and (max-width: 950px) and (min-height: 950px),
          screen and (max-width: 880px) {
          grid-column-start: 1;
          grid-column-end: span 2;
          grid-row: 1;
          margin-left: 0px !important;
        }

        .variety {
          font-size: max(2.875em, 30px);
          font-family: $standard-big-font;
          color: $main;
          white-space: pre-wrap;
        }

        .shortInfo {
          margin-top: 20px;
          margin-bottom: 30px;
        }
      }

      .stats {
        grid-column: 2;
        grid-row: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-left: -50px !important;

        @media screen and (max-width: 950px) and (min-height: 950px),
          screen and (max-width: 880px) {
          grid-column: 2;
          grid-row: 2;
          margin-left: -30px !important;
        }

        .progressWrapper {
          margin-bottom: 30px;
          font-size: max(1em, 11px);

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

        @media screen and (max-width: 1060px) {
          text-align: initial;
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

.fadeInOut {
  opacity: 0 !important;
  visibility: hidden !important;
}
</style>