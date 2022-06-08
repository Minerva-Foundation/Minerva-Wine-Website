<template>
  <article class="wrappercardsMerchantCard">
    <portableImage
      class="image"
      :asset="merchant.card.asset"
      new-height="378"
      :alt="merchant.seo.focus_keyword + ' merchant preview image'"
    />
    <span class="taa"
      ><h3 class="title">{{ merchant.title }}</h3>
      <div class="country">
        <portableImage
          class="flag"
          :asset="merchant.flag.asset"
          new-height="40"
          :alt="merchant.country + ' flag'"
        />
        <span class="countryName">{{ merchant.country }}</span>
      </div>
    </span>
  </article>
</template>

<script lang="ts">
import Vue from 'vue';
import portableImage from '~/components/portableTextComps/portableImage.vue';

export default Vue.extend({
  name: 'MerchantPreview',
  components: { portableImage },
  props: {
    merchant: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss">
$defWidth: 410px;

.wrappercardsMerchantCard {
  display: flex;
  flex-direction: column;
  height: 509px;
  padding-top: 39px;

  @media screen and (max-width: 1500px) {
    height: 450px;
    padding-top: 30px;
  }

  @media screen and (max-width: 1320px) {
    height: 425px;
    padding-top: 24px;
  }

  @media screen and (max-width: 645px) and (min-height: 1150px),
    screen and (max-width: 600px) and (min-height: 1050px),
    screen and (max-width: 550px) {
    justify-content: center;
    padding-top: 0px;
    height: auto;

    * {
      max-width: 90vw !important;
    }

    .image {
      height: 60vw !important;
      width: 90vw !important;
    }
  }

  * {
    max-width: $defWidth;

    @media screen and (max-width: 1500px) {
      max-width: 375px;
    }

    @media screen and (max-width: 1320px) {
      max-width: 347.5px;
    }
  }

  .image {
    width: $defWidth;
    height: 295px;
    margin-bottom: 10px;

    @media screen and (max-width: 1500px) {
      height: 270px;
      width: 375px;
    }

    @media screen and (max-width: 1320px) {
      height: 250px;
      width: 347.5px;
    }

    @media screen and (max-width: 645px) and (min-height: 1150px),
      screen and (max-width: 600px) and (min-height: 1050px),
      screen and (max-width: 550px) {
      height: 48vw !important;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .taa {
    margin-bottom: 1px;
    font-size: 1.1em;
    color: $dark-font;

    .title {
      font-weight: 400;
      font-size: 3em;
      line-height: 0.95 !important;
      margin-top: 2px;
      font-family: $standard-big-font;
      letter-spacing: 0.02em;
      overflow-wrap: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      padding-top: 5px;
      padding-bottom: 5px;

      @media screen and (max-width: 1500px) {
        font-size: 2.7em;
      }

      @media screen and (max-width: 570px), screen and (max-width: 1320px) {
        font-size: 2.5em;
      }

      @media screen and (max-width: 430px) {
        font-size: 2.4em;
      }

      @media screen and (max-width: 370px) {
        font-size: 2em;
      }

      @media screen and (max-width: 270px) {
        font-size: 1.5em;
      }
    }
  }

  .country {
    display: flex;
    align-items: center;
    margin-top: 5px;

    .countryName {
      text-transform: uppercase;
      color: $secondary;
      margin-left: 15px;
      font-size: max(1.225em, 14px);

      @media screen and (max-width: 1500px) {
        font-size: max(1.125em, 14px);
      }

      @media screen and (max-width: 570px), screen and (max-width: 1320px) {
        font-size: max(1.025em, 14px);
      }

      @media screen and (max-width: 430px) {
        font-size: max(0.95em, 14px);
      }

      @media screen and (max-width: 370px) {
        font-size: max(0.85em, 14px);
      }
    }

    .flag {
      img {
        border: 1px solid rgba(0, 0, 0, 0.2);
        max-width: 39px !important;
        height: 39px;
        border-radius: 50%;

        @media screen and (max-width: 1500px) {
          height: 33px;
          max-width: 33px !important;
        }

        @media screen and (max-width: 570px), screen and (max-width: 1320px) {
          height: 30px;
          max-width: 30px !important;
        }

        @media screen and (max-width: 370px) {
          height: 25px;
          max-width: 25px !important;
        }
      }
    }
  }
}
</style>