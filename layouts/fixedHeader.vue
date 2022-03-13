<template>
  <div class="app">
    <DefaultHeader class="header" />
    <Nuxt />
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: calc(100vw - 80px);
}
</style>