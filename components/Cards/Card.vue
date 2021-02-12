<template>
  <b-card
    no-body
    :class="[
      {'card-lift--hover': hover},
      {'shadow': shadow},
      {[`shadow-${shadowSize}`]: shadowSize},
      {[`bg-gradient-${gradient}`]: gradient},
      {[`bg-${type}`]: type}
    ]"
  >
    <slot name="image" />
    <b-card-header v-if="$slots.header" :class="headerClasses">
      <slot name="header" />
    </b-card-header>
    <b-card-body v-if="!noBody" :class="bodyClasses">
      <slot />
    </b-card-body>

    <slot v-if="noBody" />

    <b-card-footer v-if="$slots.footer" :class="footerClasses">
      <slot name="footer" />
    </b-card-footer>
  </b-card>
</template>
<script>
export default {
  name: 'Card',
  props: {
    type: {
      type: String,
      description: 'Card type'
    },
    gradient: {
      type: String,
      description: 'Card background gradient type (warning,danger etc)'
    },
    hover: {
      type: Boolean,
      description: 'Whether card should move on hover'
    },
    shadow: {
      type: Boolean,
      description: 'Whether card has shadow'
    },
    shadowSize: {
      type: String,
      description: 'Card shadow size'
    },
    noBody: {
      type: Boolean,
      default: false,
      description: 'Whether card should have wrapper body class'
    },
    bodyClasses: {
      type: [String, Object, Array],
      description: 'Card body css classes'
    },
    headerClasses: {
      type: [String, Object, Array],
      description: 'Card header css classes'
    },
    footerClasses: {
      type: [String, Object, Array],
      description: 'Card footer css classes'
    }
  }
};
</script>
<style>
</style>
