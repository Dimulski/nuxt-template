<template>
  <div class="container mx-auto px-6 pb-12 pt-4 md:py-16">
    {{ $t('profile.welcome') }}
    <div v-click-outside="myAlert()" style="width 200px; height: 300px; background-color: orange">
      cool div
    </div>
    <!-- <div class="max-w-2xl pb-4 mx-auto">
      <h1 class="text-4xl">Posts</h1>
    </div>
    <BlogpostItem
      v-for="blogpost of blogposts"
      :key="blogpost.slug"
      :post="blogpost"
    /> -->
  </div>
</template>

<script>
// import BlogpostItem from '@/components/BlogpostItem'
// import { mapGetters } from 'vuex'

export default {
  components: {
    // BlogpostItem,
  },
  head() {
    return {};
  },
  computed: {
    // ...mapGetters({
    //   blogposts: 'getBlogposts',
    // }),
  },
  methods: {
    myAlert() {
      alert('hi');
    }
  }
  //   async asyncData(context) {

  //     const blogsposts = await response.json()
  //     context.store.dispatch('setBlogposts', blogsposts.data)
  //   },
};
</script>

<style lang="scss"></style>
