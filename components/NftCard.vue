<template>
  <div class="wrapper">
    {{ nft.extension.name }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    nft: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
</style>