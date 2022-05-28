<template>
  <div class="wrapper">
    <span class="text" :class="{ upsidedown: upsidedown }">{{ text }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'WarningTooltip',
  props: {
    text: {
      type: String,
      required: true,
    },
    upsidedown: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  z-index: 100;

  .text {
    height: 1em;
    padding: 7px;
    padding-top: 6px;
    position: relative;
    margin-bottom: 10px;
    background-color: rgb(243, 243, 243);
    border-radius: 3px;
    color: #666;
    font-size: 0.75rem;
    width: fit-content;
    -webkit-box-shadow: 1px 2px 6px 0px rgba(0, 0, 0, 0.03);
    box-shadow: 1px 2px 6px 0px rgba(0, 0, 0, 0.03);

    &:after {
      bottom: calc(100% - 1px);
      left: 23px;
      border: solid transparent;
      content: '';
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-bottom-color: rgb(243, 243, 243);
      border-width: 7px;
      margin-left: -7px;
    }
  }

  .upsidedown {
    &:after {
      transform: rotate(180deg);
      bottom: auto;
      top: calc(100% - 1px);
    }
  }
}
</style>