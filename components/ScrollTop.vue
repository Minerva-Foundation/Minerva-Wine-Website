<template>
  <div class="scrollToTop">
    <div
      class="sticky"
      :class="{ sttVis: sttVis }"
      @click="scrollToTop()"
      @mouseleave="textVis = false"
      @mouseover="textVis = true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#888"
        class="noselect"
        @mouseleave="textVis = false"
        @mouseover="textVis = true"
      >
        <path d="M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z" />
      </svg>
      <span :class="{ textVis: textVis }" class="text noselect"
        >BACK TO TOP</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data: () => ({
    textVis: false,
    sttVis: false,
  }),
  beforeMount() {
    window.addEventListener('scroll', this.sttVisObs);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.sttVisObs);
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    sttVisObs() {
      const scrollElm = document.scrollingElement?.scrollTop;
      const windowHeight = window.innerHeight;

      if (scrollElm && scrollElm >= 2 * windowHeight) {
        this.sttVis = true;
      } else {
        this.sttVis = false;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.scrollToTop {
  display: none;
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  box-sizing: border-box;
  padding-bottom: 30px;
  pointer-events: none;

  .sticky {
    pointer-events: all;
    top: calc(100vh - 130px);
    height: 100px;
    position: sticky;
    box-sizing: border-box;
    overflow: hidden;
    z-index: 3;
    margin-left: 35px;
    padding-left: 30px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    right: 0;
    width: 100px;
    background-color: rgb(255, 255, 255);
    -webkit-box-shadow: -2px 2px 15px -3px rgba(0, 0, 0, 0.1);
    box-shadow: -2px 2px 15px -3px rgba(0, 0, 0, 0.1);
    visibility: hidden;
    opacity: 0;
    transition-duration: 1s;
    transition-property: opacity width visibility;
    transition-timing-function: ease;

    &:hover {
      width: 270px;
    }
  }

  .sttVis {
    visibility: visible;
    opacity: 1;
    transition-duration: 0.2s;
  }

  svg {
    transform: rotate(-90deg);
    width: 40px;
    height: 40px;
    position: absolute;
  }

  .text {
    text-align: right;
    max-width: 210px;
    padding-left: 70px;
    font-size: 1.5em;
    color: #555;
    font-family: $secondary-big-font;
    opacity: 0;
    visibility: hidden;
    transition-delay: 0s;
    transition-duration: 0s;
    transition-property: opacity visibility;
    transition-timing-function: ease;
  }

  .textVis {
    visibility: visible;
    opacity: 1;
    transition-delay: 0.15s;
    transition-duration: 0.2s;
  }

  @media screen and (min-width: $fourth-incr) {
    display: block;
  }
}
</style>