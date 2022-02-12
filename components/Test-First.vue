<template>
  <div key="asdasd" slot="asd" class="wrapper" test="asd" target="aasd">
    Hello world {{ primStore.name }}
  </div>
</template>

<script lang="ts">
import { groq } from '@nuxtjs/sanity';
import * as defTypes from '~/assets/ts/default-types';
import { RootState } from '~/store/index';

export default {
  name: 'TestFirst',
  data: () => ({
    sanityObj: [] as defTypes.Article[],
  }),
  async fetch() {
    this.sanityObj = (await this.$sanity.fetch(
      groq`*[_type == "post"]`
    )) as Array<defTypes.Article>;
  },
  computed: {
    primStore(): RootState {
      return this.$store.state;
    },
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.wrapper {
  color: $big-font;
}
</style>
