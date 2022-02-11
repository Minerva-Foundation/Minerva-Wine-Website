<template>
  <div key="asdasd" slot="asd" class="wrapper" test="asd" target="aasd">
    Hello world {{ primStore.name }}
  </div>
</template>

<script lang="ts">
import * as defTypes from '~/assets/ts/default-types';
import { RootState } from '~/store/index';

const test: defTypes.test = {
  name: 'Gisela',
  height: 20,
};

export default {
  computed: {
    primStore(): RootState {
      return this.$store.state;
    },
  },
  methods: {
    Test() {
      console.log(test);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  color: $big-font;
}
</style>
