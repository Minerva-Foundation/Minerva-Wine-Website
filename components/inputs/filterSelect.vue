<template>
  <div class="selectWrapper">
    <div
      class="sel"
      :class="{ selected: selected }"
      v-on="
        hover
          ? {
              mouseover: () => (selected = true),
              mouseleave: () => (selected = false),
            }
          : {}
      "
    >
      <div
        class="placeholder noselect"
        v-on="hover ? {} : { click: () => (selected = !selected) }"
      >
        {{ placeholder }}
      </div>
      <div v-for="(checked, option) in options" :key="option" class="option">
        <label :for="option" class="optionName" @click.stop>{{ option }}</label>
        <input
          :id="option"
          type="checkbox"
          class="checker"
          :checked="checked"
          @click.stop
          @input="
            $emit('selectionChecked', {
              option: option,
              checked: $event.target.checked,
            })
          "
        />
      </div>
      <div
        class="arrow"
        :class="{ selected: selected }"
        @click="selected = !selected"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'SelectWrapper',
  props: {
    placeholder: {
      type: String,
      required: false,
      default: 'Select ...',
    },
    options: {
      type: Object,
      required: false,
      default: () => {},
    },
    hover: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: () => ({
    selected: false,
  }),
});
</script>

<style lang="scss" scoped>
.selectWrapper {
  position: relative;

  .sel {
    width: 100%;
    border-radius: 12px;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: white;
    height: 69px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    overflow: hidden;
    text-transform: uppercase;

    @media screen and (max-width: $fourth-incr) {
      height: 60px;
    }

    * {
      font-size: 14.5px;
    }

    .placeholder {
      height: 69px;
      box-sizing: border-box;
      padding: 20px 20px 20px 20px;
      display: flex;
      align-items: center;
      cursor: pointer;
      padding-right: 60px;

      @media screen and (max-width: $fourth-incr) {
        height: 60px;
      }
    }

    .option {
      padding: 0px 20px 10px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      * {
        cursor: pointer;
      }

      .optionName {
        width: 100%;
      }

      .checker {
        border-radius: 50%;
        filter: saturate(0%);
      }
    }

    .arrow {
      position: absolute;
      top: 19px;
      right: 28px;
      width: 9px;
      height: 9px;
      border: solid rgba(0, 0, 0, 0.2);
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 3px;
      transition-timing-function: ease-in-out;
      transition-duration: 0.2s;
      transition-property: transform top;
      transform: rotate(43.5deg);
      -webkit-transform: rotate(43.5deg);
      cursor: pointer;

      @media screen and (max-width: $fourth-incr) {
        top: 17px;
      }
    }

    .sel:hover ~ .arrow {
      border: solid rgb(0, 0, 0);
      border-width: 0 2px 2px 0;
    }
  }

  .selected {
    height: auto;
    padding-bottom: 20px;
    border: 1px solid rgba(0, 0, 0, 0.349);

    .arrow {
      border: solid #333;
      border-width: 0 2px 2px 0;
      transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
      top: 30px;

      @media screen and (max-width: $fourth-incr) {
        top: 27px;
      }
    }
  }
}

.input-label {
  background-image: url('/images/tickbox.png');
}
</style>