<template>
  <div class="imgwrapper">
    <img
      class="cover"
      :src="urlFor(asset._ref).url() + newHeightString"
      quality="85"
    />
  </div>
</template>

<script>
import imageUrlBuilder from '@sanity/image-url';
import Vue from 'vue';

export default Vue.extend({
  props: {
    asset: {
      type: Object,
      required: true,
    },
    newHeight: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    newHeightString() {
      if (this.newHeight !== '') return '?h=' + this.newHeight;
      else return '';
    },
  },
  methods: {
    urlFor(src) {
      const builder = imageUrlBuilder(this.$sanity.config);
      return builder.image(src);
    },
  },
});
</script>

<style lang="scss" scoped>
.cover {
  display: block;
  width: 100%;
}
</style>