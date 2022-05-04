<template>
  <main class="wrapper cursiveBig">
    <section class="slide1">
      <article class="sectionContent slide-in from-left">
        <h2 class="customh2">Welcome to</h2>
        <h1 class="customh1">
          <span class="Minerva">MINERVA <br /></span> A new era of wine.
        </h1>
        <InputsNewsletterSubscribe />
      </article>
      <img
        src="~static/images/wine_bottle_filled.png"
        alt="Wine Bottle"
        class="bottle"
      />
      <img src="~static/images/globe.png" alt="Globe" class="globe" />
    </section>
    <section class="slide2">
      <article class="sectionContent">
        <h2 class="customh2 fade-in">About</h2>
        <h1 class="customh1 fade-in">What Is Minerva?</h1>
        <div class="pwrapper">
          <p class="slide-in from-left">
            Minerva is an international community of individuals who are
            passionate about wine. We work with select producers from across the
            world who have unique stories to tell and whose dedication to the
            art of winemaking set them apart in the wine industry.
          </p>
          <p class="slide-in from-right">
            Minerva allows customers to buy en primeur wine directly from
            producers, with confirmation of sale stored safely on the
            blockchain. Our wines are carefully-selected for their quality and
            innovation, sourced directly from winemakers across the world.
          </p>
        </div>
        <div class="btnwrapper">
          <a href="https://docs.minerva.market/" target="_blank"
            ><button class="button slide-in from-left">MORE INFO</button></a
          >
          <a href="mailto:contact@minerva.market"
            ><button
              class="buttonLight slide-in from-right"
              title="Send us a Mail"
            >
              CONTACT US
            </button></a
          >
        </div>
      </article>
      <img
        src="~static/images/wine_barrels.png"
        alt="Wine Barrels"
        class="barrels"
      />
    </section>
    <section class="slide3">
      <article class="sectionContent slide-in from-right">
        <h2 class="customh2">Curated</h2>
        <h1 class="customh1">Quality Wines</h1>
        <p>
          Minerva’s team of wine investors, sommeliers, and producers understand
          that this is a time of change for the industry. Our team also
          recognises that wine is meant to be enjoyed, and that the
          international wine market is shifting.
          <br /><br />Minerva has established links directly with winemakers in
          France, the US, Australia, South Africa, Argentina, Chile, and beyond.
          This ensures that Minerva customers will have access to exciting and
          impactful wines, delivered directly to their door. All of our bottles
          are stored and cared for within strict standards specified by the
          producers themselves, ensuring that wines retain their character and
          value as intended.
        </p>
        <NuxtLink to="/wine"
          ><button class="button">FIND YOUR WINE</button></NuxtLink
        >
      </article>
      <img src="~static/images/globe.png" alt="Globe" class="globe" />
    </section>
    <section class="slide4">
      <article class="sectionContent slide-in from-left">
        <h2 class="customh2">Welcome to</h2>
        <h1 class="customh1">Minerva Club</h1>
        <p>
          Minerva wines are sold on the blockchain, meaning that the receipt of
          sale is clear, permanent and indisputable. We also use this receipt as
          a key to the ‘Minerva Club’, where Minerva wine owners have access to
          exclusive interviews, comment pieces, investment advice, wine tasting
          notes and more. <br /><br />
          Within Minerva Club, each producer will have their own space to talk
          directly with the individuals who have purchased their wine. This
          unique two-way dynamic means that producers will be able to know and
          understand their customers better than ever. As a result, they will be
          able to offer their customers priority access to new vintages,
          real-world experiences and other exclusive materials for the
          privilege.
        </p>
        <NuxtLink to="/club"
          ><button class="button">EXPLORE THE CLUB</button></NuxtLink
        >
      </article>
      <div class="imgwrapper slide-in from-right">
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
        <h2 class="customh2 fade-in">Learn</h2>
        <h1 class="customh1 fade-in">How It Works</h1>
        <div class="guideWrapper fade-in">
          <CollapsibleGuide
            iteration="Stage 01"
            header="Select your wine."
            main-text="Browse through the selection of fine wine listed. Once you have selected your wine of choice, you will be able to purchase using your blockchain wallet. The Minerva community funds new vintages and bespoke wines, with discounts offered for the early stage of purchase. Be sure to note the delivery guidance and take note of the producer’s delivery date."
            :first="true"
          />
        </div>
        <div class="guideWrapper fade-in">
          <CollapsibleGuide
            iteration="Stage 02"
            header="View your wine online."
            main-text="Once you have purchased your wine you will be able to see it on ‘My Wines’. Each purchase is accompanied by a unique piece of artwork which are in themselves a desirable asset. At this point, you will be able to access exclusive material in ‘Minerva Club’; this includes a space where you can discuss with the producer directly. "
          />
        </div>
        <div class="guideWrapper fade-in">
          <CollapsibleGuide
            iteration="Stage 03"
            header="Wait & appreciate."
            main-text="Minerva sells wine as it enters production, meaning that customers can see their bottle progress from the vine onwards. As your wine matures, you can enjoy Minerva Club material, display your wine and artwork proudly in a number of different ways online, and enjoy access to additional yield opportunities through your purchase."
            secondary-text="If you desire, you would also be able to sell your blockchain receipt online. This passes ownership of the wine to other individuals. In that regard, your NFT receipt can be viewed as a tradable asset."
          />
        </div>
        <div class="guideWrapper fade-in">
          <CollapsibleGuide
            iteration="Stage 04"
            header="Receive your wine."
            main-text="Once your wine has matured in production, the winemaker will deliver directly to all addresses holding the NFT receipt at the specified delivery time. There will still be a record of your purchase and you will retain the unique artwork in your blockchain wallet. "
            secondary-text="After delivery, all unclaimed yield earned during this time period will be ready to be withdrawn or to lead to greater discounts on your next Minerva purchase."
          />
        </div>
        <div class="scrollToTop" @click="scrollToTop()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            class="noselect"
          >
            <path d="M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z" />
          </svg>
          <span class="text noselect">BACK TO TOP</span>
        </div>
      </article>
      <img
        src="~static/images/wine_bottle.png"
        alt="Wine Bottle"
        class="bottle"
      />
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HomepageMain',
  layout: 'subTrans',
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Purchase 'en primeur' wine sourced directly from producers with confirmation of sale stored safely on the blockchain, accompanied by a unique artwork for each sale phase, while earning yield on it until delivery. Winemakers from across the world are hand-picked by our community for their unique narrative, quality, and innovation.",
        },
      ],
    };
  },
  mounted() {
    this.addScrollAnim();
  },
  beforeMount() {
    const vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  },
  methods: {
    addScrollAnim() {
      const faders = this.$el.querySelectorAll('.fade-in');
      const sliders = this.$el.querySelectorAll('.slide-in');

      const appearOptions = {
        threshold: 0,
        rootMargin: '0px 0px -120px 0px',
      };

      const appearOnScroll = new IntersectionObserver(function (
        entries,
        appearOnScroll
      ) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
          }
        });
      },
      appearOptions);

      faders.forEach((fader) => {
        appearOnScroll.observe(fader);
      });

      sliders.forEach((slider) => {
        appearOnScroll.observe(slider);
      });
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  color: $bright-font;
  background-color: $main;
  overflow-x: hidden;
  position: relative;

  @media screen and (min-width: $third-incr) {
    top: -110px;
  }
}

p {
  margin-top: 10px;
  margin-bottom: 22px;
  line-height: 33.5px;
  font-size: max(1.375rem, 16px);
  // text-align: justify !important;

  @media screen and (max-width: 880px) {
    text-align: initial !important;
  }
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

@media screen and (max-width: $second-incr) {
  .from-left,
  .from-right {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

.webp .slide1 {
  background-image: url('~static/images/vines_cropped.webp'); /* fallback */
  background-image: linear-gradient(
      146.28deg,
      rgba(68, 68, 68, 0.507) -28.96%,
      rgba(196, 196, 196, 0) 121.82%
    ),
    linear-gradient(
      85deg,
      rgba(68, 68, 68, 0.514) -28.96%,
      rgba(196, 196, 196, 0) 61.82%
    ),
    linear-gradient(
      180deg,
      rgba(59, 59, 59, 0.829) 0%,
      rgba(255, 255, 255, 0) 10%
    ),
    url('~static/images/vines_cropped.webp'); /* Rectangle 32 */

  @media screen and (max-width: 1050px) {
    background-image: linear-gradient(
        146.28deg,
        rgba(68, 68, 68, 0.507) -28.96%,
        rgba(196, 196, 196, 0) 121.82%
      ),
      linear-gradient(
        55deg,
        rgba(68, 68, 68, 0.712) -28.96%,
        rgba(196, 196, 196, 0) 71.82%
      ),
      linear-gradient(
        180deg,
        rgba(59, 59, 59, 0.829) 0%,
        rgba(255, 255, 255, 0) 10%
      ),
      url('~static/images/vines_cropped.webp');
  }

  @media screen and (max-width: $second-incr) {
    background-image: linear-gradient(
        146.28deg,
        rgba(68, 68, 68, 0.507) -28.96%,
        rgba(196, 196, 196, 0) 121.82%
      ),
      linear-gradient(
        55deg,
        rgba(34, 34, 34, 0.712) -28.96%,
        rgba(196, 196, 196, 0) 71.82%
      ),
      linear-gradient(
        180deg,
        rgba(59, 59, 59, 0.829) 0%,
        rgba(255, 255, 255, 0) 10%
      ),
      url('~static/images/vines_cropped.webp');
  }
}

.no-webp .slide1 {
  background-image: url('~static/images/vines_cropped.jpg'); /* fallback */
  background-image: linear-gradient(
      166.28deg,
      rgba(68, 68, 68, 0.507) -28.96%,
      rgba(196, 196, 196, 0) 121.82%
    ),
    linear-gradient(
      85deg,
      rgba(68, 68, 68, 0.507) -28.96%,
      rgba(196, 196, 196, 0) 61.82%
    ),
    linear-gradient(
      180deg,
      rgba(59, 59, 59, 0.829) 0%,
      rgba(255, 255, 255, 0) 10%
    ),
    url('~static/images/vines_cropped.jpg'); /* Rectangle 32 */

  @media screen and (max-width: 1050px) {
    background-image: linear-gradient(
        166.28deg,
        rgba(68, 68, 68, 0.507) -28.96%,
        rgba(196, 196, 196, 0) 121.82%
      ),
      linear-gradient(
        55deg,
        rgba(68, 68, 68, 0.712) -28.96%,
        rgba(196, 196, 196, 0) 71.82%
      ),
      linear-gradient(
        180deg,
        rgba(59, 59, 59, 0.829) 0%,
        rgba(255, 255, 255, 0) 10%
      ),
      url('~static/images/vines_cropped.jpg');
  }

  @media screen and (max-width: $second-incr) {
    background-image: linear-gradient(
        166.28deg,
        rgba(68, 68, 68, 0.507) -28.96%,
        rgba(196, 196, 196, 0) 121.82%
      ),
      linear-gradient(
        55deg,
        rgba(34, 34, 34, 0.712) -28.96%,
        rgba(196, 196, 196, 0) 71.82%
      ),
      linear-gradient(
        180deg,
        rgba(59, 59, 59, 0.829) 0%,
        rgba(255, 255, 255, 0) 10%
      ),
      url('~static/images/vines_cropped.jpg');
  }
}

.slide1 {
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  // height: calc(100vh - #{$header-height});
  height: 100vh;
  max-height: 2000px;
  min-height: calc(22vw + 353px - #{$header-height});
  position: relative;
  z-index: 2;
  overflow: hidden;

  @media screen and (max-width: 1140px) {
    min-height: max(45vw, 420px);
  }

  @media screen and (max-height: 855px) {
    height: calc(100vh - 93px);
  }

  @media screen and (max-width: $third-incr) {
    min-height: 450px;
    height: calc(var(--vh) - 93px);
    background-color: $main-darker;
    background-image: none !important;

    @media screen and (min-height: 855px) and (min-width: $fifth-incr) {
      height: calc(var(--vh) - 110px);
    }

    @media screen and (min-height: 955px) and (min-width: $fifth-incr) and (max-width: $fourth-incr) {
      height: 670px;
    }

    @media screen and (min-height: 902px) and (max-width: $fifth-incr) {
      height: 670px;
    }
  }

  @media screen and (max-width: $fifth-incr) {
    min-height: 500px;
  }

  .globe {
    display: none;
    z-index: -1;

    @media screen and (max-width: $third-incr) {
      display: block;
      position: absolute;
      bottom: 30px;
      right: -90px;
      width: 400px;
      -webkit-transform: scale(-1);
      -ms-transform: scale(-1);
      transform: scaleX(-1);

      @media screen and (max-height: 780px) and (min-width: $fourth-incr) {
        top: 45px;
        bottom: auto;
      }
    }

    @media screen and (max-width: $fourth-incr) {
      width: 350px;

      @media screen and (max-height: 700px) and (min-width: $fifth-incr) {
        top: 40px;
        bottom: auto;
      }
    }

    @media screen and (max-width: $fifth-incr) {
      width: 310px;
    }

    @media screen and (max-width: 390px) {
      bottom: -20px;
    }

    @media screen and (max-width: 330px) {
    }
  }

  .bottle {
    display: none;
    z-index: 0;

    @media screen and (max-width: $third-incr) {
      display: block;
      position: absolute;
      bottom: -60px;
      right: -50px;
      -webkit-transform: rotate(-5deg) scale(-1);
      -ms-transform: rotate(-5deg) scale(-1);
      transform: rotate(-5deg) scaleX(-1);
      width: 450px;

      @media screen and (max-height: 780px) and (min-width: $fourth-incr) {
        top: 40px;
        bottom: auto;
      }
    }

    @media screen and (max-width: $fourth-incr) {
      width: 400px;

      @media screen and (max-height: 700px) and (min-width: $fifth-incr) {
        top: 35px;
        bottom: auto;
      }
    }

    @media screen and (max-width: $fifth-incr) {
      width: 350px;
    }

    @media screen and (max-width: 390px) {
      right: -90px;
      bottom: -100px;
    }

    @media screen and (max-width: 330px) {
      width: 330px;
    }
  }

  h1 {
    margin-bottom: 34px;
    font-size: 8.7em;

    @media screen and (max-height: 950px) and (max-width: 1500px) {
      font-size: 7.8em;
    }

    @media screen and (max-width: 1140px) {
      font-size: 7em;
    }

    @media screen and (max-width: $fifth-incr) {
      margin-bottom: 20px;
    }

    @media screen and (max-width: 370px) {
      font-family: $secondary-big-font;
    }

    @media screen and (max-width: 320px) {
      font-size: 3.1em !important;
    }

    .Minerva {
      color: inherit;
      letter-spacing: 0.05em;
      display: none;
      font-family: $secondary-big-font;

      @media screen and (max-width: 370px) {
        display: block;
      }
    }
  }

  h2 {
    font-size: 7em;

    @media screen and (max-height: 950px) and (max-width: 1500px) {
      font-size: 6.4em;
    }

    @media screen and (max-width: 370px) {
      font-size: 3.5em !important;
    }
  }

  .sectionContent {
    position: absolute;
    left: 10%;
    bottom: 11vw;
    padding-right: 10%;
    z-index: 1;

    @media screen and (max-width: $second-incr) {
      bottom: 15vw;
    }

    @media screen and (max-height: 730px) and (min-width: 1050px) {
      bottom: 8vw;
      left: 12%;
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

    @media screen and (max-width: $third-incr) {
      -webkit-transform: scale(-1);
      -ms-transform: scale(-1);
      transform: scaleX(-1);
      right: 35vw;
      left: auto;
      top: auto;
      bottom: -100px;
    }

    @media screen and (max-width: $fifth-incr) {
      width: 800px;
      bottom: -50px;
    }
  }

  h2 {
    margin-bottom: 0px;
  }

  .sectionContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 1080px;

    @media screen and (max-width: $second-incr) {
      height: auto;
      padding: 190px 0 180px 0;
    }

    @media screen and (max-width: $fourth-incr) {
      height: auto;
      padding: 130px 0 120px 0;
    }

    .pwrapper {
      margin-top: 30px;
      max-width: min(77vw, 1200px);
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

      @media screen and (max-width: $fifth-incr) {
        margin-top: 0px;
      }

      p {
        text-align: initial !important;
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
        margin-top: 10px;
        flex-direction: row;
        margin-bottom: 0px;

        & :first-child {
          margin-right: 10px;
        }
      }

      @media screen and (max-width: 370px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100px;

        & :first-child {
          margin-right: 0;
          margin-bottom: 10px;
        }
      }
    }
  }
}

.webp .slide3 {
  background-image: url('~static/images/white_wine.webp');

  @media screen and (max-width: 1100px) {
    background-image: url('~static/images/white_wine_small.webp');
  }
}

.no-webp .slide3 {
  background-image: url('~static/images/white_wine.jpg');

  @media screen and (max-width: 1100px) {
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
  overflow: hidden;

  @media screen and (max-width: 1100px) {
    min-height: 0;
    height: auto;
    padding: 190px 0 190px 0;
    background-position: bottom right;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: $third-incr) {
    background-image: none !important;
    background-color: $main-darker;
  }

  @media screen and (max-width: $fourth-incr) {
    padding: 130px 0 130px 0;
  }

  .globe {
    position: absolute;
    right: -50px;
    top: 120px;
    display: none;
    z-index: 0;

    @media screen and (max-width: $third-incr) {
      display: block;
    }

    @media screen and (max-width: $fourth-incr) {
      right: -100px;
      top: auto;
      bottom: -150px;
    }

    @media screen and (max-width: $fifth-incr) {
      width: 300px;
      bottom: -80px;
    }
  }

  .sectionContent {
    position: absolute;
    right: 7%;
    bottom: 12%;
    z-index: 1;

    @media screen and (max-width: 1100px) {
      width: 80vw;
      text-align: left;
      position: relative;
      right: auto;
      bottom: auto;
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

      @media screen and (max-width: $fifth-incr) {
        margin-top: 9px;
      }
    }
  }
}

.slide4 {
  position: relative;
  height: 100vh;
  min-height: 1240px;
  overflow: hidden;

  @media screen and (max-width: 1500px) {
    min-height: 0;
    height: auto;
    padding: 190px 0 0px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: $second-incr) {
    padding: 190px 0 190px 0;
  }

  @media screen and (max-width: $fourth-incr) {
    padding: 130px 0 130px 0;
  }

  .sectionContent {
    position: absolute;
    left: 8%;
    top: 30%;

    @media screen and (max-width: 1500px) {
      margin-top: 0;
      width: 80vw;
      top: auto;
      position: relative;
      left: auto;
    }

    @media screen and (max-width: $second-incr) {
    }

    p {
      max-width: 700px;
      text-align: left;
      margin-top: 30px;

      @media screen and (max-width: $fifth-incr) {
        margin-top: 15px;
      }
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
    max-width: 760px;
    max-height: 823px;

    @media screen and (max-width: 1500px) {
      display: none;
    }

    .backimg {
      position: absolute;
      top: 0;
      right: 0;
      width: 80%;

      @media screen and (max-width: 1700px) {
        width: 70%;
        top: 100px;
      }
    }

    .frontimg {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 65%;

      @media screen and (max-width: 1700px) {
        left: 90px;
        width: 55%;
      }
    }
  }

  .barrels {
    position: absolute;
    top: calc(50% - 10vw - 100px);
    right: calc(5% + 50px);
    width: 45%;
    min-width: 500px;

    @media screen and (max-width: 1700px) {
      right: 2%;
    }

    @media screen and (max-width: 1500px) {
      width: 70%;
      right: -150px;
      top: 100px;
      min-width: 800px;
    }

    @media screen and (max-width: 712px) {
      min-width: 600px;
    }

    @media screen and (max-width: 530px) {
      right: -230px;
      top: 50px;
    }
  }
}

.slide5 {
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  position: relative;
  width: 100%;

  h1 {
    margin-bottom: 40px;
  }

  @media screen and (max-width: $second-incr) {
    padding: 190px 0 190px 0;
  }

  @media screen and (max-width: $fourth-incr) {
    padding: 130px 0 130px 0;
  }

  .sectionContent {
    width: 60%;
    padding-top: 290px;

    @media screen and (max-width: $first-incr) {
      width: 82%;
    }

    @media screen and (max-width: $second-incr) {
      padding-top: 0;
    }

    .scrollToTop {
      align-self: flex-start;
      max-width: 320px;
      z-index: 3;
      cursor: pointer;
      margin-top: 180px;
      margin-bottom: 120px;
      display: inline-flex;

      @media screen and (max-width: $second-incr) {
        margin-bottom: 0;
      }

      @media screen and (max-width: $third-incr) {
        margin-top: 120px;
      }

      svg {
        transform: rotate(-90deg);
        width: 3em;
      }

      .text {
        text-align: right;
        margin-top: 7px;
        max-width: 210px;
        padding-left: 2em;
        font-size: 1.5em;
        color: $bright-font;
        font-family: $secondary-big-font;
      }
    }
  }

  .bottle {
    position: absolute;
    top: 170px;
    left: 80px;
    width: 35%;
    min-width: 500px;
    max-width: 650px;

    @media screen and (max-width: $first-incr) {
      left: -110px;
      top: 230px;
    }

    @media screen and (max-width: $second-incr) {
      top: 30px;
    }

    @media screen and (max-width: $third-incr) {
      min-width: 0;
      left: -140px;
      width: 90vw;
      max-width: 500px;
    }

    @media screen and (max-width: $fourth-incr) {
      transform: rotate(-15deg);
      top: 70px;
      left: -150px;
    }
  }
}
</style>
