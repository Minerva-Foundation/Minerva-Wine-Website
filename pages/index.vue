<template>
  <main class="wrapper cursiveBig">
    <section class="slide1">
      <article class="sectionContent">
        <h2 class="customh2">Welcome to</h2>
        <h1 class="customh1">A new era of wine.</h1>
        <h3 class="customh3">Exciting Wines Directly from the Vineyard</h3>
        <InputsConnectWallet />
      </article>
    </section>
    <section class="slide2">
      <article class="sectionContent">
        <h2 class="customh2">About</h2>
        <h1 class="customh1">What Is Minerva?</h1>
        <div class="pwrapper">
          <p>
            Minerva is an international community of individuals who are
            passionate about wine. We work with select producers from across the
            world who have unique stories to tell and whose dedication to the
            art of winemaking set them apart in the wine industry.
          </p>
          <p>
            Minerva allows customers to buy en primeur wine directly from
            producers, with confirmation of sale stored safely on the
            blockchain. Our wines are carefully-selected for their quality and
            innovation, sourced directly from winemakers across the world.
          </p>
        </div>
        <div class="btnwrapper">
          <a href="https://docs.minerva.market/" target="_blank"
            ><button class="button">MORE INFO</button></a
          >
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
          that this is a <span class="highlight">time of change</span> for the
          industry. Our team also recognises that wine is meant to be enjoyed,
          and that the international wine market is shifting.
          <br /><br />Minerva has established links directly with winemakers in
          France, the US, Australia, South Africa, Argentina, Chile, and beyond.
          This ensures that Minerva customers will have access to
          <span class="highlight">exciting and impactful wines</span>, delivered
          directly to their door. All of our bottles are stored and cared for
          within strict standards specified by the producers themselves,
          ensuring that wines retain their character and value as intended.
        </p>
        <NuxtLink to="/wine"
          ><button class="button">FIND YOUR WINE</button></NuxtLink
        >
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
          <span class="highlight"
            >exclusive interviews, comment pieces, investment advice, wine
            tasting notes and more</span
          >. <br /><br />
          Within Minerva Club, each producer will have their own space to
          <span class="highlight">talk directly</span> with the individuals who
          have purchased their wine. This unique two-way dynamic means that
          producers will be able to know and understand their customers better
          than ever. As a result, they will be able to offer their customers
          <span class="highlight"
            >priority access to new vintages, real-world experiences and other
            exclusive materials</span
          >
          for the privilege.
        </p>
        <NuxtLink to="/club"
          ><button class="button">EXPLORE THE CLUB</button></NuxtLink
        >
      </article>
      <div class="imgwrapper">
        <img
          src="~static/images/wine_shelf.webp"
          alt="Wine shelf"
          class="backimg"
        />
        <img
          src="~static/images/wine_clink.webp"
          alt="Wine glasses clinking"
          class="frontimg"
        />
      </div>
      <img
        src="~static/images/wine_barrels.png"
        alt="Wine Barrels"
        class="barrels"
      />
    </section>
    <section class="slide5">
      <article class="sectionContent">
        <h2 class="customh2">Learn</h2>
        <h1 class="customh1">How It Works</h1>
        <CollapsibleGuide
          iteration="Stage 01"
          header="Select your wine."
          main-text="Browse through the selection of fine wine listed. Once you have selected your wine of choice, you will be able to purchase using your blockchain wallet. The Minerva community funds new vintages and bespoke wines, with discounts offered for the early stage of purchase. Be sure to note the delivery guidance and take note of the producer’s delivery date."
          :first="true"
        />
        <CollapsibleGuide
          iteration="Stage 02"
          header="View your wine online."
          main-text="Once you have purchased your wine you will be able to see it on ‘My Wines’. Each purchase is accompanied by a unique piece of artwork which are in themselves a desirable asset. At this point, you will be able to access exclusive material in ‘Minerva Club’; this includes a space where you can discuss with the producer directly. "
        />
        <CollapsibleGuide
          iteration="Stage 03"
          header="Wait & appreciate."
          main-text="Minerva sells wine as it enters production, meaning that customers can see their bottle progress from the vine onwards. As your wine matures, you can enjoy Minerva Club material, display your wine and artwork proudly in a number of different ways online, and enjoy access to additional yield opportunities through your purchase."
          secondary-text="If you desire, you would also be able to sell your blockchain receipt online. This passes ownership of the wine to other individuals. In that regard, your NFT receipt can be viewed as a tradable asset."
        />
        <CollapsibleGuide
          iteration="Stage 04"
          header="Receive your wine."
          main-text="Once your wine has matured in production, the winemaker will deliver directly to all addresses holding the NFT receipt at the specified delivery time. There will still be a record of your purchase and you will retain the unique artwork in your blockchain wallet. "
          secondary-text="After delivery, all unclaimed yield earned during this time period will be ready to be withdrawn or to lead to greater discounts on your next Minerva purchase."
        />
      </article>
      <img
        src="~static/images/wine_barrels.png"
        alt="Wine Barrels"
        class="barrels"
      />
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

.highlight {
  color: $bright-font;
  font-size: 1.1em;
  font-weight: 700;
}

.sectionContent {
  color: $bright-font;

  * {
    z-index: 1;
  }
}

.barrels {
  z-index: 0;
}

.webp .slide1 {
  background-image: url('~static/images/vines_cropped.webp'); /* fallback */
  background-image: linear-gradient(
      78.98deg,
      rgba(0, 0, 0, 0.5) 0.33%,
      rgba(196, 196, 196, 0.075) 88.83%
    ),
    url('~static/images/vines_cropped.webp');

  @media screen and (max-width: $third-incr) {
    background-image: linear-gradient(
        78.98deg,
        rgba(0, 0, 0, 0.5) 0.33%,
        rgba(180, 180, 180, 0.192) 120.83%
      ),
      url('~static/images/vines_cropped.webp');
  }
}

.no-webp .slide1 {
  background-image: url('~static/images/vines_cropped.jpg'); /* fallback */
  background-image: linear-gradient(
      78.98deg,
      rgba(0, 0, 0, 0.5) 0.33%,
      rgba(196, 196, 196, 0) 88.83%
    ),
    url('~static/images/vines_cropped.jpg');

  @media screen and (max-width: $third-incr) {
    background-image: linear-gradient(
        78.98deg,
        rgba(0, 0, 0, 0.5) 0.33%,
        rgba(180, 180, 180, 0.192) 120.83%
      ),
      url('~static/images/vines_cropped.jpg');
  }
}

.slide1 {
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(100vh - #{$header-height});
  max-height: 2000px;
  position: relative;
  z-index: 2;

  @media screen and (max-width: $third-incr) {
    height: 600px;
  }

  h1 {
    @media screen and (max-width: $sixth-incr) {
      line-height: 0.8em;
      margin-bottom: 10px;
    }
  }
  h3 {
    margin-bottom: 50px;
    font-family: Helvetica;
    font-size: 2em;

    @media screen and (max-width: $fifth-incr) {
      margin-bottom: 15px;
    }
  }

  .sectionContent {
    position: absolute;
    left: 10%;
    bottom: 30%;
    padding-right: 10%;

    @media screen and (max-width: $first-incr) {
      bottom: 10%;
    }
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
    height: 1000px;

    @media screen and (max-width: 900px) {
      height: 100vh;
      min-height: 1000px;
    }

    @media screen and (max-width: $fourth-incr) {
      height: 80vh;
      min-height: 900px;
    }

    @media screen and (max-width: $fifth-incr) {
      height: 65vh;
      min-height: 750px;
    }

    @media screen and (max-width: $sixth-incr) {
      align-items: flex-start;
      padding-left: 30px;
      height: 75vh;
      min-height: 800px;
    }

    .pwrapper {
      margin-top: 30px;
      max-width: min(70vw, 1200px);
      display: flex;
      justify-content: space-between;

      & * {
        width: 45%;
      }

      @media screen and (max-width: $second-incr) {
        flex-direction: column;
        max-width: 80vw;

        & * {
          width: 100%;
        }
      }
    }

    .btnwrapper {
      margin-top: 30px;
      margin-bottom: 30px;

      & :first-child {
        margin-right: 20px;
      }

      @media screen and (max-width: $fourth-incr) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 135px;

        & :first-child {
          margin-right: 0;
        }
      }

      @media screen and (max-width: $fifth-incr) {
        height: 100px;
      }
    }
  }
}

.webp .slide3 {
  background-image: url('~static/images/white_wine.webp');

  @media screen and (max-width: $second-incr) {
    background-image: url('~static/images/white_wine_small.webp');
  }
}

.no-webp .slide3 {
  background-image: url('~static/images/white_wine.jpg');

  @media screen and (max-width: $second-incr) {
    background-image: url('~static/images/white_wine_small.jpeg');
  }
}

.slide3 {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  height: 100vh;
  position: relative;
  max-height: 2000px;
  text-align: right;
  min-height: 1060px;

  @media screen and (max-width: $second-incr) {
    height: 95vh;
    background-position: bottom right;
    min-height: 900px;
  }

  @media screen and (max-width: $fourth-incr) {
    height: 80vh;
    min-height: 800px;
  }

  @media screen and (max-width: $fifth-incr) {
    height: 65vh;
    min-height: 700px;
  }

  @media screen and (max-width: 300px) {
    height: 65vh;
    min-height: 800px;
  }

  .sectionContent {
    position: absolute;
    right: 5%;
    bottom: 12%;

    @media screen and (max-width: $second-incr) {
      right: 0;
      left: 0;
      top: 30px;
      margin-left: auto;
      margin-right: auto;
      width: 80vw;
      height: 90%;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    button {
      margin-top: 30px;
      margin-right: 10px;

      @media screen and (max-width: $fifth-incr) {
        margin-top: 0px;
      }
    }

    p {
      margin-right: 0px;
      display: block;
      max-width: 700px;
      margin-top: 30px;
    }
  }
}

.slide4 {
  position: relative;
  height: 100vh;
  min-height: 1240px;
  overflow: hidden;

  @media screen and (max-width: $fourth-incr) {
    height: 80vh;
  }
  @media screen and (max-width: $fifth-incr) {
    height: 65vh;
    min-height: 850px;
  }

  @media screen and (max-width: $sixth-incr) {
    height: 870px;
  }

  .sectionContent {
    position: absolute;
    left: 10%;
    top: 30%;

    @media screen and (max-width: $second-incr) {
      width: 80vw;
      top: 20%;
    }

    @media screen and (max-width: $fifth-incr) {
      top: 14%;
    }

    p {
      max-width: 700px;
      text-align: left;
      margin-top: 30px;
    }

    .button {
      margin-top: 30px;

      @media screen and (max-width: $fifth-incr) {
        margin-top: 0px;
      }
    }
  }

  .imgwrapper {
    position: absolute;
    right: 5%;
    top: calc(50% - 10vw);
    width: 37vw;
    height: 40vw;
    z-index: 1;

    @media screen and (max-width: 1500px) {
      display: none;
    }

    .backimg {
      position: absolute;
      top: 0;
      right: 0;
      width: 80%;

      @media screen and (max-width: 1600px) {
        width: 70%;
        top: 100px;
      }
    }

    .frontimg {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 65%;

      @media screen and (max-width: 1600px) {
        left: 90px;
        width: 55%;
      }
    }
  }

  .barrels {
    position: absolute;
    top: 100px;
    right: 75px;
    width: 45%;
    min-width: 500px;

    @media screen and (max-width: 712px) {
      min-width: 0;
      width: 100vw;
      right: -30vw;
    }
  }
}

.slide5 {
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  position: relative;

  h1 {
    margin-bottom: 40px;
  }

  .sectionContent {
    width: 60%;
    padding-top: 300px;
    padding-bottom: 200px;

    @media screen and (max-width: $first-incr) {
      width: 82%;
    }

    @media screen and (max-width: $second-incr) {
      padding-top: 150px;
    }

    @media screen and (max-width: $fifth-incr) {
      padding-top: 50px;
    }
  }

  .barrels {
    position: absolute;
    top: -30px;
    left: 20px;
    width: 45%;
    min-width: 500px;

    @media screen and (max-width: $fourth-incr) {
      min-width: 0;
      left: -130px;
      width: 100vw;
    }
  }
}
</style>