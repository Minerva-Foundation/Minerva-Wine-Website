<template>
  <main class="wrapper cursiveBig">
    <section class="slide1">
      <article class="sectionContent">
        <h2>Welcome to</h2>
        <h1>A new era of wine.</h1>
        <p class="intro">
          Minerva is an international community who are passionate about wine.
          We work with select producers from across the world who have unique
          stories to tell and whose dedication to the art of winemaking set them
          apart in the wine industry.
        </p>
        <InputsConnectWallet />
      </article>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.intro {
  width: 600px;
}
.slide1 {
  background: $main;
  background-image: url('~static/images/vines_cropped.png'); /* fallback */
  background-image: linear-gradient(
      78.98deg,
      rgba(0, 0, 0, 0.5) 0.33%,
      rgba(196, 196, 196, 0) 88.83%
    ),
    url('~static/images/vines_cropped.png');
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(100vh - #{$header-height});
  position: relative;

  .sectionContent {
    position: absolute;
    left: 10vw;
    top: 30vh;
  }

  p {
    margin-top: 10px;
    margin-bottom: 22px;
    line-height: 33.5px;
  }
}
</style>