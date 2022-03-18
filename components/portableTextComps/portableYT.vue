<template>
  <div>
    <iframe frameborder="0" allowfullscreen :src="url"> </iframe>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    url: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
iframe {
  display: block;
  margin: 50px auto 50px auto;
  width: 50em;
  height: 28.125em;

  @media screen and (max-width: 1050px) and (min-height: 950px),
    screen and (max-width: 930px) {
    width: 80vw;
    height: calc(0.5625 * 80vw);
  }
}
</style>