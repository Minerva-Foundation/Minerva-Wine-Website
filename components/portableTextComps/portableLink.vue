<template>
  <a target="_blank" class="text" :href="$attrs.href"><slot /></a>
</template>

<style lang="scss" scoped>
a {
  color: $secondary;
  text-decoration: underline;
}
</style>