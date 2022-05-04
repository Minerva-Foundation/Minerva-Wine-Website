<template>
  <div class="wrapperAssets">
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

<style lang="scss">
.wrapperAssets {
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

  @media screen and (max-width: $fourth-incr) {
    .button {
      min-width: 120px !important;
      height: auto !important;
      min-height: 45px;
      padding: 0px 5px 0px 5px;
      font-size: 0.85rem;

      @media screen and (max-width: $fifth-incr) {
        font-size: 1rem;
      }
    }
  }
}
</style>