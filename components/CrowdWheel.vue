<template>
  <div class="wrapperWheel noselect">
    <div class="arrowLeft" @click.prevent="scrollWheel(false)">
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
      :class="{
        arrowPressed: arrowPressed,
      }"
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
    <div class="arrowRight" @click.prevent="scrollWheel(true)">
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
    <div class="dots">
      <div
        v-for="i in cfs.length"
        :key="i"
        class="dot"
        :class="{ dotSelect: cfIndexLeft === i - 1 }"
        @click="
          {
            cfIndexLeft = i - 1;
            wheelFadeOutIn();
          }
        "
      ></div>
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
      type: Array,
      required: true,
    },
    newIndex: {
      type: Number,
      required: false,
      default: -1,
    },
  },
  data: () => ({
    cfsOnDisplay: 0,
    cfIndexLeft: 0,
    arrowPressed: false,
  }),
  computed: {
    displayedCfs(): defTypes.CrowdfundBase[] {
      const temp = [];
      for (let i = 0; i < this.cfsOnDisplay; i++) {
        if (this.cfIndexLeft + i < this.cfs.length) {
          temp.push(this.cfs[this.cfIndexLeft + i]);
        } else {
          temp.push(this.cfs[-1 + i]);
        }
      }
      return temp as defTypes.CrowdfundBase[];
    },
  },
  watch: {
    newIndex(newIndex) {
      this.cfIndexLeft = newIndex;
      const wheel = document.querySelector('.wheel');

      if (wheel) {
        wheel.classList.add('highlight');
        setTimeout(() => {
          wheel.classList.remove('highlight');
        }, 1000);
      }
    },
  },
  mounted() {
    this.recalcDisplayedCfs();
    window.addEventListener('resize', this.recalcDisplayedCfs);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.recalcDisplayedCfs);
  },
  methods: {
    recalcDisplayedCfs() {
      const viewportWidth: number = window.innerWidth;
      if (viewportWidth <= 1535 || this.cfs.length <= 1) {
        this.cfsOnDisplay = 1;
      } else {
        this.cfsOnDisplay = 2;
      }
    },
    scrollWheel(fwd: boolean) {
      this.wheelFadeOutIn();

      // Test if at end or start
      if (fwd) {
        this.cfs.length <= this.cfIndexLeft + 1
          ? (this.cfIndexLeft = 0)
          : this.cfIndexLeft++;
      } else {
        this.cfIndexLeft - 1 < 0
          ? (this.cfIndexLeft = this.cfs.length - 1)
          : this.cfIndexLeft--;
      }
    },
    wheelFadeOutIn() {
      this.arrowPressed = true;

      setTimeout(() => {
        this.arrowPressed = false;
      }, 10);
    },
  },
});
</script>

<style lang="scss">
.wrapperWheel {
  width: 100%;
  margin-bottom: calc(84px + 3vw);
  box-sizing: border-box;
  padding-left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 100px;
  padding-top: 50px;

  hr {
    height: 1px;
    color: #ececec;
    background-color: #ececec;
    border-width: 0;
    width: 50%;
    position: absolute;
    top: 0;
  }

  .arrowRight,
  .arrowLeft {
    background-color: $secondary;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    cursor: pointer;
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
    opacity: 1;
    max-width: 1600px;
    display: grid;
    transition: 0.2s ease opacity;
    overflow: hidden;

    & > div:first-child {
      -webkit-transition: background-color 0.1s linear;
      -ms-transition: background-color 0.1s linear;
      transition: background-color 0.1s linear;
    }

    & > * {
      border-bottom-width: 0px;
    }

    div:last-of-type {
      border-right-width: 0px;
    }
  }

  .highlight {
    & > div:first-child {
      background-color: #cccccc1f !important;
    }
  }

  .arrowPressed {
    opacity: 0;
    transition: 0s ease opacity;
  }

  .dots {
    position: absolute;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1050px) {
      display: none;
    }

    .dot {
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background-color: #cccccc;
      margin-left: 15px;
      margin-right: 15px;
      cursor: pointer;
    }

    .dotSelect {
      background-color: #777;
    }
  }
}
</style>