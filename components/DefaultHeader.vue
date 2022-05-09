<template>
  <header class="headerMain">
    <nav class="mainNav">
      <NuxtLink class="homeMain" to="/">
        <div class="home">
          <img src="~static/images/torch.svg" alt="Homepage" class="torch" />
          <div class="textWrapper">
            <img
              src="~static/images/minervaText.svg"
              alt="Homepage"
              class="homeText"
            />
            <span v-if="$nuxt.$route.path !== '/'" class="siteName">{{
              currentPath
            }}</span>
          </div>
        </div>
      </NuxtLink>
      <ul class="mainLinks default rosStretch">
        <li>
          <NuxtLink
            to="/"
            class="linkHover"
            :class="{ underline: $nuxt.$route.path === '/' }"
            >Home</NuxtLink
          >
        </li>
        <li class="ddCat">
          <a
            :class="{
              underline: currentPath === 'WINE',
            }"
            >Wine
            <div class="ddArrow"></div
          ></a>
          <div v-if="!linkJustClicked" class="subLinksWrapper">
            <ul class="subLinks" :class="{ subLinksTrans: transSublinks }">
              <li>
                <NuxtLink to="/wine" @click.native="linkClicked"
                  >Sales</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/wine/winemakers" @click.native="linkClicked"
                  >Winemakers</NuxtLink
                >
              </li>
            </ul>
          </div>
        </li>
        <li class="ddCat">
          <a
            :class="{
              underline: currentPath === 'CLUB',
            }"
            >Club
            <div class="ddArrow"></div
          ></a>
          <div v-if="!linkJustClicked" class="subLinksWrapper">
            <ul class="subLinks" :class="{ subLinksTrans: transSublinks }">
              <li>
                <NuxtLink to="/club" @click.native="linkClicked"
                  >Articles</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/club/myClub/myAssets" @click.native="linkClicked"
                  >My Club</NuxtLink
                >
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div class="btnWrapper">
        <InputsConnectWallet location="HEADER" />
      </div>
      <img
        src="~static/images/menu_finer.svg"
        alt="Open Mobile Menu"
        class="mobileMenuBtn"
        @click.stop="showMobileNav"
      />
    </nav>
    <div v-if="mobileMenuVis" class="overlayBlocker"></div>
    <nav
      v-click-outside="hideMobileNav"
      :class="{ vis: mobileMenuVis }"
      class="mobileNav"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        class="closeMobileMenuBtn"
        @click="hideMobileNav"
      >
        <path
          fill="#dddddd"
          d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
        ></path>
      </svg>
      <div class="btnWrapper">
        <InputsConnectWallet location="MOBILE" />
      </div>
      <ul class="mainLinks mobile rosStretch">
        <!-- <li @click="mobileMenuVis = false">
          <NuxtLink
            to="/"
            class="linkHover"
            :class="{ underline: $nuxt.$route.path === '/' }"
            >Home</NuxtLink
          >
        </li>
        <li @click="mobileMenuVis = false">
          <NuxtLink
            to="/wine"
            class="linkHover"
            :class="{ underline: currentPath === 'WINE' }"
            >Wine</NuxtLink
          >
        </li>
        <li @click="mobileMenuVis = false">
          <NuxtLink
            to="/club"
            class="linkHover"
            :class="{
              underline: currentPath === 'CLUB',
            }"
            >Club</NuxtLink
          >
        </li> -->
        <li @click="mobileMenuVis = false">
          <NuxtLink
            to="/"
            class="linkHover"
            :class="{ underline: $nuxt.$route.path === '/' }"
            @click.native="linkClicked"
            >Home</NuxtLink
          >
        </li>
        <li
          class="ddCat"
          @click="(e) => e.currentTarget.classList.toggle('subLinksWrapperVis')"
        >
          <a
            :class="{
              underline: currentPath === 'WINE',
            }"
            >Wine
            <div class="ddArrow"></div
          ></a>
          <div v-if="!linkJustClicked" class="subLinksWrapper">
            <ul class="subLinks">
              <li @click="mobileMenuVis = false">
                <NuxtLink to="/wine" @click.native="linkClicked"
                  >Sales</NuxtLink
                >
              </li>
              <li @click="mobileMenuVis = false">
                <NuxtLink to="/wine/winemakers" @click.native="linkClicked"
                  >Winemakers</NuxtLink
                >
              </li>
            </ul>
          </div>
        </li>
        <li
          class="ddCat"
          @click="(e) => e.currentTarget.classList.toggle('subLinksWrapperVis')"
        >
          <a
            :class="{
              underline: currentPath === 'CLUB',
            }"
            >Club
            <div class="ddArrow"></div
          ></a>
          <div v-if="!linkJustClicked" class="subLinksWrapper">
            <ul class="subLinks">
              <li @click="mobileMenuVis = false">
                <NuxtLink to="/club" @click.native="linkClicked"
                  >Articles</NuxtLink
                >
              </li>
              <li @click="mobileMenuVis = false">
                <NuxtLink to="/club/myClub/myAssets" @click.native="linkClicked"
                  >My Club</NuxtLink
                >
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DefaultHeader',
  props: {
    transSublinks: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    isTouch: false,
    mobileMenuVis: false,
    mobileConnectWalletVis: false,
    scrolled: false,
    linkJustClicked: false,
  }),
  computed: {
    currentPath() {
      const regexp = /\/(\w*)\//g;
      let arr: RegExpExecArray | null = regexp.exec(this.$nuxt.$route.path);

      if (arr) {
        return arr[1].toUpperCase();
      } else {
        const regexp = /\/(\w.*)/g;
        arr = regexp.exec(this.$nuxt.$route.path);
        if (arr && arr[1] !== '') {
          return arr[1].toUpperCase();
        } else {
          return 'HOME';
        }
      }
    },
  },
  beforeMount() {
    const vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  },
  methods: {
    hideMobileNav() {
      if (this.mobileMenuVis) {
        this.mobileMenuVis = false;
        document.documentElement.style.setProperty('--bodyScroll', `scroll`);
      }
    },
    showMobileNav() {
      if (!this.mobileMenuVis) {
        const vh = window.innerHeight;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        this.mobileMenuVis = true;
        document.documentElement.style.setProperty('--bodyScroll', `hidden`);
      }
    },
    linkClicked() {
      this.linkJustClicked = true;
      document.documentElement.style.setProperty('--bodyScroll', `scroll`);
      setTimeout(() => {
        this.linkJustClicked = false;
      }, 100);

      setTimeout(() => {
        const subMenus = this.$el.querySelectorAll('.ddCat');

        if (subMenus) {
          subMenus.forEach((e) => e.classList.remove('subLinksWrapperVis'));
        }
      }, 100);
    },
  },
});
</script>

<style lang="scss">
li {
  position: relative;

  .ddArrow {
    position: absolute;
    right: -16px;
    top: 11px;
    width: 5px;
    height: 5px;
    border-left: 2px solid white;
    border-bottom: 2px solid white;
    transform: rotate(-45deg);
    display: inline;
    transition-property: transform top;
    transition-duration: 0.1s;
    transition-timing-function: ease;
  }

  .underline {
    position: relative;

    &::before {
      content: '';
      background: $secondary;
      position: absolute;
      bottom: -4px;
      right: 0;
      left: 0;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
      height: 2px;
    }

    &.homeMain::before {
      content: none;
    }
  }

  a {
    letter-spacing: 0.05em;
  }
}

.headerMain {
  position: relative;
  z-index: 10;

  .mainNav {
    height: $header-height;
    color: $bright-font;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 40px 0px 40px;

    @media screen and (max-height: 855px), screen and (max-width: $fifth-incr) {
      height: 93px;
    }

    @media screen and (max-width: 295px) {
      justify-content: flex-start;
    }

    .home {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 220px;

      @media screen and (max-width: 370px) {
        justify-content: flex-start;
        align-items: flex-end;
      }

      @media screen and (max-width: 295px) {
        width: 100%;
      }

      .torch {
        @media screen and (max-width: $third-incr) {
          height: 45px;
        }

        @media screen and (max-height: 855px),
          screen and (max-width: $fifth-incr) {
          height: 40px;
        }
      }

      .textWrapper {
        margin-left: 10px;
        margin-top: 5px;

        .homeText {
          height: 30px;

          @media screen and (max-width: 370px) {
            display: none;
          }

          @media screen and (max-width: $third-incr) {
            height: 25px;
            padding-right: 30px;
          }

          @media screen and (max-height: 855px),
            screen and (max-width: $fifth-incr) {
            height: 24px;
            padding-right: 45px;
          }
        }

        .siteName {
          color: $bright-font;
          font-size: 14px;
          line-height: 0.9;
          display: none;

          @media screen and (max-width: $fourth-incr) {
            display: block;
          }

          @media screen and (max-height: 855px),
            screen and (max-width: $fifth-incr) {
            font-size: 12px;
          }

          @media screen and (max-width: 370px) {
            display: none;
          }
        }
      }
    }

    .btnWrapper {
      width: 220px;
      display: flex;
      justify-content: flex-end;
      z-index: 4;

      @media screen and (max-width: 1050px) {
        margin-right: 80px;
      }

      @media screen and (max-width: 750px) {
        display: none;
      }
    }

    .mobileMenuBtn {
      filter: $white-filter;
      height: 40px;
      position: absolute;
      right: 40px;
      display: none;
      cursor: pointer;

      @media screen and (max-width: 1050px) {
        display: block;
      }

      @media screen and (max-height: 855px),
        screen and (max-width: $fifth-incr) {
        height: 37px;
      }
    }

    .mainLinks {
      @media screen and (max-width: 1050px) {
        display: none;
      }

      @media screen and (max-height: 855px),
        screen and (max-width: $fifth-incr) {
        font-size: 20px !important;
      }
    }

    .default {
      gap: 50px;
      position: relative;
      padding-top: 10px;

      .ddCat {
        a {
          margin-right: 16px !important;
          position: relative;
        }

        &:hover {
          a::before {
            content: none;
          }
        }
      }

      li {
        position: relative;
        z-index: 2;
        cursor: pointer;

        * {
          padding: 0;
        }

        .subLinksWrapper {
          position: absolute;
          padding-top: 12px;
          z-index: 1;
          display: none;

          .subLinks {
            list-style: none;
            width: auto;
            background-color: #113042;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 14px;
            padding-bottom: 15px;
            border-radius: 1px;
            white-space: nowrap;
            -webkit-box-shadow: 5px 5px 13px 0px rgba(0, 0, 0, 0.12);
            box-shadow: 5px 5px 13px 0px rgba(0, 0, 0, 0.12);

            &:after {
              bottom: calc(100% - 12px);
              left: 23px;
              border: solid transparent;
              content: '';
              height: 0;
              width: 0;
              position: absolute;
              pointer-events: none;
              border-bottom-color: #113042;
              border-width: 7px;
              margin-left: -7px;
            }

            li {
              width: 100%;
              font-size: 0.9em;
              cursor: pointer;
              transition: background-color 0.2s ease;

              a {
                width: 100%;
                letter-spacing: 0.1em;
                padding-top: 8px;
                padding-bottom: 8px;
                padding-left: 30px;
                padding-right: 30px;
                box-sizing: border-box;
                display: block;
                color: rgb(238, 238, 238);
              }

              .underline {
                &::before {
                  width: 90%;
                  bottom: -3px;
                }
              }

              &:hover {
                & > a {
                  color: white;

                  &:before {
                    width: 90%;
                    bottom: -3px;
                  }
                }

                background-color: #123144;
              }
            }
          }
        }

        &:hover .subLinksWrapper {
          display: block;
        }
      }
    }

    // .mainLinks > li::after {
    //   content: '   ·   ';
    //   white-space: pre;
    //   color: $bright-font;
    //   font-size: 24px;
    // }

    // .mainLinks > li:last-of-type::after {
    //   content: '';
    //   white-space: pre;
    //   color: $bright-font;
    //   font-size: 30px;
    // }
  }

  .mainLinks {
    height: 40px;
    display: flex;
    font-size: 24px;
    list-style: none;

    li a {
      color: $bright-font;
      font-family: $standard-big-font;
    }
  }

  .overlayBlocker {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color: transparent;
    z-index: 19;
  }

  .mobileNav {
    background-color: $main;
    display: inline-block;
    position: fixed;
    overflow: hidden;
    height: 100vh;
    width: 0;
    z-index: 20;
    right: 0;
    top: 0;
    transition: width 0.2s ease;
    box-sizing: border-box;

    @media screen and (max-width: $third-incr) {
      max-width: 100vw;
    }
    // @media screen and (max-width: 370px) {
    //   max-width: 100vw;
    // }

    .closeMobileMenuBtn {
      position: absolute;
      top: 30px;
      left: 30px;
      cursor: pointer;
    }

    .btnWrapper {
      align-items: center;
      flex-direction: column;
      display: none;
      position: absolute;
      left: 0;
      right: 0;
      bottom: calc((100vh - var(--vh)) + 70px);
      margin-left: auto;
      margin-right: auto;
      opacity: 0;
      transition-delay: 0s;
      transition-duration: 0.01s;

      @media screen and (max-height: 340px) {
        bottom: 30px;
      }

      @media screen and (max-width: 750px) {
        display: flex;
      }

      @media screen and (max-width: 529px) {
        .button {
          min-width: 0 !important;
          width: 60%;
        }
      }
    }

    .mainLinks {
      height: 100%;
      flex-direction: column;
      padding: 87px 0 15% 0;
      opacity: 0;
      transition-delay: 0s;
      transition-duration: 0.01s;

      @media screen and (max-height: 400px) {
        padding-top: 40px;
      }

      @media screen and (max-height: 340px) {
        padding-top: 20px;
      }

      li {
        margin-top: 25px;
      }
    }

    .mobile {
      box-sizing: border-box;
      max-height: calc(var(--vh) - 265px);
      overflow-y: scroll;

      .ddCat {
        a {
          margin-right: 16px !important;
          position: relative;
        }
      }

      li {
        position: relative;
        z-index: 2;
        cursor: pointer;
        width: fit-content;
        width: 100%;
        padding-left: 50px;
        padding-right: 50px;
        box-sizing: border-box;

        .underline::before {
          width: 2px;
          border-radius: 1px;
          height: 60%;
          right: auto;
          left: -10px;
          top: 18%;
        }

        & > a {
          display: flex;
          justify-content: space-between;
        }

        * {
          padding: 0;
        }

        .subLinksWrapper {
          z-index: 1;
          height: 0px;
          transition: 0.2s height ease;

          .subLinks {
            list-style: none;
            width: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-bottom: 15px;
            border-radius: 1px;
            white-space: nowrap;
            opacity: 0;
            transition: 0.2s ease opacity;

            li {
              width: 100%;
              font-size: 0.8em;
              cursor: pointer;
              list-style: none;

              a {
                width: 100%;
                letter-spacing: 0.1em;
                padding-left: 15px;
                padding-right: 30px;
                box-sizing: border-box;
                display: block;
                color: rgb(238, 238, 238);
              }

              .underline {
                &::before {
                  width: 90%;
                  bottom: -3px;
                }
              }

              &:hover {
                & > a {
                  color: white;

                  &:before {
                    width: 90%;
                    bottom: -3px;
                  }
                }

                background-color: #123144;
              }
            }
          }
        }
      }

      .subLinksWrapperVis {
        .ddArrow {
          transform: rotate(135deg);
        }

        .subLinksWrapper {
          height: 111px;

          .subLinks {
            opacity: 1;
            transition-delay: 0.1s;
          }
        }
      }
    }
  }

  .vis {
    width: 290px;
    -webkit-box-shadow: -1px 0px 31px 12px rgba(0, 0, 0, 0.15);
    box-shadow: -1px 0px 31px 12px rgba(0, 0, 0, 0.15);

    @media screen and (max-width: 310px) {
      width: 100vw;
    }

    .mainLinks {
      opacity: 1;

      transition: opacity 0.3s ease;
      transition-delay: 0.1s;
    }

    .btnWrapper {
      opacity: 1;

      transition: opacity 0.3s ease;
      transition-delay: 0.1s;
    }
  }
}

.subLinksTrans {
  background-color: #3636368a !important;

  &:after {
    border-bottom-color: #3636368a !important;
  }

  li {
    &:hover {
      background-color: transparent !important;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(54, 54, 54, 0.08) 3%,
        rgba(54, 54, 54, 0.08) 97%,
        rgba(255, 255, 255, 0) 100%
      ) !important;
    }
  }
}
</style>