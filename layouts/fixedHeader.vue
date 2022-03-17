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

  @media screen and (max-width: 370px), screen and (max-height: 1000px) {
    position: relative;
  }
}
.main {
  z-index: 1;
  margin-bottom: 200px;
  background-color: white;
}
</style>