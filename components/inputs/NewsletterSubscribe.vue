<template>
  <form class="wrapperNewsletter" @submit.prevent="submitForm">
    <input
      v-model="currentEmail"
      type="email"
      class="mail"
      name="fields[email]"
      placeholder="Email"
      autocomplete="email"
    />
    <button type="submit" class="button">
      <div v-if="waitingResult" class="dot-pulse"></div>
      <span v-if="!waitingResult" class="btnText">Receive updates</span>
    </button>
    <div v-if="result !== ''" class="result">
      {{ result }}
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NewsletterSubscribe',
  data: () => ({
    currentEmail: '',
    waitingResult: false,
    result: '',
  }),
  methods: {
    submitForm() {
      const formData = new FormData();
      formData.append('fields[email]', this.currentEmail);
      this.waitingResult = true;

      fetch(
        'https://assets.mailerlite.com/jsonp/3681/forms/50479370766124647/subscribe?fields%5Bemail%5D=' +
          this.currentEmail,
        {
          method: 'GET',
        }
      )
        .then(async (response) => {
          const data = await response.json();

          if (!data.success) {
            this.waitingResult = false;
            return Promise.reject(data.errors.fields.email[0]);
          }

          this.waitingResult = false;
          this.result = 'Check your inbox to confirm';
        })
        .catch((error) => {
          this.result = error;
          console.error('There was an error!', error);
        })
        .then(() => {
          setTimeout(() => {
            this.result = '';
            this.waitingResult = false;
            this.currentEmail = '';
          }, 5000);
        });
    },
  },
});
</script>

<style lang="scss" scoped>
.wrapperNewsletter {
  height: $btn-height;
  background-color: transparent;
  display: flex;
  width: 70%;
  min-width: 500px;
  position: relative;

  @media screen and (max-height: 950px) {
    height: calc(#{$btn-height} - 5px);
  }

  @media screen and (max-height: 900px) and (min-width: $third-incr) {
    height: calc(#{$btn-height} - 8px);
    width: 75%;
  }

  @media screen and (max-width: $third-incr) {
    width: 79vw;
    min-width: 0;
  }

  @media screen and (max-width: $fourth-incr) {
    height: calc(#{$btn-height} - 10px) !important;
    width: 100%;
  }

  @media screen and (max-width: $fifth-incr) {
    height: calc(#{$btn-height} - 16px) !important;
  }

  @media screen and (max-height: 855px) and (max-width: $fourth-incr) {
    height: calc(#{$btn-height} - 16px) !important;
  }

  .result {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 20px);
    height: 100%;
    border-radius: 7px;
    z-index: 2;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 18px;
    background-color: $secondary;
    padding: 0px 10px 0px 10px;

    @media screen and (max-width: $fifth-incr) {
      font-size: 14px;
    }
  }

  .mail {
    border-bottom-left-radius: 7px;
    border-top-left-radius: 7px;
    width: 75%;
    border: none;
    padding: 17px 20px 15px 20px;
    background-color: rgb(230, 230, 230);
    font-size: 1.2em;
    color: #333;
    caret-color: $main;
    letter-spacing: 0.05em;

    &:focus {
      outline: none;
      -webkit-box-shadow: inset 0px 0px 0px 2px $secondary;
      -moz-box-shadow: inset 0px 0px 0px 2px $secondary;
      box-shadow: inset 0px 0px 0px 2px $secondary;
    }

    &::placeholder {
      color: #777;
    }
  }

  .button {
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    width: 25%;
    min-width: 14em;
    height: 100%;
    font-size: max(0.95rem, 12px);
    text-transform: uppercase;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: $fourth-incr) {
      min-width: 120px !important;
      height: auto !important;
      min-height: 45px;
      padding: 0px 5px 0px 5px;
    }

    @media screen and (max-width: $fifth-incr) {
      font-size: 11px;
    }
  }
}

.dot-pulse {
  position: relative;
  left: -9999px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #ffffff;
  color: #ffffff;
  box-shadow: 9999px 0 0 -5px #ffffff;
  animation: dotPulse 1.5s infinite linear;
  animation-delay: 0.25s;
}

.dot-pulse::before,
.dot-pulse::after {
  content: '';
  display: inline-block;
  position: absolute;
  top: 0;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #ffffff;
  color: #ffffff;
}

.dot-pulse::before {
  box-shadow: 9980px 0 0 -5px #ffffff;
  animation: dotPulseBefore 1.5s infinite linear;
  animation-delay: 0s;
}

.dot-pulse::after {
  box-shadow: 10008px 0 0 -5px #ffffff;
  animation: dotPulseAfter 1.5s infinite linear;
  animation-delay: 0.5s;
}

@keyframes dotPulseBefore {
  0% {
    box-shadow: 9980px 0 0 -5px #ffffff;
  }
  30% {
    box-shadow: 9980px 0 0 2px #ffffff;
  }
  60%,
  100% {
    box-shadow: 9980px 0 0 -5px #ffffff;
  }
}

@keyframes dotPulse {
  0% {
    box-shadow: 9999px 0 0 -5px #ffffff;
  }
  30% {
    box-shadow: 9999px 0 0 2px #ffffff;
  }
  60%,
  100% {
    box-shadow: 9999px 0 0 -5px #ffffff;
  }
}

@keyframes dotPulseAfter {
  0% {
    box-shadow: 10008px 0 0 -5px #ffffff;
  }
  30% {
    box-shadow: 10008px 0 0 2px #ffffff;
  }
  60%,
  100% {
    box-shadow: 10008px 0 0 -5px #ffffff;
  }
}
</style>