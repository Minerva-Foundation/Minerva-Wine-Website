<template>
  <div>
    <iframe frameborder="0" allowfullscreen width="800" height="450" :src="url">
    </iframe>
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

  @media screen and (max-width: 1050px) {
    width: 80vw;
    height: calc(0.5625 * 80vw);
  }
}
</style>