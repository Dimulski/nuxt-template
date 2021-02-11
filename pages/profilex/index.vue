<template>
  <div class="container mx-auto px-6 pb-12 pt-4 md:py-16">
    {{ $t('profile.welcome') }}
    <div v-click-outside="myAlert()" style="width 200px; height: 300px; background-color: orange">
      cool div
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  head() {
    return {};
  },
  computed: {
  },
  methods: {
    myAlert() {
      alert('hi');
    }
  }
};
</script>

<style lang="scss"></style>
