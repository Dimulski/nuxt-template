<template>
  <div>
    <div
      class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center profile-header"
      style="min-height: 600px; background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;"
    >
      <b-container fluid>
        <!-- Mask -->
        <span class="mask bg-gradient-success opacity-8" />
        <!-- Header container -->
        <b-container fluid class="d-flex align-items-center">
          <b-row>
            <b-col lg="7" md="10">
              <h1 class="display-2 text-white">
                Hello Jesse
              </h1>
              <p class="text-white mt-0 mb-5">
                This is your profile page. You can see the progress you've made with your
                work and manage your projects or assigned tasks
              </p>
              <a href="#!" class="btn btn-info">Edit profile</a>
            </b-col>
          </b-row>
        </b-container>
      </b-container>
    </div>

    <b-container fluid class="mt--6">
      <b-row>
        <b-col xl="4" class="order-xl-2 mb-5">
          <user-card />
        </b-col>
        <b-col xl="8" class="order-xl-1">
          <edit-profile-form />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import UserCard from '@/components/UserProfile/UserCard.vue';
import EditProfileForm from '@/components/UserProfile/EditProfileForm.vue';

export default {
  components: {
    EditProfileForm,
    UserCard
  },
  layout: 'DashboardLayout'
};
</script>
<style>
</style>
