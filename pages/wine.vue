<template>
  <div class="wrapper">
    <picture>
      <source srcset="~static/images/wine.webp" />
      <img src="~static/images/wine.png" alt="Wine Store page" />
    </picture>
    <div class="spanWrapper">
      <span class="cs">COMING SOON</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
  position: relative;

  .spanWrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    .cs {
      margin-top: 40vh;
      font-size: 10vw;
      color: $main;
    }
  }
}
picture {
  * {
    width: 100%;
    height: 100%;
    margin-top: -5px;
    filter: blur(8px);
    transform: scale(1.01);
  }
}
</style>