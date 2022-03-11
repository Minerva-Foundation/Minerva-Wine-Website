<template>
  <nav class="mainNav">
    <NuxtLink class="homeMain" to="/">
      <div class="home">
        <img src="~static/images/torch.svg" alt="Homepage" class="torch" />
        <img
          src="~static/images/minervaText.svg"
          alt="Homepage"
          class="homeText"
        />
      </div>
    </NuxtLink>
    <ul class="mainLinks rosStretch">
      <li><NuxtLink to="/wine">Wine</NuxtLink></li>
      <li><NuxtLink to="/club">Club</NuxtLink></li>
      <li><NuxtLink to="/advanced">Advanced</NuxtLink></li>
    </ul>
    <div class="btnWrapper">
      <InputsConnectWallet />
    </div>
  </nav>
</template>

<script"ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DefaultHeader',
});
</script>

<style lang="scss" scoped>
.mainNav {
  height: $header-height;
  color: $bright-font;
  background-color: $main;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px 0px 40px;

  .home {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 220px;

    .homeText {
      height: 30px;
    }
  }

  .btnWrapper {
    width: 220px;
  }

  .mainLinks {
    height: 40px;
    display: flex;
    font-size: 1.2em;
    list-style: none;
    li a {
      color: $bright-font;
    }
  }

  .mainLinks *::after {
    content: '   ·   ';
    white-space: pre;
    color: $bright-font;
    font-size: 27px;
  }

  .mainLinks :last-child::after {
    content: '';
    white-space: pre;
    color: $bright-font;
    font-size: 30px;
  }
}
</style>