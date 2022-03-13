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
  width: 100vw;
}
.main {
  z-index: 1;
  margin-bottom: 200px;
  background-color: white;
}
</style>