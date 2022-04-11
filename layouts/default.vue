<template>
  <div class="app">
    <DefaultHeader :class="{ shadow: scrolled }" class="header" />
    <Nuxt class="main" />
    <DefaultFooter class="footer" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data: () => ({
    scrolled: false,
  }),
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const atTop: Boolean =
        Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop
        ) +
          window.innerHeight ===
        document.documentElement.clientHeight;
      if (!atTop) this.scrolled = true;
      else this.scrolled = false;
    },
  },
});
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  background-color: $main;
}
.header {
  width: 100%;

  @media screen and (max-width: $fourth-incr) {
    position: sticky;
    top: 0;
    background-color: $main;
  }
}
.main {
  z-index: 1;
  margin-bottom: calc(#{$footer-height} - 1px);
}

.shadow {
  @media screen and (max-width: $fourth-incr) {
    -webkit-box-shadow: -1px 0px 31px 12px rgba(0, 0, 0, 0.1);
    box-shadow: -1px 0px 31px 12px rgba(0, 0, 0, 0.1);
  }
}
</style>