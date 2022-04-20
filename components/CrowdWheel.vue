<template>
  <div class="wrapperWheel">
    <div class="arrowLeft">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.0526 24.6096C10.8903 24.6095 10.7317 24.5614 10.5968 24.4712C10.4619 24.381 10.3568 24.2529 10.2948 24.103C10.2327 23.9531 10.2165 23.7881 10.2482 23.629C10.2799 23.4699 10.3581 23.3237 10.4729 23.209L20.0044 13.6775L10.4729 4.14605C10.3234 3.99134 10.2408 3.78413 10.2426 3.56904C10.2445 3.35396 10.3308 3.14822 10.4829 2.99612C10.635 2.84403 10.8407 2.75776 11.0558 2.75589C11.2709 2.75402 11.4781 2.8367 11.6328 2.98613L21.7445 13.0979C21.8983 13.2517 21.9847 13.4603 21.9847 13.6778C21.9847 13.8953 21.8983 14.1039 21.7445 14.2578L11.6328 24.3695C11.5566 24.4457 11.4661 24.5061 11.3666 24.5472C11.267 24.5884 11.1603 24.6096 11.0526 24.6096Z"
          fill="white"
        />
      </svg>
    </div>
    <div
      class="wheel"
      :style="{
        'grid-template-columns':
          'repeat(auto-fill, calc(100%/' + displayedCfs.length + '))',
      }"
    >
      <CrowdCard
        v-for="cf in displayedCfs"
        :key="cf.slug.current"
        :crowd-f="cf"
      />
    </div>
    <div class="arrowRight">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.0526 24.6096C10.8903 24.6095 10.7317 24.5614 10.5968 24.4712C10.4619 24.381 10.3568 24.2529 10.2948 24.103C10.2327 23.9531 10.2165 23.7881 10.2482 23.629C10.2799 23.4699 10.3581 23.3237 10.4729 23.209L20.0044 13.6775L10.4729 4.14605C10.3234 3.99134 10.2408 3.78413 10.2426 3.56904C10.2445 3.35396 10.3308 3.14822 10.4829 2.99612C10.635 2.84403 10.8407 2.75776 11.0558 2.75589C11.2709 2.75402 11.4781 2.8367 11.6328 2.98613L21.7445 13.0979C21.8983 13.2517 21.9847 13.4603 21.9847 13.6778C21.9847 13.8953 21.8983 14.1039 21.7445 14.2578L11.6328 24.3695C11.5566 24.4457 11.4661 24.5061 11.3666 24.5472C11.267 24.5884 11.1603 24.6096 11.0526 24.6096Z"
          fill="white"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as defTypes from '~/assets/ts/defaultTypes';

export default Vue.extend({
  name: 'CrowdfundWheel',
  props: {
    cfs: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    displayedCfs: [] as defTypes.CrowdfundBase[],
  }),
  mounted() {
    this.recalcDisplayedCfs();
  },
  methods: {
    recalcDisplayedCfs() {
      this.displayedCfs.push(this.cfs[5]);
      this.displayedCfs.push(this.cfs[6]);
    },
  },
});
</script>

<style lang="scss">
.wrapperWheel {
  width: 100%;
  margin-bottom: calc(84px + 3vw);
  box-sizing: border-box;
  padding-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .arrowRight,
  .arrowLeft {
    background-color: $secondary;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 45px;
    height: 45px;
  }

  .arrowLeft {
    margin-right: 80px;
    margin-left: 20px;
    transform: rotate(180deg);
  }

  .arrowRight {
    margin-left: 80px;
    margin-right: 40px;
  }

  .wheel {
    width: 85%;
    max-width: 1600px;
    display: grid;

    & > * {
      border-bottom-width: 0px;
    }

    div:last-of-type {
      border-right-width: 0px;
    }
  }
}
</style>