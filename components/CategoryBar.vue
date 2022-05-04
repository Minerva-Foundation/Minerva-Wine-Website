<template>
  <div class="wrapper">
    <span class="catName" :title="cat.desciption">{{ cat.name }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    cat: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ebebeb;
  background-color: #f7f7f7;
  padding: 2px 7px 2px 7px;
  box-sizing: border-box;
  border-radius: 1px;

  .catName {
    color: #777;
    font-size: max(0.8em, 10px);
  }
}
</style>