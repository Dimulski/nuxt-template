<template>
  <b-breadcrumb-item :active="active">
    <slot />
  </b-breadcrumb-item>
</template>
<script>
export default {
  name: 'BreadcrumbItem',
  props: {
    active: {
      type: Boolean,
      default: false,
      description: 'Whether breadcrumb item is active'
    }
  }
};
</script>
<style></style>
