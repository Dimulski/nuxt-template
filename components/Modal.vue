<template>
  <SlideYUpTransition :duration="animationDuration">
    <b-modal
      ref="app-modal"
      class="modal fade"
      :size="size"
      :hide-header="!$slots.header"
      :modal-class="[{'modal-mini': type === 'mini'}, ...modalClasses]"
      tabindex="-1"
      role="dialog"
      centered
      :header-class="headerClasses"
      :footer-class="footerClasses"
      :content-class="[gradient ? `bg-gradient-${gradient}` : '', ...modalContentClasses]"
      :body-class="bodyClasses"
      :aria-hidden="!show"
      @mousedown.self="closeModal"
      @close="closeModal"
      @hide="closeModal"
    >
      <template #modal-header>
        <slot name="header" />
        <slot name="close-button">
          <button
            v-if="showClose"
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="closeModal"
          >
            <span :aria-hidden="!show">×</span>
          </button>
        </slot>
      </template>

      <slot />

      <template #modal-footer>
        <slot name="footer" />
      </template>
    </b-modal>
  </SlideYUpTransition>
</template>
<script>
import { SlideYUpTransition } from 'vue2-transitions';

export default {
  name: 'Modal',
  components: {
    SlideYUpTransition
  },
  props: {
    show: Boolean,
    showClose: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: '',
      validator(value) {
        const acceptedValues = ['', 'notice', 'mini'];
        return acceptedValues.includes(value);
      },
      description: 'Modal type (notice|mini|"") '
    },
    modalClasses: {
      type: [Object, String],
      description: 'Modal dialog css classes'
    },
    size: {
      type: String,
      description: 'Modal size',
      validator(value) {
        const acceptedValues = ['', 'sm', 'lg'];
        return acceptedValues.includes(value);
      }
    },
    modalContentClasses: {
      type: [Object, String],
      description: 'Modal dialog content css classes'
    },
    gradient: {
      type: String,
      description: 'Modal gradient type (danger, primary etc)'
    },
    headerClasses: {
      type: [Object, String],
      description: 'Modal Header css classes'
    },
    bodyClasses: {
      type: [Object, String],
      description: 'Modal Body css classes'
    },
    footerClasses: {
      type: [Object, String],
      description: 'Modal Footer css classes'
    },
    animationDuration: {
      type: Number,
      default: 500,
      description: 'Modal transition duration'
    }
  },
  watch: {
    show(val) {
      if (val) {
        this.$refs['app-modal'].show();
      } else {
        this.$refs['app-modal'].hide();
      }
    }
  },
  methods: {
    closeModal() {
      this.$emit('update:show', false);
      this.$emit('close');
    }
  }
};
</script>
<style>
  .modal-backdrop {
    background-color: rgba(0, 0, 0, 0.6) !important;
  }
</style>
