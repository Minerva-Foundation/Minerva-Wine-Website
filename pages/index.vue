<template>
  <main class="wrapper cursiveBig">
    <section class="slide1">
      <article class="sectionContent">
        <h2 class="customh2">Welcome to</h2>
        <h1 class="customh1">A new era of wine.</h1>
        <p class="intro">
          Minerva is an international community who are passionate about wine.
          We work with select producers from across the world who have unique
          stories to tell and whose dedication to the art of winemaking set them
          apart in the wine industry.
        </p>
        <InputsConnectWallet />
      </article>
    </section>
    <section class="slide2">
      <article class="sectionContent">
        <h2 class="customh2">About</h2>
        <h1 class="customh1">What Is Minerva?</h1>
        <div class="pwrapper">
          <p>
            Minerva is an international community who are passionate about wine.
            We work with select producers from across the world who have unique
            stories to tell and whose dedication to the art of winemaking set
            them apart in the wine industry.
          </p>
          <p>
            Minerva allows customers to buy wine directly from producers, with
            confirmation of sale stored safely on the blockchain. Our wines are
            carefully-selected for their quality and innovation, sourced
            directly from winemakers across the world.
          </p>
        </div>
        <div class="btnwrapper">
          <button class="button">MORE INFO</button>
          <button class="buttonLight">CONTACT US</button>
        </div>
      </article>
      <img
        src="~static/images/wine_barrels.png"
        alt="Wine Barrels"
        class="barrels"
      />
    </section>
    <section class="slide3">
      <article class="sectionContent">
        <h2 class="customh2">Curated</h2>
        <h1 class="customh1">Quality Wines</h1>
        <p>
          Minerva’s team of wine investors, sommeliers, and producers understand
          that this is a time of change for the industry. The importance of
          legacy, reputation, and quality are indisputable, and we reflect this
          with selections of fine wines from the popular Bordeaux, Burgundy, and
          Champagne regions. These well-established markets are known for making
          wines that accrue in value and Minerva will offer unique access
          directly to these producers.
        </p>
        <button class="button">FIND YOUR WINE</button>
      </article>
    </section>
    <section class="slide4">
      <article class="sectionContent">
        <h2 class="customh2">Welcome to</h2>
        <h1 class="customh1">Minerva Club</h1>
        <p>
          Minerva wines are sold on the blockchain, meaning that the receipt of
          sale is clear, permanent and indisputable. We also use this receipt as
          a key to the ‘Minerva Club’, where Minerva wine owners have access to
          exclusive interviews, comment pieces, investment advice, wine tasting
          notes and more. <br />
          Within Minerva Club, each producer will have their own space to talk
          directly with the individuals who have purchased their wine. This
          unique two-way dynamic means that producers will be able to know and
          understand their customers better than ever. As a result, they will be
          able to offer their customers priority access to new vintages,
          real-world experiences and other exclusive materials for the
          privilege.
        </p>
        <button class="button">FIND YOUR WINE</button>
      </article>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  color: $bright-font;
  background-color: $main;
}

p {
  margin-top: 10px;
  margin-bottom: 22px;
  line-height: 33.5px;
  font-size: 1.375rem;
}

.sectionContent {
  color: $bright-font;
}

.slide1 {
  background-image: url('~static/images/vines_cropped.jpg'); /* fallback */
  background-image: linear-gradient(
      78.98deg,
      rgba(0, 0, 0, 0.5) 0.33%,
      rgba(196, 196, 196, 0) 88.83%
    ),
    url('~static/images/vines_cropped.jpg');
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(100vh - #{$header-height});
  max-height: 2000px;
  position: relative;
  z-index: 2;

  .intro {
    width: 600px;
  }

  .sectionContent {
    position: absolute;
    left: 10%;
    bottom: 30%;
  }
}

.slide2 {
  position: relative;
  overflow: hidden;

  .pwrapper {
    color: $bright-font;
    display: flex;
  }

  .barrels {
    position: absolute;
    display: block;
    top: -160px;
    left: 35vw;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 0;
  }

  h2 {
    margin-bottom: 0px;
  }

  .sectionContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 900px;

    & * {
      z-index: 1;
    }

    .pwrapper {
      margin-top: 30px;
      max-width: min(70vw, 1200px);
      display: flex;
      justify-content: space-between;

      & * {
        width: 45%;
      }
    }

    .btnwrapper {
      margin-top: 30px;
      & button {
        width: 198px;
      }
      & :first-child {
        margin-right: 20px;
      }
    }
  }
}

.slide3 {
  background-image: url('~static/images/white_wine.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center left;
  height: calc(100vh - 100px);
  position: relative;
  max-height: 2000px;

  .sectionContent {
    position: absolute;
    right: 5%;
    bottom: 12%;

    h1 {
      margin-bottom: 40px;
    }

    button {
      margin-top: 10px;
    }

    p {
      margin-right: 0px;
      display: block;
      max-width: 600px;
    }
  }
}

.slide4 {
  position: relative;

  .sectionContent {
    margin-left: 10%;
    margin-top: 306px;
    padding-bottom: 200px;

    p {
      max-width: 900px;
    }
  }
}
</style>