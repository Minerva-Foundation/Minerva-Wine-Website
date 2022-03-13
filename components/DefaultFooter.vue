<template>
  <footer>
    <div class="logo">
      <img src="~static/images/torch.svg" alt="Homepage" class="torch" />
      <img
        src="~static/images/minervaText.svg"
        alt="Homepage"
        class="logoText"
      />
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss" scoped>
footer {
  height: 300px;
  width: 100%;
  background-color: $main-darker;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: -1;

  .logo {
    position: absolute;
    width: 200px;
    height: 125px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    flex-grow: 0;
    flex: 0;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .torch {
      width: 20px;
    }

    .logoText {
      width: 200px;
    }
  }
}
</style>