<template>
  <div class="scrollToTop">
    <div
      class="sticky"
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
      <span v-if="textVis" class="text noselect">BACK TO TOP</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data: () => ({
    textVis: false,
  }),
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
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
  left: 0;
  box-sizing: border-box;
  padding-bottom: 20px;

  .sticky {
    top: calc(100vh - 120px);
    height: 100px;
    position: sticky;
    z-index: 3;
    margin-left: 25px;
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 12px;

    &:hover {
      background-color: white;
      -webkit-box-shadow: 0px 2px 15px -3px rgba(0, 0, 0, 0.17);
      box-shadow: 0px 2px 15px -3px rgba(0, 0, 0, 0.17);
    }
  }

  svg {
    transform: rotate(-90deg);
    width: 3em;
  }

  .text {
    text-align: right;
    max-width: 210px;
    padding-left: 1em;
    font-size: 1.5em;
    color: #555;
    font-family: $secondary-big-font;
  }

  @media screen and (min-width: $fourth-incr) {
    display: block;
  }
}
</style>