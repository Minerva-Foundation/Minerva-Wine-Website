<template>
  <div class="app">
    <DefaultHeader class="header" />
    <Nuxt class="main" />
    <DefaultFooter />
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;

  @media screen and (max-width: 370px), screen and (max-height: 760px) {
    position: relative;
  }
}
.main {
  z-index: 1;
  margin-bottom: calc(#{$footer-height} - 1px);
  background-color: white;
}
</style>