<template>
  <div class="wrapper">
    <h1 class="customh1">Nothing Here Yet</h1>
    <NuxtLink to="/wine"
      ><button class="button">FIND YOUR WINE</button></NuxtLink
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'MyWine',
});
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  .customh1 {
    color: #777;
    margin-bottom: 30px;
    margin-top: 15vh;
  }
}
</style>