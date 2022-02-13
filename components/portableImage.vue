<template>
  <img class="cover" :src="urlFor(asset._ref).url()" quality="85" />
</template>

<script>
import imageUrlBuilder from '@sanity/image-url';

export default {
  props: {
    asset: {
      type: Object,
      required: true,
    },
  },
  methods: {
    urlFor(src) {
      const builder = imageUrlBuilder(this.$sanity.config);
      return builder.image(src);
    },
  },
};
</script>