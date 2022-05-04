<template>
  <div class="wrapper">
    <h1 class="customh1">Nothing Here Yet</h1>
    <span class="smaller">Coming soon</span>
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
    margin-bottom: 20px;
    margin-top: 15vh;
  }

  .smaller {
    font-size: 2em;
    color: #999;
    text-transform: uppercase;
  }
}
</style>