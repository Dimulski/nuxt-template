<template>
  <div class="btn-group-toggle" data-toggle="buttons">
    <label
      v-for="(option, index) in options"
      :key="index"
      class="btn"
      :class="[{ active: value === option.value }, buttonClasses]"
    >
      <input
        id="option1"
        v-model="model"
        :value="option.value"
        type="radio"
        autocomplete="off"
        checked=""
      >
      {{ option.label }}
    </label>
  </div>
</template>
<script>
export default {
  name: 'ButtonRadioGroup',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    options: {
      type: Array,
      description: 'Radio options. Should be an array of objects {value: "", label: ""}',
      default: () => []
    },
    value: {
      type: String,
      description: 'Radio value'
    },
    buttonClasses: {
      type: [String, Object],
      description: 'Inner button css classes'
    }
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('change', val);
      }
    }
  }
};
</script>
<style>
</style>
