<template>
  <div class="wrapperNewsletter">
    <input
      v-model="currentEmail"
      type="text"
      class="mail"
      placeholder="Email"
    />
    <button class="button">receive updates</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'NewsletterSubscribe',
  data: () => ({
    currentEmail: '',
  }),
});
</script>

<style lang="scss" scoped>
.wrapperNewsletter {
  height: $btn-height;
  background-color: transparent;
  display: flex;
  width: 70%;
  min-width: 500px;

  @media screen and (max-height: 950px) {
    height: calc(#{$btn-height} - 5px);
  }

  @media screen and (max-height: 900px) and (min-width: $third-incr) {
    height: calc(#{$btn-height} - 8px);
    width: 75%;
  }

  @media screen and (max-width: $third-incr) {
    width: 79vw;
    min-width: 0;
  }

  @media screen and (max-width: $fourth-incr) {
    height: calc(#{$btn-height} - 14px) !important;
  }

  .mail {
    border-bottom-left-radius: 7px;
    border-top-left-radius: 7px;
    width: 75%;
    border: none;
    padding: 15px 20px 15px 20px;
    background-color: rgb(230, 230, 230);
    font-size: 1.2em;
    color: #333;
    caret-color: $main;
    letter-spacing: 0.05em;

    &:focus {
      outline: none;
      -webkit-box-shadow: inset 0px 0px 0px 2px $secondary;
      -moz-box-shadow: inset 0px 0px 0px 2px $secondary;
      box-shadow: inset 0px 0px 0px 2px $secondary;
    }

    &::placeholder {
      color: #777;
    }
  }

  .button {
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    width: 25%;
    min-width: 14em;
    height: 100%;
    font-size: max(1rem, 12px);
    text-transform: uppercase;

    @media screen and (max-width: $fifth-incr) {
      min-width: 100px !important;
    }
  }
}
</style>