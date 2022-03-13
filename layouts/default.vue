<template>
  <div class="app">
    <DefaultHeader class="header" />
    <Nuxt class="main" />
    <DefaultFooter class="footer" />
  </div>
</template>

<style lang="scss" scoped>
.app {
  width: 100%;
}
.header {
  width: 100%;
}
.main {
  z-index: 1;
  margin-bottom: 200px;
}
</style>