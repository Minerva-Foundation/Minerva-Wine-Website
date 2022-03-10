<template>
  <nav class="mainNav">
    <NuxtLink to="/"> Home </NuxtLink>
    <NuxtLink to="/club"> Club </NuxtLink>
  </nav>
</template>

<script"ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DefaultHeader',
});
</script>

<style lang="scss" scoped>
.mainNav {
  height: $header-height;
  color: $main;
}
</style>